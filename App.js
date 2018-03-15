import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, StyleSheet, StatusBar } from 'react-native';
import { HomeContainer, LoginContainer, PersonalScheduleContainer } from './screens';
import { initializeFirebase, subscribeToTrack } from './utils/firebaseService';
import {
  handleFacebookLogin,
  handleGoogleLogin,
} from './utils/authenticationService';

import StorybookUI from './storybook';

const Navigator = StackNavigator(
  {
    // Login: { screen: LoginContainer },
    Home: { screen: HomeContainer },
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
);

const RootStack = StackNavigator(
  {
    Main: {
      screen: Navigator,
    },
    PersonalSchedule: {
      screen: PersonalScheduleContainer,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    cardStyle: {
      shadowOpacity: 0,
    },
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.firebaseRefs = {};
    this.state = {
      shiftData: [],
      userInfo: {},
      usersPerSchedule: {},
      isStorybookEnabled: false,
    };

    StatusBar.setBarStyle('light-content', true);
  }

  componentWillMount() {
    initializeFirebase();
  }

  componentWillUnmount() {
    Object.keys(this.firebaseRefs).forEach(trackId =>
      this.firebaseRefs[trackId].off('value', this.onChangeUsers),
    );
  }

  onChangeUsers = (snapshot, trackId) => {
    const visitors = snapshot.val() && snapshot.val().userIds;
    this.setState({
      usersPerSchedule: { ...this.state.usersPerSchedule, [trackId]: visitors },
    });
  };

  handleFacebookLogin = async () => {
    const userInfo = await handleFacebookLogin();
    this.setState({
      userInfo: {
        ...userInfo,
        picture: userInfo.picture.data.url,
      },
    });
  };

  handleGoogleLogin = async () => {
    const userInfo = await handleGoogleLogin();
    this.setState({
      userInfo: {
        ...userInfo,
        first_name: userInfo.given_name,
      },
    });
  };

  handleStorybookGesture = () => {
    if (process.env.NODE_ENV === 'development') {
      this.setState({
        isStorybookEnabled: true,
      });
    }
  }

  renderStorybook() {
    return <StorybookUI />;
  }

  render() {
    const {
      userInfo,
      isStorybookEnabled,
    } = this.state;
    return (
      isStorybookEnabled ?
        this.renderStorybook() :
        (<View style={styles.container}>
          <RootStack
            screenProps={{
              handleStorybookGesture: () => this.handleStorybookGesture(),
              userInfo,
              facebookLogin: () => this.handleFacebookLogin(),
              googleLogin: () => this.handleGoogleLogin(),
              onChangeSubscription: trackId =>
                subscribeToTrack({
                  trackId,
                  currentUserId: this.state.userInfo.id,
                  subscribedUsers: this.state.usersPerSchedule[trackId] || [],
                }),
              userId: this.state.userInfo.id,
            }}
          />
        </View>)
    );
  }
}

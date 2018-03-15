// @flow
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TFacebookUserInfo } from './types/authentication';
import { TFirebaseSnapshot } from './types/firebase';
import { HomeContainer, LoginContainer, PersonalScheduleContainer } from './screens';
import { initializeFirebase, subscribeToTrack } from './utils/firebaseService';
import { handleFacebookLogin, handleGoogleLogin } from './utils/authenticationService';

const Navigator = StackNavigator(
  {
    Login: { screen: LoginContainer },
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

type State = {
  userInfo: TFacebookUserInfo | {},
  usersPerSchedule: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends Component<*, State> {
  constructor(props) {
    super(props);

    this.firebaseRefs = {};
    this.state = {
      userInfo: {},
      usersPerSchedule: {},
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

  onChangeUsers = (snapshot: TFirebaseSnapshot, trackId: string) => {
    const visitors = snapshot.val() && snapshot.val().userIds;
    this.setState({
      usersPerSchedule: { ...this.state.usersPerSchedule, [trackId]: visitors },
    });
  };

  handleFacebookLogin = async () => {
    const userInfo = await handleFacebookLogin();
    if (!userInfo.id) return;

    this.setState({
      userInfo: {
        ...userInfo,
        picture: userInfo.picture.data.url,
      },
    });
  };

  handleGoogleLogin = async () => {
    const userInfo = await handleGoogleLogin();
    if (!userInfo.id) return;

    this.setState({
      userInfo: {
        ...userInfo,
        first_name: userInfo.given_name,
      },
    });
  };

  render() {
    const { userInfo } = this.state;
    return (
      <View style={styles.container}>
        <RootStack
          screenProps={{
            userInfo,
            handleFacebookLogin: () => this.handleFacebookLogin(),
            handleGoogleLogin: () => this.handleGoogleLogin(),
            onChangeSubscription: (trackId: string) =>
              subscribeToTrack({
                trackId,
                currentUserId: this.state.userInfo.id,
                subscribedUsers: this.state.usersPerSchedule[trackId] || [],
              }),
            userId: this.state.userInfo.id,
          }}
        />
      </View>
    );
  }
}

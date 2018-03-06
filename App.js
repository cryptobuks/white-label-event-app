import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import { HomeScreen, DetailScreen } from './screens';
import LoginContainer from './screens/login/LoginContainer';
import { initializeFirebase, subscribeToTrack } from './utils/firebaseService';
import { handleFacebookLogin, handleGoogleLogin } from './utils/authenticationService';

const Navigator = StackNavigator({
  Login: { screen: LoginContainer },
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
});

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
    };
  }

  componentWillMount() {
    initializeFirebase();
  }

  componentWillUnmount() {
    Object.keys(this.firebaseRefs).forEach(trackId => this.firebaseRefs[trackId].off('value', this.onChangeUsers));
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

  render() {
    const { userInfo } = this.state;
    return (
      <View style={styles.container}>
        <Navigator
          screenProps={{
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
      </View>
    );
  }
}

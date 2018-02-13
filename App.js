import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, StyleSheet } from 'react-native';
import { HomeScreen, DetailScreen, UserScreen } from './screens';
import { initializeFirebase, subscribeToTrack, listenFirebaseChanges } from './utils/firebaseService';
import { handleFacebookLogin, handleGoogleLogin } from './utils/authenticationService';
import getShiftData from './utils/shiftService';

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
  User: { screen: UserScreen },
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
    getShiftData()
      .then((response) => {
        this.setState({ shiftData: response.data });
        return response.data;
      })
      .then((shiftData) => {
        shiftData.forEach((shiftSchedule) => {
          const firebaseRef = listenFirebaseChanges(shiftSchedule.name);
          firebaseRef.on('value', snapshot => this.onChangeUsers(snapshot, shiftSchedule.name));
          this.firebaseRefs[shiftSchedule.name] = firebaseRef;
        });
      });
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
      }
    })
  };

  handleGoogleLogin = async () => {
    const userInfo = await handleGoogleLogin();
    this.setState({
      userInfo: {
        ...userInfo,
        first_name: userInfo.given_name,
      }
    })
  };

  render() {
    const { userInfo } = this.state;
    return (
      <View style={styles.container}>
        <Navigator
          screenProps={{
            shiftData: this.state.shiftData,
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
            usersPerSchedule: this.state.usersPerSchedule,
          }}
        />
      </View>
    );
  }
}

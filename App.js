// @flow
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'unstated';
import type { StackNavigatorConfig } from 'react-navigation/src/TypeDefinition';
import type { TFacebookUserInfo } from './types/authentication';
import type { TFirebaseSnapshot } from './types/firebase';
import { HOME, LOGIN, createRootStackNavigator } from './screens';
import { initializeFirebase, subscribeToTrack } from './utils/firebaseService';
import UserContainer from './state/UserContainer';

const user = new UserContainer();

type State = {
  userInfo: TFacebookUserInfo | {},
  usersPerSchedule: {},
};

export default class App extends Component<*, State> {
  constructor(props: *) {
    super(props);

    this.firebaseRefs = {};
    this.state = {
      usersPerSchedule: {},
    };

    StatusBar.setBarStyle('light-content', true);
  }

  componentWillMount() {
    initializeFirebase();
    const isLoggedIn = user.isAuthenticatedUser();

    this.RootStack = isLoggedIn ? createRootStackNavigator(HOME) : createRootStackNavigator(LOGIN);
  }

  componentWillUnmount() {
    // TODO #44 move to HomeContainer
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

  RootStack: StackNavigatorConfig;

  render() {
    const RootStack = this.RootStack;
    return (
      <Provider inject={[user]}>
        <RootStack
          screenProps={{
            onChangeSubscription: (trackId: string) =>
              subscribeToTrack({
                trackId,
                currentUserId: user.state.id,
                subscribedUsers: this.state.usersPerSchedule[trackId] || [],
              }),
            userId: user.state.id,
          }}
        />
      </Provider>
    );
  }
}

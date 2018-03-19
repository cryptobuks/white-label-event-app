// @flow
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'unstated';
import type { StackNavigatorConfig } from 'react-navigation/src/TypeDefinition';
import type { TFirebaseSnapshot } from './types/firebase';
import { HOME, LOGIN, createRootStackNavigator } from './screens';
import { initializeFirebase, subscribeToTrack } from './utils/firebaseService';
import UserContainer from './state/UserContainer';
import StorybookUI from './storybook';

const user = new UserContainer();

type State = {
  usersPerSchedule: {},
  isStorybookEnabled: boolean,
};

export default class App extends Component<*, State> {
  constructor(props: *) {
    super(props);

    this.firebaseRefs = {};

    this.state = {
      usersPerSchedule: {},
      isStorybookEnabled: false,
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

  handleStorybookGesture = () => {
    if (process.env.NODE_ENV === 'development') {
      this.setState({
        isStorybookEnabled: true,
      });
    }
  };

  RootStack: StackNavigatorConfig;

  renderStorybook() {
    return <StorybookUI />;
  }

  render() {
    const RootStack = this.RootStack;
    const { isStorybookEnabled } = this.state;
    return isStorybookEnabled ? (
      this.renderStorybook()
    ) : (
      <Provider inject={[user]}>
        <RootStack
          screenProps={{
            handleStorybookGesture: () => this.handleStorybookGesture(),
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

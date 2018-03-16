// @flow
import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import { HOME } from '../../config/screenIds';
import { TScreenProps } from '../../types/screenprops';

type Props = {
  screenProps: TScreenProps,
};

export default class LoginContainer extends Component<Props> {
  componentWillReceiveProps(newProps) {
    const { userInfo } = newProps.screenProps;

    if (Object.keys(userInfo).length > 0) {
      this.props.navigation.navigate(HOME);
    }
  }

  handleFacebookLogin = () => {
    this.props.screenProps.handleFacebookLogin();
  };

  handleGoogleLogin = () => {
    this.props.screenProps.handleGoogleLogin();
  };

  render() {
    return (
      <LoginScreen
        onFacebookLogin={this.handleFacebookLogin}
        onGoogleLogin={this.handleGoogleLogin}
      />
    );
  }
}

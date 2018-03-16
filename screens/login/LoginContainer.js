// @flow
import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import { HOME } from '../../config/screenIds';

type Props = {
  screenProps: {
    handleFacebookLogin: Function,
    handleGoogleLogin: Function,
    userInfo: {},
    userId: string,
  },
};

export default class LoginContainer extends Component<Props> {
  componentWillReceiveProps(newProps) {
    const { userInfo } = newProps.screenProps;

    if (Object.keys(userInfo).length > 0) {
      this.props.navigation.navigate(HOME);
    }
  }

  handleFacebookLogin = () => {
    this.props.screenProps.facebookLogin();
  };

  handleGoogleLogin = () => {
    this.props.screenProps.googleLogin();
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

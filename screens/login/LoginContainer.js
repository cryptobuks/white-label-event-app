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

  render() {
    const { handleFacebookLogin, handleGoogleLogin } = this.props.screenProps;

    return <LoginScreen onFacebookLogin={handleFacebookLogin} onGoogleLogin={handleGoogleLogin} />;
  }
}

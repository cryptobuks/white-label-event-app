import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import { HOME } from '../../config/screenIds';

export default class LoginContainer extends Component {
  componentWillReceiveProps(newProps) {
    const { userInfo } = newProps.screenProps;

    if (Object.keys(userInfo).length > 0) {
      this.props.navigation.navigate(HOME);
    }
  }

  render() {
    return <LoginScreen screenProps={this.props.screenProps} />;
  }
}

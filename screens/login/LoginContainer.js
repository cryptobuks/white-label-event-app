// @flow
import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import UserContainer from '../../state/UserContainer';
import type { TUser } from '../../types/authentication';
import LoginScreen from './LoginScreen';
import { HOME } from '../../screens';
import { handleFacebookLogin, handleGoogleLogin } from '../../utils/authenticationService';

type Props = {
  user: TUser,
};

class LoginContainer extends Component<Props> {
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.isAuthenticatedUser()) this.handleSuccessfulLogin();
  }

  handleSuccessfulLogin = () => this.props.navigation.navigate(HOME);

  handleFacebookLogin = async () => {
    const userInfo = await handleFacebookLogin();

    if (userInfo.error) {
      // TODO #62 add error handling
      console.error('Facebook error', userInfo.error);
    } else {
      console.log('wait wut facebook', userInfo);
      this.props.user.setUser({
        ...userInfo,
        firstName: userInfo.first_name,
        picture: userInfo.picture && userInfo.picture.data.url,
      });
    }
  };

  handleGoogleLogin = async () => {
    const userInfo = await handleGoogleLogin();
    this.props.user.setUser({
      ...userInfo,
      firstName: userInfo.given_name,
    });
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

export default props => (
  <Subscribe to={[UserContainer]}>{user => <LoginContainer user={user} {...props} />}</Subscribe>
);

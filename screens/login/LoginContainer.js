// @flow
import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import UserContainer from '../../state/UserContainer';
import type { TNavigationProps } from '../../types/navigation';
import LoginScreen from './LoginScreen';
import { HOME } from '../../screens';
import { handleFacebookLogin, handleGoogleLogin } from '../../utils/authenticationService';

type TProps = {
  userState: UserContainer,
} & TNavigationProps;

class LoginContainer extends Component<TProps> {
  componentWillReceiveProps(nextProps) {
    if (nextProps.userState.isAuthenticatedUser()) this.handleSuccessfulLogin();
  }

  handleSuccessfulLogin = () => this.props.navigation.navigate(HOME);

  handleFacebookLogin = async () => {
    const userInfo = await handleFacebookLogin();

    if (userInfo.error) {
      // TODO #62 add error handling
      console.error('Facebook error', userInfo.error);
    } else {
      this.props.userState.setUser({
        ...userInfo,
        firstName: userInfo.first_name,
        picture: userInfo.picture && userInfo.picture.data.url,
      });
    }
  };

  handleGoogleLogin = async () => {
    const userInfo = await handleGoogleLogin();
    this.props.userState.setUser({
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

export default (props: TNavigationProps) => (
  <Subscribe to={[UserContainer]}>
    {userState => <LoginContainer userState={userState} {...props} />}
  </Subscribe>
);

import React, { Component } from 'react';
import LoginScreen from './LoginScreen';

import { Header } from '../../components';

export default class LoginContainer extends Component {
  componentWillMount() {
    return Object.keys(this.props.screenProps.userInfo).length !== 0 ?
      this.props.navigation.navigate('Home') : null;
  }

  render() {
    return <LoginScreen screenProps={this.props.screenProps} />;
  }
}

LoginContainer.navigationOptions = ({ navigation, screenProps }) => ({
  title: screenProps.userInfo ? screenProps.userInfo.name : 'Login',
  header: <Header navigate={navigation.navigate} user />,
});

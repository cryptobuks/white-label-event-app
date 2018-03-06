import React from 'react';
import LoginScreen from './LoginScreen';

import { Header } from '../../components';

const LoginContainer = ({
  screenInfo,
  navigation,
}) => (

  Object.keys(this.props.screenProps.userInfo).length !== 0 ?
    this.props.navigation.navigate('Home') :
    <LoginScreen screenInfo={screenInfo} />
);

LoginContainer.navigationOptions = ({ navigation, screenProps }) => ({
  title: screenProps.userInfo ? screenProps.userInfo.name : 'Login',
  header: <Header navigate={navigation.navigate} user />,
});

export default LoginContainer;

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

import { COLORS } from '../utils/colors';
import { Header } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: COLORS.white,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 60,
  },
  buttons: {
    height: 100,
    justifyContent: 'space-between',
  },
});

class UserScreen extends Component {
  renderLoginButton() {
    const { facebookLogin, googleLogin } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <Text style={styles.whiteText}>
          Have a great day at Shift! Please login to subscribe for talks & sessions troughout the day.
        </Text>
        <View style={styles.buttons}>
          <Button title="Login with Facebook" onPress={() => facebookLogin()} />
          <Button title="Login with Google" onPress={() => googleLogin()} />
        </View>
      </View>
    );
  }

  renderProfile() {
    const { userInfo } = this.props.screenProps;
    return (
      <View style={styles.container}>
        <Avatar
          xlarge
          rounded
          source={{ uri: userInfo.picture }}
        />
        <Text style={styles.whiteText}>
          Have a great day at Shift {userInfo.first_name}!
        </Text>
      </View>
    );
  }

  render() {
    const { userInfo } = this.props.screenProps;
    if (!userInfo.id) {
      return this.renderLoginButton();
    }
    return this.renderProfile();
  }
}

UserScreen.navigationOptions = ({ navigation, screenProps }) => ({
  title: screenProps.userInfo ? screenProps.userInfo.name : 'Login',
  header: <Header navigate={navigation.navigate} goBack={navigation.goBack} user />,
});

export default UserScreen;

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { COLORS } from '../../utils/colors';

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

const LoginScreen = ({ screenProps: { facebookLogin, googleLogin } }) => (
  <View style={styles.container}>
    <Text style={styles.whiteText}>
        Please login to subscribe for talks &
        sessions troughout the day.
    </Text>
    <View style={styles.buttons}>
      <Button title="Login with Facebook" onPress={() => facebookLogin()} />
      <Button title="Login with Google" onPress={() => googleLogin()} />
    </View>
  </View>);

export default LoginScreen;

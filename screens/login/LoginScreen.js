import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { COLORS, METRICS } from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: COLORS.white,
    padding: METRICS.gridSize * 7.5,
    paddingTop: 0,
  },
  buttons: {
    height: METRICS.gridSize * 12.5,
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

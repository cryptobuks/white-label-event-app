// @flow
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { COLORS, METRICS } from '../../config';

type Props = {
  onFacebookLogin: Function,
  onGoogleLogin: Function,
};

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

const LoginScreen = ({ onFacebookLogin, onGoogleLogin }: Props) => (
  <View style={styles.container}>
    <Text style={styles.whiteText}>
      Please login to subscribe for talks & sessions troughout the day.
    </Text>
    <View style={styles.buttons}>
      <Button title="Login with Facebook" onPress={onFacebookLogin} />
      <Button title="Login with Google" onPress={onGoogleLogin} />
    </View>
  </View>
);

export default LoginScreen;

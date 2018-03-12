// @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import COLORS from '../../config/colors';
import Metrics from '../../config/gridSizes';

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
    padding: Metrics.gridSize * 7.5,
    paddingTop: 0,
  },
  buttons: {
    height: Metrics.gridSize * 12.5,
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

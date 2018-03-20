// @flow
import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import { COLORS, METRICS } from '../../config';

type TProps = {
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
  button: {
    padding: METRICS.gridSize * 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: METRICS.gridSize * 5,
    backgroundColor: COLORS.lightGrey,
  },
  buttonText: {
    color: COLORS.white,
  },
});

const LoginScreen = ({ onFacebookLogin, onGoogleLogin }: TProps) => (
  <View style={styles.container}>
    <Text style={styles.whiteText}>
      Please login to subscribe for talks & sessions troughout the day.
    </Text>
    <View style={styles.buttons}>
      <TouchableHighlight onPress={onFacebookLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={onGoogleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </View>
      </TouchableHighlight>
    </View>
  </View>
);

export default LoginScreen;

import React from 'react';
import { ImageBackground, StatusBar, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { Colors } from '../utils/colors';

const headerBackgroundImage = require('../assets/header.png');
const logoImage = require('../assets/logo.png');

const styles = StyleSheet.create({
  imageBackground: {
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  statusBar: {
    backgroundColor: Colors.transparent,
  },
  logoImage: {
    width: 100,
    resizeMode: Image.resizeMode.contain,
  },
  withPadding: {
    paddingLeft: 20,
  },
  withoutPadding: {
    paddingLeft: 0,
  },
});

const Header = ({ navigate, goBack, user }) => (
  <ImageBackground source={headerBackgroundImage} style={[styles.imageBackground, !goBack ? styles.withPadding : styles.withoutPadding]}>
    <StatusBar barStyle="light-content" style={styles.statusBar} />
    {goBack && <Button backgroundColor="transparent" title="Back" onPress={() => goBack()} />}
    <Image source={logoImage} style={styles.logoImage} />
    <Button backgroundColor="transparent" title={!user ? 'Account' : ''} onPress={() => navigate('User')} />
  </ImageBackground>
);

export default Header;

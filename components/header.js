import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { COLORS } from '../utils/colors';

const styles = StyleSheet.create({
  background: {
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    backgroundColor: COLORS.green,
  },
  statusBar: {
    backgroundColor: COLORS.transparent,
  },
  withPadding: {
    paddingLeft: 20,
  },
  withoutPadding: {
    paddingLeft: 0,
  },
});

const Header = ({ navigate, goBack, user }) => (
  <View style={[styles.background, !goBack ? styles.withPadding : styles.withoutPadding]}>
    <StatusBar barStyle="light-content" style={styles.statusBar} />
    {goBack && <Button backgroundColor="transparent" title="Back" onPress={() => goBack()} />}
  </View>
);

export default Header;

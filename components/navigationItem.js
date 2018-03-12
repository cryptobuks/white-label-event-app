import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import COLORS from '../config/colors';
import Metrics from '../config/gridSizes';
import FONT_SIZES from '../config/fontSizes';

const GLOBALS = {
  itemWidth: Metrics.gridSize * 28,
  marginHorizontal: Metrics.gridSize * 3,
  naOpacity: 0.4,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  line: {
    marginTop: Metrics.gridSize,
    width: Metrics.gridSize * 2.5,
    height: Metrics.gridSize / 4,
    backgroundColor: COLORS.violetPink,
  },
  item: {
    color: COLORS.white,
    fontSize: FONT_SIZES.secondary,
    width: GLOBALS.itemWidth,
    fontWeight: 'bold',
  },

  /* eslint-disable react-native/no-unused-styles */

  left: {
    textAlign: 'right',
    opacity: GLOBALS.naOpacity,
  },
  middle: {
    textAlign: 'center',
    marginHorizontal: GLOBALS.marginHorizontal,
  },
  right: {
    textAlign: 'left',
    opacity: GLOBALS.naOpacity,
  },
});

const NavigationItem = ({ title, position }) => (
  <View style={styles.container}>
    <Text style={[styles.item, styles[position]]} >{title}</Text>
    {
      position === 'middle' ? <View style={styles.line} /> : null
    }
  </View>
);

export default NavigationItem;

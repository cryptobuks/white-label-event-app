import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FONT_SIZES, METRICS, COLORS } from '../config';

const GLOBALS = {
  itemWidth: METRICS.gridSize * 28,
  marginHorizontal: METRICS.gridSize * 3,
  naOpacity: 0.4,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  line: {
    marginTop: METRICS.gridSize,
    width: METRICS.gridSize * 2.5,
    height: METRICS.gridSize / 4,
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

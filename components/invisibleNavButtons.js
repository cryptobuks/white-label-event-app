import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import Metrics from '../config/gridSizes';
import COLORS from '../config/colors.js';

const GLOBALS = {
  itemWidth: Metrics.gridSize * 28,
  marginHorizontal: Metrics.gridSize * 3,
};

const styles = StyleSheet.create({
  touchableText: {
    flex: 1,
    color: COLORS.transparent,
    position: 'absolute',
    width: 150,
    height: 50,
  },
  prev: {
    left: GLOBALS.itemWidth - 10,
  },
  absolute: {
    position: 'absolute',
  },
  touchableContainer: {
    left: GLOBALS.itemWidth - 70,
  },
});

const InvisibleNavButtons = ({ index, total, onNextTap }) => (
  <View style={[styles.absolute, styles.touchableContainer]}>
    <TouchableWithoutFeedback onPress={() => onNextTap(-1, total, index)}>
      <View style={styles.absolute}>
        <Text style={styles.touchableText}>{}</Text>
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => onNextTap(1, total, index)}>
      <View style={styles.absolute}>
        <Text style={[styles.touchableText, styles.prev]}>{}</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

export default InvisibleNavButtons;

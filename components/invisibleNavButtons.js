import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { COLORS, METRICS } from '../config';

const GLOBALS = {
  itemWidth: METRICS.gridSize * 28,
  marginHorizontal: METRICS.gridSize * 3,
};

const styles = StyleSheet.create({
  touchableText: {
    flex: 1,
    color: COLORS.transparent,
  },
  absolute: {
    position: 'absolute',
  },
  view: {
    width: 150,
    height: 50,
  },
  right: {
    left: GLOBALS.itemWidth - 10,
  },
  touchableContainer: {
    left: GLOBALS.itemWidth - 70,
  },
});

const InvisibleNavButtons = ({ index, total, onNextTap }) => (
  <View style={[styles.absolute, styles.touchableContainer]}>
    <TouchableWithoutFeedback onPress={() => onNextTap(-1, total, index)}>
      <View style={[styles.left, styles.absolute, styles.view]}>
        <Text style={[styles.touchableText, styles.view, styles.absolute]}>{}</Text>
      </View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={() => onNextTap(1, total, index)}>
      <View style={[styles.absolute, styles.right, styles.absolute, styles.view]}>
        <Text style={[styles.touchableText, styles.view, styles.absolute]}>{}</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

export default InvisibleNavButtons;

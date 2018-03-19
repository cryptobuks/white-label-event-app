// @flow
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { COLORS, METRICS } from '../config';

type TProps = {
  index: number,
  total: number,
  onNextTap: Function,
};

const GLOBALS = {
  itemWidth: METRICS.gridSize * 28,
  marginHorizontal: METRICS.gridSize * 3,
  top: METRICS.gridSize * 7,
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
    width: METRICS.gridSize * 18,
    height: METRICS.gridSize * 6,
  },
  right: {
    left: GLOBALS.itemWidth - 10,
  },
  touchableContainer: {
    left: GLOBALS.itemWidth - 70,
    top: GLOBALS.top,
    backgroundColor: COLORS.transparent,
  },
});

const InvisibleNavButtons = ({ index, total, onNextTap }: TProps) => (
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

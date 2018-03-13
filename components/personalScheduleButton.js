import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import Metrics, { IS_IPHONE_X } from '../config/gridSizes';
import COLORS from '../config/colors';
import FONT_SIZES from '../config/fontSizes';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    position: 'absolute',
    backgroundColor: COLORS.cyan,
    height: Metrics.gridSize * 7,
    width: Metrics.width,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { x: -5 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  buttonText: {
    fontSize: FONT_SIZES.primary,
    color: COLORS.white,
    fontWeight: '600',
  },
  iPhoneXPaddingBottom: {
    paddingBottom: Metrics.gridSize * 3,
    height: Metrics.gridSize * 10,
  },
});

const PersonalScheduleButton = ({ onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.buttonContainer, IS_IPHONE_X ? styles.iPhoneXPaddingBottom : null]}>
      <Text style={styles.buttonText}>{'My Schedule'}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default PersonalScheduleButton;

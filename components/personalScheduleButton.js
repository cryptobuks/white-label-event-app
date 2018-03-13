import React from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
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
  },
  iPhoneXPaddingBottom: {
    paddingBottom: Metrics.gridSize * 3,
    height: Metrics.gridSize * 10,
  },
});

const PersonalScheduleButton = ({ onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View style={[styles.buttonContainer, IS_IPHONE_X ? styles.iPhoneXPaddingBottom : null]}>
      <Text style={styles.buttonText}>{'my schedule'}</Text>
    </View>
  </TouchableHighlight>
);

export default PersonalScheduleButton;

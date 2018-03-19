// @flow
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
import { COLORS, FONT_SIZES, METRICS, IS_IPHONE_X, FONT_WEIGHTS } from '../config';

type TProps = {
  handleScheduleButtonPress: Function,
};

// Dummy boolean, will be calculated based on content of subscribedTracks in state
const DISABLED = false;

const SHADOW = {
  offset: { x: -5 },
  opacity: 0.5,
  radius: 12,
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    position: 'absolute',
    backgroundColor: COLORS.cyan,
    height: METRICS.gridSize * 7,
    width: METRICS.width,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: SHADOW.offset,
    shadowOpacity: SHADOW.opacity,
    shadowRadius: SHADOW.radius,
  },
  buttonText: {
    fontSize: FONT_SIZES.primary,
    color: COLORS.white,
    fontWeight: FONT_WEIGHTS.bold,
  },
  iPhoneXPaddingBottom: {
    paddingBottom: METRICS.gridSize * 3,
    height: METRICS.gridSize * 10,
  },
  disabled: {
    backgroundColor: COLORS.grey,
  },
});

const PersonalScheduleButton = ({ handleScheduleButtonPress }: TProps) => (
  <TouchableWithoutFeedback onPress={!DISABLED ? handleScheduleButtonPress : null}>
    <View
      style={[
        styles.buttonContainer,
        IS_IPHONE_X ? styles.iPhoneXPaddingBottom : null,
        DISABLED ? styles.disabled : null,
      ]}
    >
      <Text style={styles.buttonText}>My Schedule</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default PersonalScheduleButton;

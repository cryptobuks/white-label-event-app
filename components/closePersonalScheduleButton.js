// @flow
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { COLORS, METRICS, ASSETS } from '../config';

type Props = {
  handleGoBack: Function,
};

const styles = StyleSheet.create({
  closeContainer: {
    position: 'absolute',
    right: METRICS.gridSize / 2,
  },
  close: {
    tintColor: COLORS.white,
    width: METRICS.gridSize * 3,
    height: METRICS.gridSize * 3,
  },
});

const ClosePersonalScheduleButton = ({ handleGoBack }: Props) => (
  <TouchableWithoutFeedback onPress={handleGoBack}>
    <View style={styles.closeContainer}>
      <Image source={ASSETS.close} style={styles.close} />
    </View>
  </TouchableWithoutFeedback>
);

export default ClosePersonalScheduleButton;

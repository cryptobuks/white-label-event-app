import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { COLORS, METRICS, ASSETS } from '../config';

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

const ClosePersonalScheduleButton = ({ goBack }) => (
  <TouchableWithoutFeedback onPress={() => goBack()} >
    <View style={styles.closeContainer} >
      <Image source={ASSETS.close} style={styles.close} />
    </View>
  </TouchableWithoutFeedback>
);

export default ClosePersonalScheduleButton;
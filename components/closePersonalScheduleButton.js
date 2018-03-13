import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import COLORS from '../config/colors';
import Metrics from '../config/gridSizes';
import ASSETS from '../config/assets';

const styles = StyleSheet.create({
  closeContainer: {
    position: 'absolute',
    right: Metrics.gridSize / 2,
  },
  close: {
    tintColor: COLORS.white,
    width: Metrics.gridSize * 3,
    height: Metrics.gridSize * 3,
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

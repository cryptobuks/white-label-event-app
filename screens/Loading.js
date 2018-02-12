import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

const Loading = ({ circleSize, circleColor }) => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={circleSize} color={circleColor} />
  </View>
);

export default Loading;

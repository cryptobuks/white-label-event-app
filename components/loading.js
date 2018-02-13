import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

const Loading = ({ animating, color, hidesWhenStopped, size }) => (
  <View style={styles.container}>
    <ActivityIndicator animating={animating} color={color} hidesWhenStopped={hidesWhenStopped} size={size} />
  </View>
);

Loading.defaultProps = {
  animating: true,
  color: '#000',
  hidesWhenStopped: true,
  size: 'large',
};

export default Loading;

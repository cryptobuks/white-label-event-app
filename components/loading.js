// @flow
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { TStyleSheet } from '../types/stylesheet';

type Props = {
  animating?: boolean,
  hidesWhenStopped?: boolean,
  size?: number | 'small' | 'large',
} & TStyleSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

const Loading = ({ animating, color, hidesWhenStopped, size }: Props) => (
  <View style={styles.container}>
    <ActivityIndicator
      animating={animating}
      color={color}
      hidesWhenStopped={hidesWhenStopped}
      size={size}
    />
  </View>
);

Loading.defaultProps = {
  animating: true,
  color: '#000',
  hidesWhenStopped: true,
  size: 'large',
};

export default Loading;

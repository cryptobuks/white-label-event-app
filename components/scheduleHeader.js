// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FONT_SIZES, METRICS } from '../config';
import Title from './title';

type Props = {
  author: string,
  title: string,
};

const styles = StyleSheet.create({
  titleContainer: {
    height: METRICS.gridSize * 5,
    width: METRICS.gridSize * 25,
    justifyContent: 'space-between',
  },
});

const ScheduleItem = ({ author, title }: Props) => (
  <View style={styles.titleContainer}>
    <Title fontSize={FONT_SIZES.primary} value={author} />
    <Title fontSize={FONT_SIZES.secondary} value={title} />
  </View>
);

export default ScheduleItem;

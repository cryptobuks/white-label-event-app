// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FONT_SIZES, METRICS } from '../../config';
import Title from '../title';

type TProps = {
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

const ScheduleItemHeader = ({ author, title }: TProps) => (
  <View style={styles.titleContainer}>
    <Title fontSize={FONT_SIZES.primary} value={author} />
    <Title fontSize={FONT_SIZES.secondary} value={title} />
  </View>
);

export default ScheduleItemHeader;

// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FONT_SIZES from '../config/fontSizes';
import Metrics from '../config/gridSizes';
import Title from './title';

type Props = {
  author: string,
  title: string,
};

const styles = StyleSheet.create({
  titleContainer: {
    height: Metrics.gridSize * 5,
    width: Metrics.gridSize * 25,
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

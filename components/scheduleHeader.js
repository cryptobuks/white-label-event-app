import React from 'react';
import { View, StyleSheet } from 'react-native';
import FONT_SIZES from '../config/fontSizes';
import Title from './title';

const fontWeight = '600';

const styles = StyleSheet.create({
  titleContainer: {
    height: 40,
    width: 205,
    justifyContent: 'space-between',
  },
});

const ScheduleItem = ({ author, title }) => (
  <View style={styles.titleContainer}>
    <Title fontSize={FONT_SIZES.primary} fontWeight={fontWeight} value={author} />
    <Title fontSize={FONT_SIZES.secondary} fontWeight={fontWeight} value={title} />
  </View>
);

export default ScheduleItem;

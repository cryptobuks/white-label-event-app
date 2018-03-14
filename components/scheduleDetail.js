// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';
import format from 'date-fns/format';
import { TDateLike } from '../types/primitives';
import { COLORS, METRICS } from '../config';
import ScheduleButton from './scheduleButton';
import Label from './label';

type Props = {
  location: string,
  date: TDateLike,
};

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: METRICS.gridSize * 4,
  },
  detailTextContainer: {
    flex: 1,
    height: METRICS.gridSize * 4,
    justifyContent: 'space-between',
  },
});

const ScheduleDetail = ({ location, date }: Props) => (
  <View style={styles.detailContainer}>
    <View style={styles.detailTextContainer}>
      <Label value={location} />
      <Label value={format(date, 'hh:mm A')} color={COLORS.violetPink} />
    </View>
    <ScheduleButton />
  </View>
);

export default ScheduleDetail;

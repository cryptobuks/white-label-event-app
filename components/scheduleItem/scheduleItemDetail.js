import React from 'react';
import { View, StyleSheet } from 'react-native';
import format from 'date-fns/format';
import { COLORS, METRICS } from '../../config';
import ScheduleItemButton from './scheduleItemButton';
import Label from '../label';

const styles = StyleSheet.create({
  detailContainer: {
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

const ScheduleItemDetail = ({ location, date }) => (
  <View style={styles.detailContainer}>
    <View style={styles.detailTextContainer}>
      <Label value={location} />
      <Label value={format(date, 'hh:mm A')} color={COLORS.violetPink} />
    </View>
    <ScheduleItemButton />
  </View>
);

export default ScheduleItemDetail;

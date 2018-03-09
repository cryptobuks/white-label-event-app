import React from 'react';
import { View, StyleSheet } from 'react-native';
import format from 'date-fns/format';
import COLORS from '../config/colors';
import ScheduleButton from './scheduleButton';
import Label from './label';

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 32,
  },
  detailTextContainer: {
    flex: 1,
    height: 34,
    justifyContent: 'space-between',
  },
});

const ScheduleDetail = ({ location, date }) => (
  <View style={styles.detailContainer}>
    <View style={styles.detailTextContainer}>
      <Label value={location} fontSize={12} color={COLORS.grey} />
      <Label value={format(date, 'hh:mm A')} fontSize={12} color={COLORS.pink} />
    </View>
    <ScheduleButton />
  </View>
);

export default ScheduleDetail;

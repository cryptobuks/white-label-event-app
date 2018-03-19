// @flow
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import type { TEvent } from '../../types/eventdata';
import { COLORS, METRICS } from '../../config';
import ScheduleItemHeader from './scheduleItemHeader';
import ScheduleItemDetail from './scheduleItemDetail';

type TProps = TEvent;

const CONTAINER = {
  width: METRICS.width - METRICS.gridSize * 6,
  height: METRICS.gridSize * 17.5,
  margin: METRICS.gridSize * 2,
  borderRadius: METRICS.gridSize * 0.375,
};

const CONTENT = {
  marginLeft: METRICS.gridSize * 13,
};

const IMAGE = {
  height: METRICS.gridSize * 12.5,
  width: METRICS.gridSize * 12.5,
  borderRadius: METRICS.gridSize * 0.375,
};

const styles = StyleSheet.create({
  container: {
    height: CONTAINER.height,
    marginVertical: CONTAINER.margin,
  },
  blockContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: CONTAINER.width,
    borderRadius: CONTAINER.borderRadius,
  },
  contentContainer: {
    margin: CONTAINER.margin,
    marginLeft: CONTENT.marginLeft,
  },
  image: {
    position: 'absolute',
    left: -CONTAINER.margin,
    top: CONTAINER.height / 2 - IMAGE.height / 2,
    width: IMAGE.width,
    height: IMAGE.height,
    borderRadius: IMAGE.borderRadius,
  },
});

const ScheduleItem = ({ author, title, location, date }: TProps) => (
  <View style={styles.container}>
    <View style={styles.blockContainer}>
      <View style={styles.contentContainer}>
        <ScheduleItemHeader author={author.name} title={title} />
        <ScheduleItemDetail date={date} location={location} />
      </View>
    </View>
    <Image style={styles.image} source={{ uri: author.imageUrl }} />
  </View>
);

export default ScheduleItem;

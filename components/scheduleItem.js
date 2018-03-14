// @flow
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { COLORS, METRICS } from '../config';
import ScheduleHeader from './scheduleHeader';
import ScheduleDetail from './scheduleDetail';
import { TEvent } from '../types/eventdata';

type Props = TEvent;

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
    flex: 1,
    alignSelf: 'stretch',
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
    flex: 1,
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

const ScheduleItem = ({ author, title, location, date }: Props) => (
  <View style={styles.container}>
    <View style={styles.blockContainer}>
      <View style={styles.contentContainer}>
        <ScheduleHeader author={author.name} title={title} />
        <ScheduleDetail date={date} location={location} />
      </View>
    </View>
    <Image style={styles.image} source={{ uri: author.imageUrl }} />
  </View>
);

export default ScheduleItem;

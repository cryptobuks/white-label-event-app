import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import COLORS from '../config/colors';
import ScheduleHeader from './scheduleHeader';
import ScheduleDetail from './scheduleDetail';

const CONTAINER = {
  width: 327,
  height: 139,
  margin: 16,
  borderRadius: 3,
};

const IMAGE = {
  height: 100,
  width: 100,
  borderRadius: 3,
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
    marginLeft: 106,
  },
  image: {
    position: 'absolute',
    left: -CONTAINER.margin,
    top: ((CONTAINER.height / 2) - (IMAGE.height / 2)),
    width: IMAGE.width,
    height: IMAGE.height,
    borderRadius: IMAGE.borderRadius,
  },
});

const ScheduleItem = ({ author, title, location, date }) => (
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

import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { COLORS } from '../utils/colors';
import ScheduleButton from './scheduleButton';

const styles = StyleSheet.create({
  blockContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: 327,
    borderRadius: 3,
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    height: 139,
    marginVertical: 16,
  },
  contentContainer: {
    flex: 1,
    margin: 16,
    marginLeft: 106,
  },
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
  name: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '600',
  },
  location: {
    color: COLORS.grey,
    fontSize: 12,
  },
  time: {
    color: COLORS.pink,
    fontSize: 12,
  },
  titleContainer: {
    height: 40,
    width: 205,
    justifyContent: 'space-between',
  },
  image: {
    position: 'absolute',
    left: -16,
    top: ((139 / 2) - (100 / 2)),
    width: 100,
    height: 100,
    borderRadius: 3,
    zIndex: 999,
  },
});

const ScheduleItem = ({ author, title, location, date }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: author.imageUrl }} />
    <View style={styles.blockContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{author.name}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailContainer}>
          <View style={styles.detailTextContainer}>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.time}>
              {new Date(date).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </View>
          <ScheduleButton />
        </View>
      </View>
    </View>
  </View>
);

export default ScheduleItem;

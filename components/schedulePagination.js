import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigationItem from './navigationItem';
import InvisibleNavButtons from './invisibleNavButtons';
import { METRICS, COLORS } from '../config';

const GLOBALS = {
  itemWidth: METRICS.gridSize * 28,
  marginHorizontal: METRICS.gridSize * 3,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blackTransparent,
    width: GLOBALS.itemWidth * 3,
    height: METRICS.gridSize * 13,
    paddingTop: METRICS.gridSize * 8,
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

const SchedulePagination = ({ index, total, tracks, onNextTap }) => (
  <View style={styles.container}>
    {tracks[index - 1] ? (
      <NavigationItem title={tracks[index - 1].title} position="left" />
    ) : (
      <NavigationItem title={''} position="left" />
    )}
    <NavigationItem title={tracks[index].title} position="middle" />
    {tracks[index + 1] ? (
      <NavigationItem title={tracks[index + 1].title} position="right" />
    ) : (
      <NavigationItem title="" position="right" />
    )}
    <InvisibleNavButtons index={index} total={total} onNextTap={onNextTap} />
  </View>
);

export default SchedulePagination;

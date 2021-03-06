// @flow
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import NavigationItem from './NavigationItem';
import InvisibleNavButtons from './InvisibleNavButtons';
import { METRICS, COLORS } from '../config';
import type { TTracks } from '../types/trackdata';

type TProps = {
  index: number,
  total: number,
  tracks: TTracks,
  onNextTap: Function,
  onLongPress: Function,
};

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

const SchedulePagination = ({ index, total, tracks, onNextTap, onLongPress }: TProps) => (
  <View style={styles.container}>
    {tracks[index - 1] ? (
      <NavigationItem title={tracks[index - 1].title} position="left" />
    ) : (
      <NavigationItem position="left" />
    )}
    <TouchableWithoutFeedback onLongPress={onLongPress}>
      <View>
        <NavigationItem title={tracks[index].title} position="middle" />
      </View>
    </TouchableWithoutFeedback>
    {tracks[index + 1] ? (
      <NavigationItem title={tracks[index + 1].title} position="right" />
    ) : (
      <NavigationItem position="right" />
    )}
    <InvisibleNavButtons index={index} total={total} onNextTap={onNextTap} />
  </View>
);

export default SchedulePagination;

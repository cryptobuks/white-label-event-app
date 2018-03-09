import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Metrics from '../config/gridSizes';
import ScheduleItem from './scheduleItem';

const CONTAINER = {
  paddingHorizontal: Metrics.gridSize * 2,
  marginTop: Metrics.gridSize * 4,
};

const styles = StyleSheet.create({
  flatlist: {
    paddingHorizontal: CONTAINER.paddingHorizontal,
    marginTop: CONTAINER.marginTop,
  },
});

const TrackList = ({ sessions, trackId }) => {
  const trackSessions = sessions.filter(s => (
    s.tags.some(st => st.id === trackId)
  ));

  return (
    <FlatList
      data={trackSessions}
      contentContainerStyle={styles.flatlist}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ScheduleItem {...item} />
      )}
    />
  );
};

export default TrackList;

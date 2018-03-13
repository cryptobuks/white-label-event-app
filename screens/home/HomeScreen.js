import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { COLORS, METRICS } from '../../config';
import ScheduleItem from '../../components/scheduleItem';

const CONTAINER = {
  paddingHorizontal: METRICS.gridSize * 2,
  marginTop: METRICS.gridSize * 14,
  paddingBottom: METRICS.gridSize * 13,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  flatlist: {
    paddingHorizontal: CONTAINER.paddingHorizontal,
    marginTop: CONTAINER.marginTop,
    paddingBottom: CONTAINER.paddingBottom,
  },
});

const HomeScreen = ({ sessions, trackName, trackId }) => (
  <View style={styles.container} >
    <FlatList
      data={sessions}
      contentContainerStyle={styles.flatlist}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ScheduleItem {...item} />
      )}
    />
  </View>
);

export default HomeScreen;

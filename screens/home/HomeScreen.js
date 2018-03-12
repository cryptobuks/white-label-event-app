import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import COLORS from '../../config/colors';
import Metrics from '../../config/gridSizes';
import ScheduleItem from '../../components/scheduleItem';

const CONTAINER = {
  paddingHorizontal: Metrics.gridSize * 2,
  marginTop: Metrics.gridSize * 14,
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

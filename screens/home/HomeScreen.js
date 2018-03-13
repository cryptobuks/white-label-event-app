import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import COLORS from '../../config/colors';
import Metrics from '../../config/gridSizes';
import ScheduleItem from '../../components/scheduleItem';

const CONTAINER = {
  paddingHorizontal: Metrics.gridSize * 2,
  marginTop: Metrics.gridSize * 4,
  paddingBottom: Metrics.gridSize * 13,
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

const HomeScreen = ({ sessions }) => (
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

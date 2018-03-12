// @flow
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { TEvents, TEvent } from '../../types/eventdata';
import COLORS from '../../config/colors';
import Metrics from '../../config/gridSizes';
import ScheduleItem from '../../components/scheduleItem';

type Props = {
  events: TEvents,
};

const CONTAINER = {
  paddingHorizontal: Metrics.gridSize * 2,
  marginTop: Metrics.gridSize * 4,
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

const HomeScreen = ({ events }: Props) => (
  <View style={styles.container}>
    <FlatList
      data={events}
      contentContainerStyle={styles.flatlist}
      keyExtractor={item => item.id}
      renderItem={({ item: event }: TEvent) => <ScheduleItem {...event} />}
    />
  </View>
);

export default HomeScreen;

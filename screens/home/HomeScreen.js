// @flow
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { TEvents, TEvent } from '../../types/eventdata';
import { COLORS, METRICS } from '../../config';
import { ScheduleItem } from '../../components';

type Props = {
  events: TEvents,
};

const CONTAINER = {
  paddingHorizontal: METRICS.gridSize * 2,
  marginTop: METRICS.gridSize * 14,
  paddingBottom: METRICS.gridSize * 25,
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

const HomeScreen = ({ events, trackName, trackId }: Props) => (
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

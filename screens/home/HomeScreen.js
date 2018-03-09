import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import COLORS from '../../config/colors';
import Metrics from '../../config/gridSizes';
import TrackList from '../../components/trackList';

const HEADER = {
  marginTop: Metrics.gridSize * 6,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  title: {
    marginTop: HEADER.marginTop,
    color: COLORS.white,
  },
});

const HomeScreen = ({ sessions, trackName, trackId }) => (
  <View style={styles.container} >
    <Text style={styles.title}>{trackName}</Text>
    <TrackList sessions={sessions} trackId={trackId} />
  </View>
);

export default HomeScreen;

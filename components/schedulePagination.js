import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import COLORS from '../../config/colors';
import Metrics from '../config/gridSizes';

const styles = StyleSheet.create({
  container: {
    width: Metrics.width,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 50,
    justifyContent: 'center',
  },
  left: {
    backgroundColor: 'red',
    position: 'absolute',
    left: -170,
    color: 'white',
    textAlign: 'right',
  },
  middle: {
    width: 170,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
  },
  right: {
    backgroundColor: 'red',
    position: 'absolute',
    right: -170,
    color: 'white',
  },
});

const SchedulePagination = ({ index, total, tracks }) => (
  <View style={styles.container}>
    {
      tracks[index - 1] ? <Text style={styles.left} >{tracks[index - 1].title}</Text> : null
    }
    <Text style={styles.middle} >{tracks[index].title}</Text>
    {
      tracks[index + 1] ? <Text style={styles.right} >{tracks[index + 1].title}</Text> : null
    }
  </View>
);

export default SchedulePagination;

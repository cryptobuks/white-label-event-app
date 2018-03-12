import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import COLORS from '../config/colors';
import Metrics from '../config/gridSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: (225 + 25) * 3,
    flexDirection: 'row',
    position: 'absolute',
    top: Metrics.gridSize * 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    color: COLORS.white,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 14,
    width: 225,
  },
  middle: {
    position: 'relative',
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    width: 225,
    marginHorizontal: 25,
  },
  right: {
    color: COLORS.white,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 14,
    width: 225,
  },
});

const SchedulePagination = ({ index, total, tracks }) => (
  <View style={styles.container}>
    {
      tracks[index - 2] ?
        <Text style={styles.left} >{tracks[index - 2].title}</Text> :
        <Text style={styles.left} />
    }
    {
      tracks[index - 1] ?
        <Text style={styles.left} >{tracks[index - 1].title}</Text> :
        <Text style={styles.left} />
    }
    <Text style={styles.middle} >{tracks[index].title}</Text>
    {
      tracks[index + 1] ?
        <Text style={styles.right} >{tracks[index + 1].title}</Text> :
        <Text style={styles.right} />
    }
    {
      tracks[index + 2] ?
        <Text style={styles.right} >{tracks[index + 2].title}</Text> :
        <Text style={styles.right} />
    }
  </View>
  // <ScrollView
  //   horizontal
  //   style={styles.container}
  //   // pagingEnabled
  //   // scrollEnabled={false}
  //   showsHorizontalScrollIndicator={false}
  //   directionalLockEnabled
  //   // onScroll={handleScroll}
  //   // contentInset={{ left: 120, right: 120 }}
  //   // contentOffset={{ x: 225 }}
  //   decelerationRate={'fast'}
  //   // centerContent
  //   snapToInterval={500}
  //   snapToAlignment={'center'}
  //   ref={($el) => { this.scrollView = $el; }}
  // >
  //   {
  //     this.props.tracks.map(t => <Text style={styles.middle} key={t.id}>{t.title}</Text>)
  //   }
  // </ScrollView>
);

export default SchedulePagination;

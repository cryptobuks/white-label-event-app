import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ClosePersonalScheduleButton from '../../components/closePersonalScheduleButton';
import ScheduleItem from '../../components/scheduleItem';
import { COLORS, FONT_SIZES, METRICS } from '../../config';

const CONSTANTS = {
  paddingTop: METRICS.gridSize * 9,
  paddingBottom: METRICS.gridSize * 4,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cyan,
    alignItems: 'center',
    shadowColor: COLORS.transparent,
    width: METRICS.width,
  },
  header: {
    top: METRICS.gridSize * 7,
    width: METRICS.width - (METRICS.gridSize * 4),
    height: METRICS.gridSize * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZES.primary,
    fontWeight: '600',
    color: COLORS.white,
  },
  listContainer: {
    top: CONSTANTS.paddingTop,
    height: METRICS.height - CONSTANTS.paddingTop,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flatlist: {
    paddingHorizontal: METRICS.gridSize * 2,
    paddingBottom: CONSTANTS.paddingBottom,
  },
});

const PersonalScheduleScreen = ({ sessions, navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{'My Schedule'}</Text>
      <ClosePersonalScheduleButton goBack={navigation.goBack} />
    </View>
    <View style={styles.listContainer} >
      <FlatList
        data={sessions}
        contentContainerStyle={styles.flatlist}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ScheduleItem {...item} />
        )}
      />
    </View>
  </View>
);

export default PersonalScheduleScreen;


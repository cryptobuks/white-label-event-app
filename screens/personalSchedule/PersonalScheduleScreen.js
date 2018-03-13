import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ClosePersonalScheduleButton from '../../components/closePersonalScheduleButton';
import ScheduleItem from '../../components/scheduleItem';
import COLORS from '../../config/colors';
import FONT_SIZES from '../../config/fontSizes';
import Metrics from '../../config/gridSizes';

const CONSTANTS = {
  paddingTop: Metrics.gridSize * 9,
  paddingBottom: Metrics.gridSize * 4,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cyan,
    alignItems: 'center',
    shadowColor: COLORS.transparent,
    width: Metrics.width,
  },
  header: {
    top: Metrics.gridSize * 7,
    width: Metrics.width - (Metrics.gridSize * 4),
    height: Metrics.gridSize * 2,
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
    height: Metrics.height - CONSTANTS.paddingTop,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  flatlist: {
    paddingHorizontal: Metrics.gridSize * 2,
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


import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from '../../utils/colors';
import sessions from '../../assets/sessions.json';
import ScheduleItem from '../../components/scheduleItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: COLORS.black,
    height: 100,
  },
  flatlist: {
    marginTop: 114,
  },
});

const HomeScreen = () => (
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

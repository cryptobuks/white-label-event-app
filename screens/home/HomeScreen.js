import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from '../../utils/colors';
import sessions from '../../assets/sessions.json';
import ScheduleItem from '../../components/scheduleItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  flatlist: {
    paddingHorizontal: 16,
    marginTop: 30,
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

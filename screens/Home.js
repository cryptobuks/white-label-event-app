import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ShiftSchedule from './ShiftSchedule';
import { Header } from '../components';
import { COLORS } from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

const HomeScreen = ({ screenProps: { shiftData }, navigation }) => (
  <FlatList
    style={styles.container}
    data={shiftData}
    keyExtractor={item => item.name}
    renderItem={({ item }) => <ShiftSchedule scheduleItem={item} navigation={navigation} />}
  />
);

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Shift',
  header: <Header navigate={navigation.navigate} />,
});

export default HomeScreen;

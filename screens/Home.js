import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Header } from '../components';
import { COLORS } from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

const HomeScreen = ({ screenProps: { userInfo }, navigation }) => (
  <FlatList
    style={styles.container}
    keyExtractor={item => item.name}
  />
);

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Shift',
  header: <Header navigate={navigation.navigate} />,
});

export default HomeScreen;

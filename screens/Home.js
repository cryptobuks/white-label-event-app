import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

const HomeScreen = () => (
  <FlatList
    style={styles.container}
    keyExtractor={item => item.name}
    renderItem={({ item }) => <View />}
  />
);

export default HomeScreen;

import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { COLORS } from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: 200,
    width: 327,
    marginVertical: 16,
    borderRadius: 3,
  },
  name: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '600',
  },
  title: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '600',
  },
  titleContainer: {
    height: 40,
    width: 205,
    justifyContent: 'space-between',
  },
  image: {
    marginLeft: -20,
    width: 100,
    height: 100,
    borderRadius: 3,
    zIndex: 999,
  },
});

const ScheduleItem = ({ author, title }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{
        uri: author.imageUrl,
      }}
    />
    <View style={styles.titleContainer}>
      <Text style={styles.name}>{author.name}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

export default ScheduleItem;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen';
import PersonalScheduleButton from '../../components/personalScheduleButton';
import sessions from '../../assets/sessions.json';
import { PERSONAL_SCHEDULE } from '../../config/screenIds';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeContainer = ({ navigation }) => (
  <View style={styles.container}>
    <HomeScreen sessions={sessions} />
    <PersonalScheduleButton onPress={() => navigation.navigate(PERSONAL_SCHEDULE)} />
  </View>
);

export default HomeContainer;

import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
  },
});

const PersonalScheduleModal = ({ sessions, navigation }) => (
  <View style={styles.container}>
    <Text>{'Test'}</Text>
    <TouchableHighlight onPress={() => navigation.goBack()}>
      <View style={{ top: 50 }}>
        <Text>{'X'}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

export default PersonalScheduleModal;

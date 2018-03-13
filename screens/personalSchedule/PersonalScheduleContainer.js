import React from 'react';
import PersonalScheduleScreen from './PersonalScheduleScreen';
import sessions from '../../assets/sessions.json';

// Temporary dummy data until userId is stored in state
const USER_ID = '10';

const PersonalScheduleContainer = ({ navigation }) => {
  const personalSessions = sessions.filter(ps => ps.attendees.some(a => a.id === USER_ID));

  return (
    <PersonalScheduleScreen sessions={personalSessions} navigation={navigation} />
  );
};

export default PersonalScheduleContainer;


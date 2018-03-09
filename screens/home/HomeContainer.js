import React from 'react';
import HomeScreen from './HomeScreen';
import sessions from '../../assets/sessions.json';

const HomeContainer = () => (
  <HomeScreen sessions={sessions} />
);

export default HomeContainer;

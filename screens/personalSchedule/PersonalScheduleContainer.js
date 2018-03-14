import React, { Component } from 'react';
import PersonalScheduleScreen from './PersonalScheduleScreen';
import sessions from '../../assets/sessions.json';

// Temporary dummy data until userId is stored in state
const USER_ID = '10';

export default class PersonalScheduleContainer extends Component {
  handleGoBack = () => this.props.navigation.goBack();

  personalSessions = sessions.filter(ps => ps.attendees.some(a => a.id === USER_ID));

  render() {
    return (
      <PersonalScheduleScreen sessions={this.personalSessions} handleGoBack={this.handleGoBack} />
    );
  }
}


import React, { Component } from 'react';
import PersonalScheduleScreen from './PersonalScheduleScreen';
import events from '../../assets/events.json';

// Temporary dummy data until userId is stored in state
const USER_ID = '10';

// TODO: @mikeverf type this
type Props = {};

export default class PersonalScheduleContainer extends Component<Props> {
  handleGoBack = () => this.props.navigation.goBack();

  personalSessions = events.filter(session => session.attendees.some(a => a.id === USER_ID));

  render() {
    return (
      <PersonalScheduleScreen sessions={this.personalSessions} handleGoBack={this.handleGoBack} />
    );
  }
}

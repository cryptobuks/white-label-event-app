// @flow
import React, { Component } from 'react';
import PersonalScheduleScreen from './PersonalScheduleScreen';
import events from '../../assets/events.json';
import { TNavigation } from '../../types/navigation';
import { TEvents } from '../../types/eventdata';

// Temporary dummy data until userId is stored in state
const USER_ID = '10';

type Props = {
  navigation: TNavigation,
};
const eventData: TEvents = events;

export default class PersonalScheduleContainer extends Component<Props> {
  handleGoBack = () => this.props.navigation.goBack();

  personalSessions = eventData.filter(session => session.attendees.some(a => a.id === USER_ID));

  render() {
    return (
      <PersonalScheduleScreen events={this.personalSessions} handleGoBack={this.handleGoBack} />
    );
  }
}

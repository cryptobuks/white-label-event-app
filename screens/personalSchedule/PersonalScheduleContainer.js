// @flow
import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import PersonalScheduleScreen from './PersonalScheduleScreen';
import events from '../../assets/events.json';
import type { TNavigation } from '../../types/navigation';
import type { TEvents } from '../../types/eventdata';
import UserContainer from '../../state/UserContainer';

// Temporary dummy data until userId is stored in state
const USER_ID = '10';

type TProps = {
  navigation: TNavigation,
};

const eventData: TEvents = events;

export default class PersonalScheduleContainer extends Component<TProps> {
  get personalSessions(): TEvents {
    return eventData.filter(session => session.attendees.some(attendee => attendee.id === USER_ID));
  }

  handleGoBack = () => this.props.navigation.goBack();

  render() {
    return (
      <Subscribe to={[UserContainer]}>
        {user => (
          <PersonalScheduleScreen
            events={this.personalSessions}
            handleGoBack={this.handleGoBack}
            firstName={user.state.firstName}
          />
        )}
      </Subscribe>
    );
  }
}

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

type Props = {
  navigation: TNavigation,
};
const eventData: TEvents = events;

export default class PersonalScheduleContainer extends Component<Props> {
  handleGoBack = () => this.props.navigation.goBack();

  personalSessions = eventData.filter(session => session.attendees.some(a => a.id === USER_ID));

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

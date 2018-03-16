import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import PersonalScheduleScreen from './PersonalScheduleScreen';
import events from '../../assets/events.json';
import UserContainer from '../../state/UserContainer';

// Temporary dummy data until userId is stored in state
const USER_ID = '10';

// TODO: @mikeverf type this
type Props = {};

export default class PersonalScheduleContainer extends Component<Props> {
  handleGoBack = () => this.props.navigation.goBack();

  personalSessions = events.filter(session => session.attendees.some(a => a.id === USER_ID));

  render() {
    return (
      <Subscribe to={[UserContainer]}>
        {user => (
          <PersonalScheduleScreen
            sessions={this.personalSessions}
            handleGoBack={this.handleGoBack}
            firstName={user.state.first_name}
          />
        )}
      </Subscribe>
    );
  }
}

import React from 'react';
import renderer from 'react-test-renderer';
import { PersonalScheduleButton } from '../';

describe('PersonalScheduleButton', () => {
  it('renders correctly', () => {
    const comp = <PersonalScheduleButton handleScheduleButtonPress={() => {}} />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

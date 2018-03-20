import React from 'react';
import renderer from 'react-test-renderer';
import { PersonalScheduleButton } from '../';

describe('PersonalScheduleButton', () => {
  it('renders correctly', () => {
    const comp = <PersonalScheduleButton />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import ScheduleItemButton from '../ScheduleItem/ScheduleItemButton';

describe('ScheduleItemButton', () => {
  it('renders correctly', () => {
    const comp = <ScheduleItemButton />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

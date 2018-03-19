import React from 'react';
import renderer from 'react-test-renderer';
import ScheduleItem from '../';
import mockData from '../../assets/mockData.json';

describe('ScheduleItem', () => {
  it('scheduleItem renders correctly', () => {
    const tree = renderer
      .create(
        <ScheduleItem
          author={mockData.author}
          title={mockData.title}
          location={mockData.location}
          date={Date.now()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { ScheduleItem } from '../';
import mockData from '../../assets/mockData.json';

describe('ScheduleItem', () => {
  it('renders correctly', () => {
    const comp = (
      <ScheduleItem
        author={mockData.author}
        title={mockData.title}
        location={mockData.location}
        date={mockData.date}
      />
    );

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { ScheduleItemHeader } from '../';
import mockData from '../../assets/mockData.json';

describe('ScheduleItemHeader', () => {
  it('renders correctly', () => {
    const comp = <ScheduleItemHeader author={mockData.author.name} title={mockData.title} />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

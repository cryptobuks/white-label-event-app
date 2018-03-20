import React from 'react';
import renderer from 'react-test-renderer';
import { ScheduleItemDetail } from '../';
import mockData from '../../assets/mockData.json';

describe('ScheduleItemDetail', () => {
  it('renders correctly', () => {
    const comp = <ScheduleItemDetail location={mockData.location} date={mockData.date} />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { ScheduleItemDetail } from '../';
import mockData from '../../assets/mockData.json';

describe('ScheduleItemDetail', () => {
  it('renders correctly', () => {
    const comp = (
      <ScheduleItemDetail
        location={mockData.location}
        date={new Date('Tue Mar 06 2018 14:22:31 GMT+0100 (CET)')}
      />
    );

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

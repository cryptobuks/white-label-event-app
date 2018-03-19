import React from 'react';
import renderer from 'react-test-renderer';
import SchedulePagination from '../SchedulePagination';
import tracks from '../../assets/tracks.json';

describe('SchedulePagination', () => {
  it('renders correctly', () => {
    const comp = (
      <SchedulePagination
        index={0}
        total={5}
        tracks={tracks}
        onNextTap={() => {}}
        onLongPress={() => {}}
      />
    );

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

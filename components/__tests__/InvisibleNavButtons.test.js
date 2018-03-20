import React from 'react';
import renderer from 'react-test-renderer';
import { InvisibleNavButtons } from '../';

describe('InvisibleNavButtons', () => {
  it('renders correctly', () => {
    const comp = <InvisibleNavButtons index={0} total={5} onNextTap={() => {}} />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

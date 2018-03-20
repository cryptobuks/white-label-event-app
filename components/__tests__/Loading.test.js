import React from 'react';
import renderer from 'react-test-renderer';
import { Loading } from '../';

describe('Loading', () => {
  it('renders correctly', () => {
    const comp = <Loading />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

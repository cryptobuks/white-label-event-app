import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from '../';

describe('Title', () => {
  it('renders correctly', () => {
    const comp = <Title value="titleValue" />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

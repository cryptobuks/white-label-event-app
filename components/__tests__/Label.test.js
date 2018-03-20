import React from 'react';
import renderer from 'react-test-renderer';
import { Label } from '../';

describe('Label', () => {
  it('renders correctly', () => {
    const comp = <Label value="labelValue" />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { CloseButton } from '../';

describe('CloseButton', () => {
  it('renders correctly', () => {
    const comp = <CloseButton handleGoBack={() => {}} />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

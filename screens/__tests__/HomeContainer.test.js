import React from 'react';
import renderer from 'react-test-renderer';
import { HomeContainer } from '../';

describe('HomeContainer', () => {
  it('renders correctly', () => {
    const comp = (
      <HomeContainer
        screenProps={{
          handleStorybookGesture: () => {},
          onChangeSubscription: () => {},
          userId: 1,
        }}
        navigation={{}}
      />
    );
    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'unstated';
import { LoginContainer } from '../';

describe('LoginContainer', () => {
  it('renders correctly', () => {
    const comp = (
      <Provider inject={[]}>
        <LoginContainer
          screenProps={{
            handleStorybookGesture: () => {},
            onChangeSubscription: () => {},
            userId: 1,
          }}
          navigation={{}}
        />
      </Provider>
    );
    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

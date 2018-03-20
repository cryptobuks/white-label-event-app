import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'unstated';
import { PersonalScheduleContainer } from '../';

describe('PersonalScheduleContainer', () => {
  it('renders correctly', () => {
    const comp = (
      <Provider inject={[]}>
        <PersonalScheduleContainer events={[]} handleGoBack={() => {}} firstName="John" />
      </Provider>
    );

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

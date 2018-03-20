import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationItem } from '../';
import mockData from '../../assets/mockData.json';

describe('NavigationItem', () => {
  it('renders correctly', () => {
    const comp = <NavigationItem position="middle" title={mockData.title} />;

    const tree = renderer.create(comp).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

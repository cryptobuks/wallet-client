// @flow
import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
import TopBar from '../ui/topBar/index';
import BottomNavigation from '../ui/bottomNavigation/index';
import menu from '../menu/index';

it('renders without crashing', () => {
  const props = { authenticated: false };
  const component = shallow(<App {...props} />);
  expect(component);

  it('renders Top', () => {
    expect(component.contains(<TopBar />)).toBe(true);
  });

  it('renders bottom navigation with menu', () => {
    expect(component.contains(<BottomNavigation menu={menu} />)).toBe(true);
  });
});

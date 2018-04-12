// @flow

import React from 'react';
import { shallow } from 'enzyme';
import MarketPortfolioSlider from './MarketPortfolioSlider';
import TotalBalance from '../balance/TotalBalance';
import MarketRateTable from '../marketRates';

describe('MarketPortfolioSlider component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MarketPortfolioSlider />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders total balance on both slides', () => {
    expect(component.contains(<TotalBalance />)).toBe(true);
  });

  it('renders total balance on both slides', () => {
    expect(component.find(TotalBalance)).toHaveLength(2);
  });

  it('renders market rates table once', () => {
    expect(component.find(MarketRateTable)).toHaveLength(1);
  });

  it('renders portfolio table once', () => {
    expect(component.find(MarketRateTable)).toHaveLength(1);
  });
});

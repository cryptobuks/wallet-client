// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MarketRate, type Props } from './MarketRate';
import type { MarketRateState, MarketRateValue } from './marketRateState';

const marketRateState: MarketRateState = {
  rates: {
    BTC: ({ EUR: 6450.71 }: MarketRateValue),
  },
  error: null,
};

describe('MarketRate component', () => {
  let component;

  const props: Props = {
    fromCurrency: 'BTC',
    toCurrency: 'EUR',
    marketRates: marketRateState,
    getFreshExchangeRate: jest.fn(),
  };

  beforeEach(() => {
    component = shallow(<MarketRate {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders currency name with exchange rate', () => {
    expect(component.contains(<div>€6,450.71</div>)).toBe(true);
  });
});

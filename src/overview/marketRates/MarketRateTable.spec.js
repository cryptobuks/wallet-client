// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { MarketRateTable, type Props } from './MarketRateTable';
import { MarketRate } from './marketRate';
import { testWallet } from '../../fixtures';

/* Workaround for not getting an error due to importing redux store in http file */
jest.mock('../../http');

describe('MarketRateTable component', () => {
  let component;

  const props: Props = {
    wallets: [testWallet],
  };

  beforeEach(() => {
    component = shallow(<MarketRateTable {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders all needed market rates', () => {
    expect(component.contains(<td>Ether</td>)).toBe(true);
    expect(component.contains(<MarketRate fromCurrency="ETH" />)).toBe(true);
  });
});

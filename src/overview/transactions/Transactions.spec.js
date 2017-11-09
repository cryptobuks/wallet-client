// @flow

import React from 'react';
import { shallow } from 'enzyme';

import { TransactionsWithoutStyles } from './Transactions';
import Transaction from './transaction';
import type { WalletType } from '../../wallet/walletState';

describe('Transactions component', () => {
  let component;

  const sampleWallet: WalletType = {
    id: 1,
    address: 'sampleAddress',
    currency: 'EUR',
    balance: [],
    receiveAddress: 'sampleReceiveAddress',
    transactions: [
      {
        id: 1,
        state: 'Completed',
        date: new Date(),
        entries: [],
      },
      {
        id: 2,
        state: 'Completed',
        date: new Date(),
        entries: [],
      },
    ],
  };

  const props = {
    wallets: [sampleWallet],
    classes: {},
  };

  beforeEach(() => {
    component = shallow(<TransactionsWithoutStyles {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders each transaction', () => {
    expect(
      component.contains(
        <Transaction transaction={sampleWallet.transactions[0]} />,
      ),
    ).toBe(true);
    expect(
      component.contains(
        <Transaction transaction={sampleWallet.transactions[1]} />,
      ),
    ).toBe(true);
  });
});

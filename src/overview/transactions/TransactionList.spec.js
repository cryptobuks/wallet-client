// @flow

import React from 'react';
import { shallow } from 'enzyme';

import {
  TransactionListWithoutStyles,
  mapStateToProps,
} from './TransactionList';
import Transaction from './transaction';
import type {
  WalletType,
  Transaction as TransactionType,
} from '../../wallet/walletState';

describe('TransactionList component', () => {
  let component;

  const transactions: Array<TransactionType> = [
    {
      id: '1',
      status: 'COMPLETE',
      date: new Date('2017-11-14T00:00:00Z'),
      currency: 'ETH',
      fee: [],
      value: [],
      address: null,
      transactionId: 'some_transaction_id',
    },
    {
      id: '2',
      status: 'COMPLETE',
      date: new Date('2016-10-13T00:00:00Z'),
      currency: 'ETH',
      fee: [],
      value: [],
      address: null,
      transactionId: 'some_transaction_id',
    },
  ];

  const props = {
    transactions,
    classes: {},
  };

  beforeEach(() => {
    component = shallow(<TransactionListWithoutStyles {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders each transaction', () => {
    expect(
      component.contains(<Transaction transaction={transactions[0]} />),
    ).toBe(true);
    expect(
      component.contains(<Transaction transaction={transactions[1]} />),
    ).toBe(true);
  });

  it('sorts transactions by date (desc)', () => {
    const sampleWallet: WalletType = {
      id: 1,
      address: 'sampleAddress',
      currency: 'EUR',
      receiveAddress: 'sampleReceiveAddress',
      transactions,
    };

    const state = {
      wallet: {
        wallets: [sampleWallet, sampleWallet],
      },
    };

    const mappedProps = mapStateToProps(state, {});

    expect(mappedProps).toEqual({
      transactions: [
        transactions[0],
        transactions[0],
        transactions[1],
        transactions[1],
      ],
    });
  });
});

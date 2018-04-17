// @flow

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import { marketRateRoutine } from './marketRateRoutine';
import withWallet from '../../../wallet/withWallet/withWallet';
import { formatFiatCurrency } from '../../../currency';
import type { MarketRateState } from './marketRateState';

export type MarketRateAction = {
  fromCurrency: string,
  toCurrency: string,
};

export type Props = {
  fromCurrency: string,
  toCurrency: string,
  marketRates: MarketRateState,
  getFreshExchangeRate: (obj: MarketRateAction) => {},
};

export class MarketRate extends Component<Props> {
  componentWillMount() {
    this.props.getFreshExchangeRate({
      fromCurrency: this.props.fromCurrency,
      toCurrency: this.props.toCurrency,
    });
    this.intervalId = setInterval(
      () =>
        this.props.getFreshExchangeRate({
          fromCurrency: this.props.fromCurrency,
          toCurrency: this.props.toCurrency,
        }),
      5000,
    );
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  intervalId = null;

  render() {
    const marketRates = this.props.marketRates.rates[this.props.fromCurrency];

    if (marketRates === undefined) return null;
    return (
      <div>
        {formatFiatCurrency(
          marketRates[this.props.toCurrency],
          this.props.toCurrency,
        )}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  toCurrency: state.wallet.currency,
  marketRates: state.marketRates,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getFreshExchangeRate: marketRateRoutine.trigger,
    },
    dispatch,
  );

export default withWallet(
  connect(mapStateToProps, mapDispatchToProps)(MarketRate),
);

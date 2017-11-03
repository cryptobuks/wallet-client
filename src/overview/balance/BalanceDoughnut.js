/* eslint-disable no-bitwise */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut, Chart } from 'react-chartjs-2';
import type { MapStateToProps } from 'react-redux';

import walletCurrencyValueResolver from '../../wallet/walletCurrencyValueResolver';
import type { Wallet as WalletType } from '../../wallet/walletState';
import withWallet from '../../wallet/withWallet';

type Props = {
  wallets: Array<WalletType>,
};

// Ugly, but it works.
const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw(args) {
    originalDoughnutDraw.apply(this, ...args);

    const { width, outerRadius, ctx } = this.chart;
    const { datasets } = this.chart.config.data;

    const fontSize = Math.floor(outerRadius / 57); // magic number :o
    ctx.font = `${fontSize}em Roboto`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.54)';

    const sum = datasets[0].data.reduce((a, b) => a + b, 0);

    // TODO make currency & formatting dynamic
    let text = sum.toLocaleString('en-US', {
      style: 'currency',
      currency: 'EUR',
    });
    let textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = outerRadius;

    ctx.fillText(text, textX, textY * 1.12);

    text = 'Balance';
    textX = Math.round((width - ctx.measureText(text).width) / 2);
    ctx.fillText(text, textX, textY * 0.88);
  },
});

export class BalanceDoughnut extends Component<Props> {
  getData() {
    const { wallets } = this.props;

    return {
      datasets: [
        {
          data: wallets.map((wallet: WalletType) =>
            walletCurrencyValueResolver.resolve(wallet.balance),
          ),
          backgroundColor: ['#19c3ed', '#47d6e2', '#62dfd9'],
          borderWidth: [0, 0, 0],
        },
      ],
      labels: wallets.map((wallet: WalletType) => wallet.currency),
      wallets,
    };
  }

  options = {
    circumference: 21 / 12 * Math.PI,
    rotation: 3 / 24 * Math.PI,
    cutoutPercentage: 60,
    legend: {
      display: true,
      position: 'bottom',
    },
    tooltips: {
      callbacks: {
        label(tooltipItem: Object, data: Object) {
          const wallet: WalletType = data.wallets[tooltipItem.index];
          const walletValue = walletCurrencyValueResolver.resolve(
            wallet.balance,
            wallet.currency,
          );
          return `${walletValue} ${wallet.currency}`;
        },
      },
    },
    onClick: () => {
      (this.chart || {}).chart_instance.options.legend.display ^= 1; // toggle boolean
      (this.chart || {}).chart_instance.update();
    },
  };

  chart = {};

  render() {
    const data = this.getData();
    return (
      <Doughnut
        data={data}
        options={this.options}
        ref={chart => {
          this.chart = chart;
        }}
      />
    );
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

export default withWallet(connect(mapStateToProps)(BalanceDoughnut));
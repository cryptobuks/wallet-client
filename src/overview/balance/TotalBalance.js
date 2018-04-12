// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import variables from '../../ui/variables';
import { formatFiatCurrency } from '../../currency';
import withWallet from '../../wallet/withWallet';
import { getTotalBalance } from '../../redux/selectors';

export const BrightGreenText = styled.p`
  font-family: ${variables.fontPrimaryBold};
  font-size: ${variables.fontSizeTiny};
  color: ${variables.colorGreenBright};
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 8px;
  line-height: 1;
`;

export const StyledBalanceText = styled.p`
  font-family: ${variables.fontPrimaryBold};
  font-size: ${variables.fontSizeLargest};
  text-align: center;
  margin-top: 0;
  line-height: 1;
`;

export const StyledDecimalPlacesSpan = styled.span`
  font-family: ${variables.fontPrimaryBold};
  font-size: ${variables.fontSizeLarger};
`;

export type Props = {
  currency: string,
  balance: number,
};

export const TotalBalance = ({ currency, balance }: Props) => (
  <div>
    <BrightGreenText>My Balance</BrightGreenText>
    <StyledBalanceText>
      {formatFiatCurrency(balance, currency).split('.')[0]}.
      <StyledDecimalPlacesSpan>
        {formatFiatCurrency(balance, currency).split('.')[1]}
      </StyledDecimalPlacesSpan>
    </StyledBalanceText>
  </div>
);

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  currency: state.wallet ? state.wallet.currency : undefined,
  balance: getTotalBalance(state),
});

export default withWallet(connect(mapStateToProps)(TotalBalance));

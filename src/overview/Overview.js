// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import styled from 'styled-components';
import { Card, GradientHeading } from '../ui';
import { getTotalBalance } from '../redux/selectors';
import VerificationButton from './verificationButton';
import { MarketPortfolioSlider } from './slider';
import { withUser } from '../user';
import { MarketRateTable } from './marketRates';

const BalanceCard = Card.extend`
  margin-top: 46px;
`;

export const StyledGradientHeading = GradientHeading.extend`
  line-height: 1.09;
  margin: 0;
  width: 60%;
`;

const GradientHeadingWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const marketPortfolioSlider = (
  <BalanceCard>
    <MarketPortfolioSlider />
  </BalanceCard>
);

const verificationButton = <VerificationButton />;

const realTimeCoinPricesText = (
  <GradientHeadingWrapper>
    <StyledGradientHeading center>Real-time coin prices</StyledGradientHeading>
  </GradientHeadingWrapper>
);

const marketRateTable = (
  <Card>
    <MarketRateTable />
  </Card>
);

export type Props = {
  isVerified: boolean,
  balance: number,
};

export const Overview = ({ isVerified, balance }: Props) => (
  <div>
    {balance === 0 && realTimeCoinPricesText}
    {!isVerified && verificationButton}
    {isVerified && balance > 0 && marketPortfolioSlider}
    {balance === 0 && marketRateTable}
  </div>
);

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  isVerified: state.user.isVerified,
  balance: getTotalBalance(state),
});

export default withUser(connect(mapStateToProps)(Overview));

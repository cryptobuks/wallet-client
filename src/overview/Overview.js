// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import styled from 'styled-components';
import { Card, Heading, Paragraph } from '../ui';
import variables from '../ui/variables';
import { getTotalBalance, activeVerificationExists } from '../redux/selectors';
import VerificationButton from './verificationButton';
import { MarketPortfolioSlider } from './slider';
import { withUser } from '../user';
import withWallet from '../wallet/withWallet';
import { withVerification } from '../verification/withVerification';
import { MarketRateTable } from './marketRates';

const BalanceCard = Card.extend`
  margin-top: 46px;
`;

export const StyledHeading = Heading.extend`
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

const VerificationPendingText = Paragraph.extend`
  margin-top: 10px;
  color: ${variables.colorNeutralLight};
  font-size: ${variables.fontSizeSmall};
`;

const marketPortfolioSlider = (
  <BalanceCard>
    <MarketPortfolioSlider />
  </BalanceCard>
);

const verificationButton = <VerificationButton />;

const verificationPendingText = (
  <VerificationPendingText center>
    Verifying your documents
  </VerificationPendingText>
);

const realTimeCoinPricesText = (
  <GradientHeadingWrapper>
    <StyledHeading center>Real-time coin prices</StyledHeading>
  </GradientHeadingWrapper>
);

const marketRateTable = (
  <Card>
    <MarketRateTable />
  </Card>
);

export type Props = {
  isVerified: boolean,
  verificationPending: boolean,
  balance: number,
};

export const Overview = ({
  isVerified,
  verificationPending,
  balance,
}: Props) => {
  const renderVerificationButton =
    isVerified != null &&
    !isVerified &&
    verificationPending != null &&
    !verificationPending;

  return (
    <div>
      {balance === 0 && realTimeCoinPricesText}
      {renderVerificationButton && verificationButton}
      {verificationPending && verificationPendingText}
      {isVerified && balance > 0 && marketPortfolioSlider}
      {balance === 0 && marketRateTable}
    </div>
  );
};

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  isVerified: state.user.isVerified,
  verificationPending: activeVerificationExists(state),
  balance: getTotalBalance(state),
});

export default withVerification(
  withWallet(withUser(connect(mapStateToProps)(Overview))),
);

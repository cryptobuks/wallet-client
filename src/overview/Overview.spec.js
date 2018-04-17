// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { Overview, type Props, StyledGradientHeading } from './Overview';
import VerificationButton from './verificationButton';
import MarketPortfolioSlider from './slider';
import MarketRateTable from './marketRates';

/* Workaround for not getting an error due to importing redux store in http file */
jest.mock('../http');

describe('Overview component', () => {
  let component;

  const props: Props = {
    isVerified: false,
    balance: 0,
  };

  beforeEach(() => {
    component = shallow(<Overview {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders real-time coin prices text for users with balance zero', () => {
    const realTimeCoinPricesHeading = (
      <StyledGradientHeading center>
        Real-time coin prices
      </StyledGradientHeading>
    );

    expect(component.contains(realTimeCoinPricesHeading)).toBe(true);
  });

  it('renders verification button for not verified users', () => {
    expect(component.contains(<VerificationButton />)).toBe(true);
  });

  it("renders market-portfolio slider for users whos's balance more than zero", () => {
    component.setProps({ isVerified: true, balance: 560 });
    expect(component.contains(<MarketPortfolioSlider />)).toBe(true);
  });

  it("renders market table for users whos's balance is zero", () => {
    expect(component.contains(<MarketRateTable />)).toBe(true);
  });
});

// @flow

import React from 'react';
import { shallow } from 'enzyme';
import {
  TotalBalance,
  type Props,
  BrightGreenText,
  StyledBalanceText,
  StyledDecimalPlacesSpan,
} from './TotalBalance';

describe('TotalBalance component', () => {
  let component;

  const props: Props = {
    currency: 'EUR',
    balance: 670.05,
  };

  beforeEach(() => {
    component = shallow(<TotalBalance {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders My Balance text', () => {
    expect(component);
    expect(
      component.contains(<BrightGreenText>My Balance</BrightGreenText>),
    ).toBe(true);
  });

  it('renders balance', () => {
    const balance = (
      <StyledBalanceText>
        €670.
        <StyledDecimalPlacesSpan>05</StyledDecimalPlacesSpan>
      </StyledBalanceText>
    );

    expect(component.contains(balance)).toBe(true);
  });
});

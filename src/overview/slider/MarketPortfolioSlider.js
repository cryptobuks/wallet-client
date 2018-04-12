// @flow

import React from 'react';
import styled from 'styled-components';
import { MarketRateTable } from '../marketRates';
import { BalanceTable, TotalBalance } from '../balance';
import { GradientSlider } from '../../ui';

const StyledGradientSlider = GradientSlider.extend`
  .slick-dots {
    top: 68px;
    max-height: 25px;
    li {
      button:before {
        font-size: 11px;
      }
    }
  }
`;

const TableWrapper = styled.div`
  margin-top: 28px;
`;

export const MarketPortfolioSlider = () => (
  <StyledGradientSlider>
    <div>
      <TotalBalance />
      <TableWrapper>
        <MarketRateTable />
      </TableWrapper>
    </div>
    <div>
      <TotalBalance />
      <TableWrapper>
        <BalanceTable />
      </TableWrapper>
    </div>
  </StyledGradientSlider>
);

export default MarketPortfolioSlider;

// @flow

import React from 'react';
import {
  GradientHeading,
  Paragraph,
  GradientSlider,
  WhiteBackgroundSlide,
} from '../../ui';

export type Props = {
  cardOrdered: boolean,
};

const youAreInTheWaitingListSection = (
  <GradientSlider>
    <WhiteBackgroundSlide>
      <GradientHeading center>
        You are in the <br />
        waiting list
      </GradientHeading>
      <Paragraph center>
        With Change Card you can make your payments and ATM withdrawals with
        Bitcoin, Ether, or any other supported currency.
      </Paragraph>
    </WhiteBackgroundSlide>
    <WhiteBackgroundSlide>
      <GradientHeading center>
        You are in the <br />
        waiting list
      </GradientHeading>
      <Paragraph center>
        Change Card is universally accepted, even in stores that don't accept
        virtual currencies.
      </Paragraph>
    </WhiteBackgroundSlide>
  </GradientSlider>
);

const joinWaitingListSection = (
  <GradientSlider>
    <WhiteBackgroundSlide>
      <GradientHeading center>
        Pay with any <br />
        currency
      </GradientHeading>
      <Paragraph center>
        With Change Card you can make your payments and ATM withdrawals with
        Bitcoin, Ether, or any other supported currency.
      </Paragraph>
    </WhiteBackgroundSlide>
    <WhiteBackgroundSlide>
      <GradientHeading center>
        Accepted <br />
        everywhere
      </GradientHeading>
      <Paragraph center>
        Change Card is universally accepted, even in stores that don't accept
        virtual currencies.
      </Paragraph>
    </WhiteBackgroundSlide>
  </GradientSlider>
);

export const CardOrderSlider = ({ cardOrdered }: Props) => (
  <div>
    {cardOrdered ? youAreInTheWaitingListSection : joinWaitingListSection}
  </div>
);

export default CardOrderSlider;

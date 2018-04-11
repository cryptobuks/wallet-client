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
      <GradientHeading>
        You are in the <br />
        waiting list
      </GradientHeading>
      <Paragraph>
        With Change Card you can make your payments and ATM withdrawals with
        Bitcoin, Ether, or any other supported currency.
      </Paragraph>
    </WhiteBackgroundSlide>
    <WhiteBackgroundSlide>
      <GradientHeading>
        You are in the <br />
        waiting list
      </GradientHeading>
      <Paragraph>
        Change Card is universally accepted, even in stores that don't accept
        virtual currencies.
      </Paragraph>
    </WhiteBackgroundSlide>
  </GradientSlider>
);

const joinWaitingListSection = (
  <GradientSlider>
    <WhiteBackgroundSlide>
      <GradientHeading>
        Pay with any <br />
        currency
      </GradientHeading>
      <Paragraph>
        With Change Card you can make your payments and ATM withdrawals with
        Bitcoin, Ether, or any other supported currency.
      </Paragraph>
    </WhiteBackgroundSlide>
    <WhiteBackgroundSlide>
      <GradientHeading>
        Accepted <br />
        everywhere
      </GradientHeading>
      <Paragraph>
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

// @flow

import React from 'react';
import { GradientHeading, Paragraph, WrappedContent } from '../ui';

const Wrapper = WrappedContent.extend`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Exchange = () => (
  <Wrapper>
    <GradientHeading center>Convert currencies</GradientHeading>
    <Paragraph center>
      We will let you know when currency conversion is available.
    </Paragraph>
  </Wrapper>
);

// @flow

import React from 'react';
import styled from 'styled-components';
import { GradientButton, Link } from '../../ui';
import { VERIFICATION_INTRO_ROUTE } from '../../verification/constants';
import svgRocket from './img/rocket.svg';

const Rocket = styled.img`
  margin: 0 0 3px 18.5px;
`;

export const VerificationButton = () => (
  <div>
    <div className="text-center">
      <GradientButton inline className="mt-3">
        <Link to={VERIFICATION_INTRO_ROUTE}>
          Verify account<Rocket height="16px" src={svgRocket} alt="Rocket" />
        </Link>
      </GradientButton>
    </div>
  </div>
);

export default VerificationButton;

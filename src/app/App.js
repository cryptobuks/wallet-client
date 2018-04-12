// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AppRouter from '../router/index';
import {
  GradientHeading,
  Bottom,
  Link,
  Top,
  WrappedContent,
  GradientButton,
} from '../ui';
import rocket from './img/rocket.jpg';

export const CenteredGradientHeading = GradientHeading.extend`
  display: flex;
  justify-content: center;
`;

export const SmallGradientButton = GradientButton.extend`
  width: 35%;
  font-size: 13px;
`;

export const Bottom2 = Bottom.extend`
  margin-top: 25px;
  display: flex;
  justify-content: flex-start;
`;

const SubHeading = styled.h2`
  font-size: 32sp;
  font-weight: 300;
  line-height: 1.25;
  letter-spacing: -0.5px;
  color: #fff;
  margin-top: 20px;
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RocketBG = styled(WrappedContent)`
  background-image: url(${rocket});
  background-position: 43%;
  background-size: 315%;
`;

type Props = {
  +authenticated: boolean,
};

export const App = ({ authenticated }: Props) => {
  if (authenticated) {
    return <AppRouter verificationFlow />;
  }
  return (
    <RocketBG>
      <Top>
        <CenteredGradientHeading>
          Buy Bitcoin<br />with Euro
        </CenteredGradientHeading>
        <SubHeading>
          Who said Bitcoin is complicated? Purchase your first virtual
          currencies via bank transfer.
        </SubHeading>
      </Top>
      <Bottom2>
        <Buttons>
          <Link to="/signup">
            <SmallGradientButton>Sign up</SmallGradientButton>
          </Link>
          <Link to="/login">
            <SmallGradientButton>Log in</SmallGradientButton>
          </Link>
        </Buttons>
      </Bottom2>
    </RocketBG>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  authenticated: !!state.login.token,
});

export default connect(mapStateToProps)(App);

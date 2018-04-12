// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AppRouter from './router';
import {
  Button,
  Heading,
  Link,
  Paragraph,
  PrimaryButton,
  Top,
  WrappedContent,
} from './ui';
import moon from './img/moon.png';
import rocket from './img/rocket.png';

const Content = styled.div`
  background-image: linear-gradient(to bottom, white, black);
`;

const StyledContent = WrappedContent.extend`
  background: url(${moon}) no-repeat -160px 20px;
  background-color: inherit;
  background-size: cover;
  padding-bottom: 0;
`;

const RocketContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  & img {
    max-height: 60%;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type Props = {
  +authenticated: boolean,
};

export const App = ({ authenticated }: Props) => {
  if (authenticated) {
    return <AppRouter defaultOnEnter />;
  }
  return (
    <Content>
      <StyledContent>
        <Top>
          <Heading center>Change makes money simple</Heading>
          <Paragraph center>
            Get started with a free digital wallet. It’s easy!
          </Paragraph>
          <Buttons>
            <Link to="/signup">
              <PrimaryButton inline>Sign up</PrimaryButton>
            </Link>
            <Link to="/login">
              <Button inline>Log in</Button>
            </Link>
          </Buttons>
        </Top>
        <RocketContainer>
          <img src={rocket} alt="Rocket" />
        </RocketContainer>
      </StyledContent>
    </Content>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  authenticated: !!state.login.token,
});

export default connect(mapStateToProps)(App);

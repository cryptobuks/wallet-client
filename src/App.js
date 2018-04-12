// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AppRouter from './router';
import {
  Button,
  Link,
  PrimaryButton,
  Top,
  WrappedContent,
  Heading,
  Paragraph,
} from './ui';
import moon from './img/moon.png';
import rocket from './img/rocket.png';

const Content = styled.div`
  background-image: linear-gradient(to bottom, white, black);
`;

const StyledContent = WrappedContent.extend`
  background-image: url(${moon});
  background-repeat: no-repeat;
  background-position: -160px 20px;
  background-color: inherit;
  background-size: cover;
  justify-content: space-between;
  padding: 5vh 5vw 0 5vw;
`;

const RocketContainer = styled.div`
  display: flex;
  justify-content: center;
  & img {
    height: 40vh;
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

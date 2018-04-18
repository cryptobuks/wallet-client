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
import chamelion from './img/chameleon.png';

const Content = styled.div`
  background-image: linear-gradient(to bottom, white, black);
`;

const PaddingTop = styled.div`
  padding-top: 5%;
`;

const StyledContent = WrappedContent.extend`
  background: url(${chamelion}) no-repeat -160px 20px;
  background-color: white;
  background-position: 70% 125%;
  background-size: 165%;
  padding-bottom: 0;
  padding-top: 15%;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5%;
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
          <Heading center>Buy bitcoin with Euro</Heading>
          <PaddingTop>
            <Paragraph center>
              Who said bitcoin was complicated? Purchase your first virtual
              currencies via bank transfer.
            </Paragraph>
          </PaddingTop>
          <Buttons>
            <Link to="/signup">
              <PrimaryButton inline>Sign up</PrimaryButton>
            </Link>
            <Link to="/login">
              <Button inline>Log in</Button>
            </Link>
          </Buttons>
        </Top>
      </StyledContent>
    </Content>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  authenticated: !!state.login.token,
});

export default connect(mapStateToProps)(App);

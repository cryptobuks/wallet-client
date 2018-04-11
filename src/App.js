// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AppRouter from './router';
import {
  Button,
  Link,
  PrimaryButton,
  Top,
  WrappedContent,
  Heading,
  SubHeading,
} from './ui';

const StyledContent = WrappedContent.extend``;

type Props = {
  +authenticated: boolean,
};

export const App = ({ authenticated }: Props) => {
  if (authenticated) {
    return <AppRouter defaultOnEnter />;
  }
  return (
    <StyledContent>
      <Top>
        <Heading center>Change makes money simple.</Heading>
        <SubHeading center>
          Get started with a free digital wallet. It’s easy!
        </SubHeading>
        <Link to="/signup">
          <PrimaryButton inline>Sign up</PrimaryButton>
        </Link>
        <Link to="/login">
          <Button inline>Log in</Button>
        </Link>
      </Top>
    </StyledContent>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  authenticated: !!state.login.token,
});

export default connect(mapStateToProps)(App);

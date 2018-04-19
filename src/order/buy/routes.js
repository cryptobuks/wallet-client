// @flow

import React from 'react';
import { Route } from 'react-router';
import appWrapper from '../../appWrapper';
import requireAuthentication from '../../requireAuthentication';
import { SourceOfFunds } from './sourceOfFunds';

let key = 1;

const sourceOfFundsRoutes = (
  <Route
    key={(key += 1)}
    exact
    path="/buy/source-of-funds"
    component={appWrapper(requireAuthentication(SourceOfFunds))}
  />
);

export default [sourceOfFundsRoutes];

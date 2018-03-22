// @flow

import React from 'react';
import {
  WrappedContent,
  Top,
  Bottom,
  Heading,
  Link,
  PrimaryButton,
} from '../../../ui';
import { routes } from '../../../router';

export const ResetPasswordDone = () => (
  <WrappedContent>
    <Top>
      <Heading alt>
        Your request has been sent.
        <br />
        Go to email.
      </Heading>
    </Top>
    <div>
      If your email exists, then a password reset link has been sent. It is
      valid only for next 24h.
    </div>
    <Bottom>
      <Link to={routes.BASE}>
        <PrimaryButton>Back</PrimaryButton>
      </Link>
    </Bottom>
  </WrappedContent>
);

export default ResetPasswordDone;

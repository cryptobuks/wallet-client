// @flow

import React from 'react';
import { push } from 'react-router-redux';
import { reduxForm, type FormProps } from 'redux-form';
import { resetPasswordFormSubmitHandler } from './resetPasswordRoutines';
import {
  WrappedContent,
  Top,
  Bottom,
  Heading,
  PrimaryButton,
  Form,
  Field,
  FormFeedback,
  BackLink,
} from '../../../ui';
import { routes } from '../../../router';

export const ResetPassword = (props: FormProps) => {
  const { handleSubmit, error } = props;
  return (
    <WrappedContent>
      <BackLink to={routes.BASE} />
      <Top>
        <Heading>
          Forgot password?
          <br />
          Send reset link to your email.
        </Heading>
        <Form
          id="resetPasswordForm"
          onSubmit={handleSubmit(resetPasswordFormSubmitHandler)}
          className="mt-5"
        >
          {error && <FormFeedback>{error}</FormFeedback>}
          <Field
            name="email"
            label="Email address"
            type="email"
            placeholder="Type your email here..."
          />
        </Form>
      </Top>
      <Bottom>
        <PrimaryButton inline type="submit" form="resetPasswordForm">
          Reset my password
        </PrimaryButton>
      </Bottom>
    </WrappedContent>
  );
};

export default reduxForm({
  form: 'reset-password',
  onSubmitSuccess: (response, dispatch) => {
    dispatch(push(routes.RESET_PASSWORD_DONE));
  },
})(ResetPassword);

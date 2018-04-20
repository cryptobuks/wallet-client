// @flow
import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { type FormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import AppRouter, { routes } from '../router';
import {
  BackLink,
  Bottom,
  Field,
  Form,
  FormFeedback,
  PrimaryButton,
  renderCheckbox,
  Top,
  WrappedContent,
} from '../ui';
import signupFormSubmitHandler from './signupFormSubmitHandler';
import { required } from '../form';

export type Props = {
  authenticated: boolean,
} & FormProps;

export const Signup = (props: Props) => {
  const { handleSubmit, error, submitting, authenticated } = props;
  if (authenticated) {
    return <AppRouter defaultOnEnter />;
  }
  return (
    <Form onSubmit={handleSubmit(signupFormSubmitHandler)}>
      <BackLink to={routes.BASE} />
      <WrappedContent>
        <Top>
          {error && <FormFeedback>{error}</FormFeedback>}
          <Field
            type="email"
            name="email"
            label="Email address"
            placeholder="Type your email here..."
            validate={required}
          />
          <Field
            name="password"
            type="password"
            autoFocus
            label="Password"
            placeholder="Type your password here..."
            validate={required}
          />
          <Field
            name="tos"
            id="tos"
            component={renderCheckbox}
            validate={required}
            label={
              <span>
                I agree to the{' '}
                <a
                  href="https://getchange.com/legal/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </span>
            }
          />
        </Top>
        <Bottom>
          <PrimaryButton inline type="submit" disabled={submitting}>
            Next
          </PrimaryButton>
        </Bottom>
      </WrappedContent>
    </Form>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  authenticated: !!state.login.token,
});

const ConnectedSignupForm = connect(mapStateToProps)(Signup);

export default reduxForm({
  form: 'signup',
  initialValues: { tos: false },
})(ConnectedSignupForm);

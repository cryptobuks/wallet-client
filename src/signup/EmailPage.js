// @flow
import React from 'react';
import { type FormProps, reduxForm } from 'redux-form';
import { routes } from '../router';
import {
  BackLink,
  Bottom,
  Field,
  Form,
  FormFeedback,
  Heading,
  PrimaryButton,
  Top,
  WrappedContent,
} from '../ui';

export const EmailPage = (props: FormProps) => {
  const { handleSubmit, error } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <BackLink to={routes.BASE} />
      <WrappedContent>
        <Top>
          <Heading>Let&apos;s set up your account.</Heading>
          {error && <FormFeedback>{error}</FormFeedback>}
          <Field
            type="email"
            name="email"
            label="Email address"
            placeholder="Type your email here..."
          />
        </Top>
        <Bottom>
          <PrimaryButton inline type="submit">
            Next
          </PrimaryButton>
        </Bottom>
      </WrappedContent>
    </Form>
  );
};

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(EmailPage);

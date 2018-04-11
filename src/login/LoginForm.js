// @flow
import React from 'react';
import { type FormProps, reduxForm } from 'redux-form';
import { loginFormSubmitHandler } from './loginRoutines';
import {
  BackLink,
  Bottom,
  Field,
  Form,
  FormFeedback,
  Link,
  PrimaryButton,
  Top,
  WrappedContent,
} from '../ui';
import { routes } from '../router';
import variables from '../ui/variables';

const StyledLink = Link.extend`
  float: right;
  color: ${variables.colorGreen};
`;

const WrappedForm = WrappedContent.withComponent(Form);

export const LoginForm = (props: FormProps) => {
  const { handleSubmit, error } = props;
  return (
    <WrappedForm onSubmit={handleSubmit(loginFormSubmitHandler)}>
      <BackLink to={routes.BASE} />
      <Top>
        {error && <FormFeedback className="mt-4">{error}</FormFeedback>}
        <Field
          name="username"
          label="Email"
          type="email"
          placeholder="Type your email here..."
        />
        <Field
          name="password"
          label="Password"
          type="password"
          placeholder="Type your password here..."
        />
        <Field
          name="otp"
          label="Two Factor Authentication"
          type="password"
          placeholder="If enabled..."
        />
        <StyledLink to={routes.RESET_PASSWORD}>Forgot password</StyledLink>
      </Top>
      <Bottom>
        <PrimaryButton inline type="submit">
          Log In
        </PrimaryButton>
      </Bottom>
    </WrappedForm>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);

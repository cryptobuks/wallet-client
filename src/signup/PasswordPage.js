// @flow
import React from 'react';
// import VisibilityIcon from 'material-ui-icons/Visibility';
import { type FormProps, reduxForm } from 'redux-form';
import styled from 'styled-components';
import {
  Bottom,
  Field,
  Form,
  FormFeedback,
  Heading,
  PrimaryButton,
  renderCheckbox,
  Top,
  WrappedContent,
} from '../ui';
import signupFormSubmitHandler from './signupFormSubmitHandler';
import BackIcon from '../ui/icon/BackIcon';

const StyledBackLink = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const required = (value: any) =>
  value ? undefined : "Don't forget this field :)";

export const PasswordPage = (props: FormProps) => {
  const { handleSubmit, previousPage, error, pristine, submitting } = props;
  return (
    <Form onSubmit={handleSubmit(signupFormSubmitHandler)}>
      <StyledBackLink onClick={previousPage}>
        <BackIcon />
      </StyledBackLink>
      <WrappedContent>
        <Top>
          <Heading>
            One more thing.
            <br />
            Create your password.
          </Heading>
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
          {error && <FormFeedback className="mt-3">{error}</FormFeedback>}
        </Top>
        <Bottom>
          <PrimaryButton inline type="submit" disabled={pristine || submitting}>
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
})(PasswordPage);

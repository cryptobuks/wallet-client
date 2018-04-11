// @flow
import moment from 'moment-es6';
import React from 'react';
import { connect, type MapStateToProps } from 'react-redux';
import { push } from 'react-router-redux';
import type { FormProps } from 'redux-form';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import {
  Col,
  Field,
  Form,
  FormFeedback,
  FormGroup,
  FormRow,
  Label,
  GradientButton,
} from '../../ui';
import { PhoneField } from './phoneField';
import { profileFormSubmitHandler, withProfile } from '../../user/profile';
import { VERIFICATION_ADDRESS_ROUTE } from '../constants';

type Props = {} & FormProps;

const FormWithoutMargin = styled(Form)`
  margin-top: 0 !important;
`;

const FormGroupCenter = styled(FormGroup)`
  text-align: center;
`;

export const Profile = ({ handleSubmit, error }: Props) => (
  <div>
    <FormWithoutMargin
      id="profileForm"
      onSubmit={handleSubmit(profileFormSubmitHandler)}
      className="mt-5"
    >
      {error && <FormFeedback>{error}</FormFeedback>}

      <Field name="firstName" label="First name" type="text" />

      <Field name="lastName" label="Last name" type="text" />

      <FormGroup>
        <Label>Mobile number</Label>
        <FormRow>
          <PhoneField />
        </FormRow>
      </FormGroup>

      <FormGroup>
        <Label>Date of birth</Label>
        <FormRow>
          <Col>
            <Field name="day" placeholder="Day" type="text" />
          </Col>
          <Col>
            <Field
              name="month"
              alabel="Month"
              placeholder="Month"
              type="text"
            />
          </Col>
          <Col>
            <Field name="year" placeholder="Year" type="text" />
          </Col>
        </FormRow>
      </FormGroup>
      <FormGroupCenter className="mt-5">
        <GradientButton inline type="submit">
          Next
        </GradientButton>
      </FormGroupCenter>
    </FormWithoutMargin>
  </div>
);

Profile.displayName = 'Profile';

const ProfileForm = reduxForm({
  form: 'cardProfile',
  onSubmitSuccess: (result, dispatch) => {
    dispatch(push(VERIFICATION_ADDRESS_ROUTE));
  },
})(withProfile(Profile));

const getInitialFormData = (profile: Profile) => {
  // FIXME: logic in view
  if (
    profile.id ||
    profile.firstName ||
    profile.lastName ||
    profile.mobileNumber ||
    profile.dateOfBirth
  ) {
    let dateFields = {};

    if (profile.dateOfBirth instanceof moment) {
      dateFields = {
        day: profile.dateOfBirth.date(),
        month: profile.dateOfBirth.month() + 1,
        year: profile.dateOfBirth.year(),
      };
    }

    return {
      id: profile.id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      phoneNumber: profile.mobileNumber,
      ...dateFields,
    };
  }
  return null;
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  profile: state.user.profile,
  initialValues: getInitialFormData(state.user.profile),
});

const ConnectedProfile = connect(mapStateToProps, null)(ProfileForm);

ConnectedProfile.displayName = 'Profile';

export default ConnectedProfile;

// @flow

import React from 'react';
import styled from 'styled-components';
import { type FormProps, reduxForm } from 'redux-form';
import {
  BackLink,
  Field,
  Form,
  FormFeedback,
  PrimaryButton,
  renderCheckbox,
  renderSelectField,
  Top,
  WrappedContent,
} from '../../../ui/index';
import { SourceOfFundsLegalText } from './SourceOfFundsLegalText';
import { listOfEEACountries } from './listOfEEACountries';
import { listOfFieldOfActivities } from './listOfFieldOfActivities';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import withAddress from '../../../verification/address/withAddress';
import type { Address } from '../../../verification/address/addressState';

const SourceOfFundsWrapper = styled.div`
  margin-left: 21px;
`;

const LegalConfirmWrapper = styled.div`
  margin-top: 27px;
`;

const sourceOfFundsLegalText = (
  <SourceOfFundsWrapper>
    <SourceOfFundsLegalText />
  </SourceOfFundsWrapper>
);

type Props = {} & FormProps;

export const requiredLegalConfirmation = (value: any) =>
  value ? undefined : 'You must confirm your identity ';

const getInitialCountry = (address: Address) => {
  const initialCountry = listOfEEACountries.find(
    country => country.value === address.countryCode,
  );
  return initialCountry != null
    ? initialCountry.value
    : listOfEEACountries[0].value;
};

export const SourceOfFunds = (props: Props) => {
  const { error, submitting } = props;

  return (
    <Form>
      <BackLink to="/TODO" />
      <WrappedContent>
        <Top>
          {error && <FormFeedback>{error}</FormFeedback>}
          <Field
            name="bankCountry"
            label="Insert Bank Country"
            component={renderSelectField}
            items={listOfEEACountries}
          />
          <Field
            name="fieldOfActivity"
            label="Profession or Field of Activity"
            component={renderSelectField}
            items={listOfFieldOfActivities}
          />
          <LegalConfirmWrapper>
            <Field
              name="confirmIdentity"
              component={renderCheckbox}
              validate={requiredLegalConfirmation}
              label={sourceOfFundsLegalText}
            />
          </LegalConfirmWrapper>
        </Top>
        <PrimaryButton inline type="submit" disabled={submitting}>
          Next
        </PrimaryButton>
      </WrappedContent>
    </Form>
  );
};

const SourceOfFundsForm = reduxForm({
  form: 'sourceOfFunds',
  enableReinitialize: true,
})(withAddress(SourceOfFunds));

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  address: state.user.profile.address,
  initialValues: {
    confirmIdentity: false,
    bankCountry: getInitialCountry(state.user.profile.address),
    fieldOfActivity: listOfFieldOfActivities[0].value,
  },
});

const ConnectedSourceOfFundsForm = connect(mapStateToProps, null)(
  SourceOfFundsForm,
);

ConnectedSourceOfFundsForm.displayName = 'SourceOfFunds';

export default ConnectedSourceOfFundsForm;

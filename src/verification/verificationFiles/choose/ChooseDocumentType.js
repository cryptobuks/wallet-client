// @flow
import React from 'react';
import styled from 'styled-components';
import { withState } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  Heading,
  PrimaryButton,
  ColumnFlex,
  Paragraph,
  BackLink,
} from '../../../ui';
import variables from '../../../ui/variables';
import {
  VERIFICATION_ID_FRONT_VERIFICATION_ROUTE,
  VERIFICATION_PASSPORT_VERIFICATION_ROUTE,
  VERIFICATION_ADDRESS_ROUTE,
  VERIFICATION_DRIVING_LICENSE_VERIFICATION_ROUTE,
} from '../../constants';

const StyledHeading = Heading.extend`
  padding-left: 0;
  padding-bottom: 10%;
`;

const Container = ColumnFlex.extend`
  height: 100%;
  padding-left: 5%;
  align-items: flex-start;
`;

const Buttons = styled.div`
  margin: auto;
`;

const RadioContainer = Paragraph.extend`
  & input {
    margin-right: 10px;
  }

  & label {
    font-size: ${variables.fontSizeMedium};
  }
`;

const PASSPORT = 'passport';
const ID = 'id';
const DRIVING_LICENSE = 'drivingLicense';

const withDocumentType = withState('documentType', 'setDocumentType', PASSPORT);

type Props = {
  documentType: string,
  setDocumentType: ((string) => string) => void,
  redirectToID: () => void,
  redirectToPassport: () => void,
  redirectToDrivingLicense: () => void,
};

export const ChooseDocumentTypeInternal = withDocumentType(
  ({
    documentType,
    setDocumentType,
    redirectToID,
    redirectToPassport,
    redirectToDrivingLicense,
  }: Props) => {
    const navigate = () => {
      if (documentType === PASSPORT) {
        redirectToPassport();
      } else if (documentType === ID) {
        redirectToID();
      } else if (documentType === DRIVING_LICENSE) {
        redirectToDrivingLicense();
      }
    };
    return (
      <Container>
        <BackLink to={VERIFICATION_ADDRESS_ROUTE} />
        <StyledHeading>Select your document</StyledHeading>
        <ColumnFlex>
          <RadioContainer>
            <label htmlFor="passport">
              <input
                type="radio"
                id="passport"
                name="documentType"
                checked={documentType === PASSPORT}
                onChange={_ => setDocumentType(_ => PASSPORT)}
              />
              Passport
            </label>
          </RadioContainer>
          <RadioContainer>
            <label htmlFor="idcard">
              <input
                type="radio"
                id="idcard"
                name="documentType"
                checked={documentType === ID}
                onChange={_ => setDocumentType(_ => ID)}
              />
              National Identity Card
            </label>
          </RadioContainer>
          <RadioContainer>
            <label htmlFor="drivingLicense">
              <input
                type="radio"
                id="drivingLicense"
                name="documentType"
                checked={documentType === DRIVING_LICENSE}
                onChange={_ => setDocumentType(_ => DRIVING_LICENSE)}
              />
              Driving license
            </label>
          </RadioContainer>
        </ColumnFlex>
        <Buttons>
          <PrimaryButton onClick={navigate} inline type="submit">
            Next
          </PrimaryButton>
        </Buttons>
      </Container>
    );
  },
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      redirectToID: () => push(VERIFICATION_ID_FRONT_VERIFICATION_ROUTE),
      redirectToPassport: () => push(VERIFICATION_PASSPORT_VERIFICATION_ROUTE),
      redirectToDrivingLicense: () =>
        push(VERIFICATION_DRIVING_LICENSE_VERIFICATION_ROUTE),
    },
    dispatch,
  );

ChooseDocumentTypeInternal.displayName = 'ChooseDocumentType';

export const ChooseDocumentType = connect(null, mapDispatchToProps)(
  ChooseDocumentTypeInternal,
);

// @flow
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link, Progress, WrappedContent } from '../ui';
import {
  VERIFICATION_INTRO_ROUTE,
  VERIFICATION_PROFILE_ROUTE,
  VERIFICATION_ADDRESS_ROUTE,
  VERIFICATION_ID_VERIFICATION_ROUTE,
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
  VERIFICATION_SELFIE_VERIFICATION_ROUTE,
} from './constants';
import BackIcon from './icon/BackIcon';
import VerificationProgress from './VerificationProgress';
import { routes } from '../router';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BackLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
`;

const ProgressContainer = styled.div`
  margin-top: 25px;
`;

const stepComponents = [
  'Intro',
  'Profile',
  'AddressComponent',
  'IdVerification',
  'AddressVerification',
  'SelfieVerification',
  'Confirm',
];

const backButtonRoutes = [
  VERIFICATION_INTRO_ROUTE,
  VERIFICATION_PROFILE_ROUTE,
  VERIFICATION_ADDRESS_ROUTE,
  VERIFICATION_ID_VERIFICATION_ROUTE,
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
  VERIFICATION_SELFIE_VERIFICATION_ROUTE,
];

const getActiveStepIndex = (WrappedComponent: *): number => {
  return stepComponents.findIndex(component => {
    if (WrappedComponent.displayName) {
      return (
        WrappedComponent.displayName === component ||
        WrappedComponent.displayName.includes(`(${component})`)
      );
    }
    return false;
  });
};

export const verificationFlow = (WrappedComponent: *) => {
  const flow = (props: any) => {
    const count = stepComponents.length;
    const activeIndex = getActiveStepIndex(WrappedComponent);
    return (
      <Container>
        {props.progress && <Progress />}
        {(activeIndex > 0 && (
          <BackLink id="back-link" to={backButtonRoutes[activeIndex - 1]}>
            <BackIcon>Back</BackIcon>
          </BackLink>
        )) || (
          <BackLink id="back-link" to={routes.BASE}>
            <BackIcon>Back</BackIcon>
          </BackLink>
        )}
        <ProgressContainer>
          <VerificationProgress total={count} current={activeIndex} />
        </ProgressContainer>
        <WrappedContent>
          <WrappedComponent {...props} />
        </WrappedContent>
      </Container>
    );
  };
  const mapStateToProps: MapStateToProps<*, *, *> = state => ({
    progress: state.page.showProgress,
  });

  const connectedFlow = connect(mapStateToProps)(flow);
  connectedFlow.displayName = `verificationFlow(${WrappedComponent.name})`;

  return connectedFlow;
};

export default verificationFlow;

// @flow
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Progress, WrappedContent } from '../ui';
import VerificationProgress from './VerificationProgress';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
        <ProgressContainer>
          <VerificationProgress total={count} current={activeIndex + 1} />
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

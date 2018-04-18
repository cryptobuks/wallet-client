// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { VerificationState } from '../verificationState';
import { fetchVerificationRoutine } from '../verificationRoutine';

type Props = {
  +verification: VerificationState,
  +fetchVerification: () => void,
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withVerification = (WrappedComponent: *) => {
  class ComponentWithVerification extends Component<Props> {
    componentWillMount() {
      this.checkIfVerificationIsLoaded(this.props.verification);
    }

    checkIfVerificationIsLoaded(verification: VerificationState) {
      const isVerificationLoaded = verification.verificationCreated != null;
      if (!isVerificationLoaded) {
        this.props.fetchVerification();
      }
    }

    render() {
      return <div>{<WrappedComponent {...this.props} />}</div>;
    }
  }

  ComponentWithVerification.displayName = `withVerification(${getDisplayName(
    WrappedComponent,
  )})`;

  const mapStateToProps = state => ({
    verification: state.verification,
  });

  const mapDispatchToProps = {
    fetchVerification: fetchVerificationRoutine,
  };

  return connect(mapStateToProps, mapDispatchToProps)(
    ComponentWithVerification,
  );
};

export default withVerification;

// @flow

import Webcam from 'react-webcam';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import {
  BackLink,
  Heading,
  Paragraph,
  ParagraphSmall,
  PrimaryButton,
} from '../../../ui';
import {
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
  VERIFICATION_CONFIRM_ROUTE,
} from '../../constants';
import { type VerificationFileBase64 } from '../verificationFilesApi';
import { verificationPostRoutine } from '../verificationRoutine';
import { EUIcon } from '../../icon/EUIcon';

export type Props = {
  postVerification: VerificationFileBase64 => void,
  redirectToNextStep: () => void,
};

const LargeHeading = Heading.extend`
  margin-bottom: 22px;
`;

const WebcamContainer = styled.div`
  text-align: center;
`;

export class SelfieVerification extends Component<Props> {
  webcam: Webcam;

  setWebcam = (webcam: Webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const type = 'SELFIE';
    const base64Data = this.webcam.getScreenshot();
    this.props.postVerification({ type, base64Data });
    this.props.redirectToNextStep();
  };

  render() {
    return (
      <div>
        <BackLink to={VERIFICATION_ADDRESS_VERIFICATION_ROUTE} />
        <LargeHeading center>Your photo for identification</LargeHeading>
        <Paragraph center>
          Take a photo or upload a photo from a library so we know who you are.
        </Paragraph>
        <ParagraphSmall center>
          The protection of your personal details is of utmost importance to us.
          We will always prioritize the security of our users. Change is a
          regulated and licensed EU entity.
        </ParagraphSmall>
        <WebcamContainer>
          <Webcam
            audio={false}
            height={300}
            ref={this.setWebcam}
            screenshotFormat="image/jpeg"
            width={300}
          />
        </WebcamContainer>
        <EUIcon />
        <PrimaryButton className="mt-4" onClick={this.capture}>
          Capture photo
        </PrimaryButton>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    redirectToNextStep: () => dispatch(push(VERIFICATION_CONFIRM_ROUTE)),
    postVerification: payload => dispatch(verificationPostRoutine(payload)),
    dispatch,
  };
};

const ConnectedSelfieVerification = connect(null, mapDispatchToProps)(
  SelfieVerification,
);
ConnectedSelfieVerification.displayName = 'SelfieVerification';

export default ConnectedSelfieVerification;

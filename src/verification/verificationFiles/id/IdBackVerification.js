// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import {
  BackLink,
  FileUpload,
  GradientHeading,
  Paragraph,
  ParagraphSmall,
} from '../../../ui';
import {
  VERIFICATION_ID_FRONT_VERIFICATION_ROUTE,
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
} from '../../constants';
import verificationFileUploader from '../verificationFileUploader';
import EUIcon from '../../icon/EUIcon';

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

type Props = {
  onChoose: (fileList: FileList) => void,
  redirectToNextStep: () => void,
};

export const IdBackVerification = ({ onChoose, redirectToNextStep }: Props) => {
  const chooseAndGoToNextStep = (fileList: FileList) => {
    onChoose(fileList);
    redirectToNextStep();
  };

  return (
    <div>
      <BackLink to={VERIFICATION_ID_FRONT_VERIFICATION_ROUTE} />
      <GradientHeading center>
        Photo of the back side of your ID document
      </GradientHeading>
      <Paragraph center>
        A clear photo of your ID document. Not a picture of yourself.
      </Paragraph>
      <ParagraphSmall center>
        The protection of your personal details is of utmost importance to us.
        We will always prioritize the security of our users. Change is a
        regulated and licensed EU entity.
      </ParagraphSmall>
      <EUIcon />
      <Buttons>
        <FileUpload type="camera" onChoose={chooseAndGoToNextStep}>
          Camera
        </FileUpload>
      </Buttons>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      redirectToNextStep: () => push(VERIFICATION_ADDRESS_VERIFICATION_ROUTE),
    },
    dispatch,
  );

IdBackVerification.displayName = 'IdBackVerification';

const component = connect(null, mapDispatchToProps)(IdBackVerification);
const IdBackVerificationWithFileUploader = verificationFileUploader(
  component,
  'ID_CARD_BACK',
);
IdBackVerificationWithFileUploader.displayName = 'IdBackVerification';
export default IdBackVerificationWithFileUploader;

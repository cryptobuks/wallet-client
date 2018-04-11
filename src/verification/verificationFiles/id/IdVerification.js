// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import {
  FileUpload,
  GradientHeading,
  Paragraph,
  ParagraphSmall,
} from '../../../ui';
import { VERIFICATION_ADDRESS_VERIFICATION_ROUTE } from '../../constants';
import verificationFileUploader from '../verificationFileUploader';
import EUIcon from '../../icon/EUIcon';

const CenterHeading = GradientHeading.extend`
  text-align: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

type Props = {
  onChoose: (fileList: FileList) => void,
  redirectToNextStep: () => void,
};

export const IdVerification = ({ onChoose, redirectToNextStep }: Props) => {
  const chooseAndGoToNextStep = (fileList: FileList) => {
    onChoose(fileList);
    redirectToNextStep();
  };

  return (
    <div>
      <CenterHeading>Your photo for identification</CenterHeading>
      <Paragraph center>
        Take a photo or upload a photo from a library so we know who you are.
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

IdVerification.displayName = 'IdVerification';

const component = connect(null, mapDispatchToProps)(IdVerification);
const IdVerificationWithFileUploader = verificationFileUploader(
  component,
  'PASSPORT',
);
IdVerificationWithFileUploader.displayName = 'IdVerification';
export default IdVerificationWithFileUploader;

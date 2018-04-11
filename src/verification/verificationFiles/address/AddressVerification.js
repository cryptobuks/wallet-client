// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import {
  FileUpload,
  FileUploadLink,
  Heading,
  Paragraph,
  ParagraphSmall,
} from '../../../ui';
import { VERIFICATION_SELFIE_VERIFICATION_ROUTE } from '../../constants';
import verificationFileUploader from '../verificationFileUploader';
import EUIcon from '../../icon/EUIcon';

const LargeHeading = Heading.extend`
  margin-bottom: 22px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${FileUploadLink} {
    margin-top: 25px;
  }
`;

type Props = {
  onChoose: (fileList: FileList) => void,
  redirectToNextStep: () => void,
};

export const AddressVerification = ({
  onChoose,
  redirectToNextStep,
}: Props) => {
  const chooseAndGoToNextStep = (fileList: FileList) => {
    onChoose(fileList);
    redirectToNextStep();
  };

  return (
    <div>
      <LargeHeading center>Photo of proof of address</LargeHeading>
      <Paragraph center>
        A utility bill or credit card statement from the last 3 months sent to
        your current address.
      </Paragraph>
      <ParagraphSmall center>
        The protection of your personal details is of utmost importance to us.
        We will always prioritize the security of our users. Change is a
        regulated and licensed EU entity.
      </ParagraphSmall>
      <EUIcon />
      <Buttons>
        <FileUpload type="camera" onChoose={chooseAndGoToNextStep}>
          Take a photo
        </FileUpload>
        <FileUploadLink onChoose={chooseAndGoToNextStep}>
          Upload a photo
        </FileUploadLink>
      </Buttons>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      redirectToNextStep: () => push(VERIFICATION_SELFIE_VERIFICATION_ROUTE),
    },
    dispatch,
  );

const component = connect(null, mapDispatchToProps)(AddressVerification);
const AddressVerificationWithFileUploader = verificationFileUploader(
  component,
  'ADDRESS',
);
AddressVerificationWithFileUploader.displayName = 'AddressVerification';
export default AddressVerificationWithFileUploader;

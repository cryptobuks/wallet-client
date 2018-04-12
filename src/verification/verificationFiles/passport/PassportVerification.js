// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import {
  BackLink,
  FileUpload,
  GradientHeading,
  Paragraph,
  ParagraphSmall,
  RowFlex,
} from '../../../ui';
import {
  VERIFICATION_CHOOSE_ROUTE,
  VERIFICATION_ADDRESS_VERIFICATION_ROUTE,
} from '../../constants';
import verificationFileUploader from '../verificationFileUploader';
import EUIcon from '../../icon/EUIcon';

const Buttons = RowFlex.extend`
  justify-content: space-between;
`;

type Props = {
  onChoose: (fileList: FileList) => void,
  redirectToNextStep: () => void,
};

export const PassportVerification = ({
  onChoose,
  redirectToNextStep,
}: Props) => {
  const chooseAndGoToNextStep = (fileList: FileList) => {
    onChoose(fileList);
    redirectToNextStep();
  };

  return (
    <div>
      <BackLink to={VERIFICATION_CHOOSE_ROUTE} />
      <GradientHeading center>Photo of your passport</GradientHeading>
      <Paragraph center>
        A clear photo of a valid passport. Not a picture of yourself.
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

PassportVerification.displayName = 'PassportVerification';

const component = connect(null, mapDispatchToProps)(PassportVerification);
const PassportVerificationWithFileUploader = verificationFileUploader(
  component,
  'PASSPORT',
);
PassportVerificationWithFileUploader.displayName = 'PassportVerification';
export default PassportVerificationWithFileUploader;

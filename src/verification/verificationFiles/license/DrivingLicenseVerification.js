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

export const DrivingLicenseVerification = ({
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
      <GradientHeading center>Photo of your driving license</GradientHeading>
      <Paragraph center>
        A clear photo of a valid driving license. Not a picture of yourself.
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

DrivingLicenseVerification.displayName = 'DrivingLicenseVerification';

const component = connect(null, mapDispatchToProps)(DrivingLicenseVerification);
const DrivingLicenseVerificationWithFileUploader = verificationFileUploader(
  component,
  'DRIVERS_LICENSE',
);
DrivingLicenseVerificationWithFileUploader.displayName =
  'DrivingLicenseVerification';
export default DrivingLicenseVerificationWithFileUploader;

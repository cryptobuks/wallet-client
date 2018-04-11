// @flow
import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Heading, Paragraph, ParagraphSmall, PrimaryButton } from '../../ui';
import { FormFeedback } from '../../ui/form';
import confirmRoutine from './confirmRoutine';
import EUIcon from '../icon/EUIcon';

const StyledHeading = styled(Heading)`
  margin-bottom: 50px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Props = {
  error: string,
  confirm: () => void,
};

export const Confirm = ({ confirm, error }: Props) => (
  <div>
    <StyledHeading center>We will go over your documents</StyledHeading>
    {error && <FormFeedback>{error}</FormFeedback>}
    <Paragraph center>
      For any assistance contact us through settings page.
    </Paragraph>
    <ParagraphSmall center>
      The protection of your personal details is of utmost importance to us. We
      will always prioritize the security of our users. Change is a regulated
      and licensed EU entity.
    </ParagraphSmall>
    <EUIcon />
    <Buttons>
      <PrimaryButton inline onClick={() => confirm()}>
        Got it
      </PrimaryButton>
    </Buttons>
  </div>
);

Confirm.displayName = 'Confirm';

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  error: state.confirm.error,
});

const mapDispatchToProps = {
  confirm: confirmRoutine,
};

const ConfirmWithWallet = connect(mapStateToProps, mapDispatchToProps)(Confirm);
ConfirmWithWallet.displayName = 'Confirm';
export default ConfirmWithWallet;

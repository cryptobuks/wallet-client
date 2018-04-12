// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AppRouter, { routes } from '../../router';
import {
  BackLink,
  GradientButton,
  GradientHeading,
  Link,
  Paragraph,
  ParagraphSmall,
  Top,
} from '../../ui';
import variables from '../../ui/variables';
import withUser from '../../user/withUser';
import { VERIFICATION_PROFILE_ROUTE } from '../constants';
import addressLogo from './img/address_logo.png';
import idLogo from './img/id_logo.png';
import selfieLogo from './img/selfie_logo.png';
import EUIcon from '../icon/EUIcon';

const StyledParagraph = Paragraph.extend`
  margin-top: 11px;
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  & p {
    font-size: ${variables.fontSizeTiny};
    text-align: center;
  }
`;

const Logo = styled.img`
  display: block;
  max-width: 50px;
  max-height: 30px;
  margin-left: auto;
  margin-right: auto;
`;

const LogoParagraph = Paragraph.extend`
  max-width: 100px;
`;

export type Props = {
  isVerified: ?boolean,
};

export const Intro = (props: Props) =>
  props.isVerified ? (
    <AppRouter defaultOnEnter />
  ) : (
    <div>
      <BackLink to={routes.BASE} />
      <Top>
        <GradientHeading center>Before we get started ...</GradientHeading>
      </Top>
      <StyledParagraph center>
        Change is a regulated EU entity, so we need to know who you are before
        you can make your first purchase.
      </StyledParagraph>
      <StyledParagraph center>Be ready to</StyledParagraph>
      <IconList>
        <div>
          <Logo alt="ID icon" src={idLogo} />
          <LogoParagraph>Upload a photo of your ID</LogoParagraph>
        </div>
        <div>
          <Logo alt="Proof of address icon" src={addressLogo} />
          <LogoParagraph>Provide proof of your address</LogoParagraph>
        </div>
        <div>
          <Logo alt="Self-portrait icon" src={selfieLogo} />
          <LogoParagraph>Take a self-portrait</LogoParagraph>
        </div>
      </IconList>
      <ParagraphSmall center>
        The service is currently available for the European Economic Area
        citizens only.
      </ParagraphSmall>
      <EUIcon />
      <StyledParagraph center>
        <Link to={VERIFICATION_PROFILE_ROUTE}>
          <GradientButton inline>Next</GradientButton>
        </Link>
      </StyledParagraph>
    </div>
  );

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  isVerified: state.user.isVerified,
});

const ConnectedIntro = connect(mapStateToProps)(withUser(Intro));

ConnectedIntro.displayName = 'Intro';

export default ConnectedIntro;

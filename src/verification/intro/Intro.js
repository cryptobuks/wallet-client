// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AppRouter from '../../router';
import {
  GradientButton,
  GradientHeading,
  Link,
  Paragraph,
  Top,
} from '../../ui';
import variables from '../../ui/variables';
import withUser from '../../user/withUser';
import { VERIFICATION_PROFILE_ROUTE } from '../constants';
import addressLogo from './img/address_logo.png';
import idLogo from './img/id_logo.png';
import selfieLogo from './img/selfie_logo.png';

const StyledHeading = GradientHeading.extend`
  text-align: center;
`;

const CenteredParagraph = Paragraph.extend`
  font-family: OpenSansSemibold, Fallback, sans-serif;
  text-align: center;
  margin-top: 11px;
`;

const CenteredParagraphSmall = CenteredParagraph.extend`
  max-width: 285px;
  font-size: ${variables.fontSizeTiny};
  color: #a8a5a5;
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;

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
      <Top>
        <StyledHeading>Before we get started ...</StyledHeading>
      </Top>
      <CenteredParagraph>
        Change is a regulated EU entity, so we need to know who you are before
        you can make your first purchase.
      </CenteredParagraph>
      <CenteredParagraph>Be ready to</CenteredParagraph>
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
      <CenteredParagraphSmall>
        The service is currently available for the European Economic Area
        citizens only.
      </CenteredParagraphSmall>
      <CenteredParagraph>
        <Link to={VERIFICATION_PROFILE_ROUTE}>
          <GradientButton inline>Next</GradientButton>
        </Link>
      </CenteredParagraph>
    </div>
  );

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  isVerified: state.user.isVerified,
});

const ConnectedIntro = connect(mapStateToProps)(withUser(Intro));

ConnectedIntro.displayName = 'Intro';

export default ConnectedIntro;

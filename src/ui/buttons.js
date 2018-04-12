// @flow
import React from 'react';
import styled from 'styled-components';
import variables from './variables';
import { Link as RouterLink } from 'react-router-dom';
import BackIcon from './icon/BackIcon';

type Props = {
  alt: ?boolean,
  inline: ?boolean,
  children: any,
};

const ButtonBase = ({ alt, inline, ...props }: Props) => (
  <button {...props}>{props.children}</button>
);

export const GradientButton = styled(ButtonBase)`
  display: ${props => (props.inline ? 'inline' : 'block')};
  width: ${props => (props.inline ? 'fit-content' : '100%')};
  background-image: linear-gradient(
    to right,
    ${variables.colorGreenLighter},
    ${variables.colorGreenBright}
  );
  padding: 0 2em 0 2em;
  height: 52px;
  min-width: 140px;
  margin: 0 auto;
  border-radius: 54.5px;
  border: 0;
  font-family: OpenSansBold, Fallback, sans-serif;
  font-size: ${variables.fontSizeNormal};
  color: ${variables.colorWhite};
  text-shadow: 0 1px 0 #0cb88e;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  a:hover {
    text-decoration: none;
    color: inherit;
  }
`;

export const Button = GradientButton;

export const Link = styled(RouterLink)`
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

export const PrimaryButton = Button.extend`
  color: white;
  background-color: ${props =>
    props.alt ? props.theme.alt : props.theme.main};
  box-shadow: 0 2px 6px 0 rgba(2, 189, 165, 0.4);
  text-transform: uppercase;

  &:disabled {
    background-color: #a1a1a1;
  }
`;

PrimaryButton.displayName = 'PrimaryButton';

export const LinkButton = Button.extend`
  color: #a1a1a1;
  font-size: 14px;
  text-transform: none;
`;

LinkButton.displayName = 'LinkButton';

const StyledBackLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
`;

export const BackLink = (props: any) => (
  <StyledBackLink {...props}>
    <BackIcon />
  </StyledBackLink>
);

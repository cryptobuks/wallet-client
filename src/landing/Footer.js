// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import SocialIcons from './SocialIcons';

import variables from './variables';

const Container = styled.div`
  padding: 48px 0;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 60px 0;
  `};
`;

const InnerContainer = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    width: 1152px;
  `};
`;

const ItemsContainer = styled.div`
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
    justify-content: center;
  `};
`;

const Item = styled.div``;

const ItemLink = styled(Link)`
  color: ${variables.colorNeutral};
  font-size: ${variables.fontSizeSmall};
  display: block;
  padding: 9px 12px;
  &:hover {
    color: ${variables.colorNeutral};
    text-decoration: none;
  }
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: inline-block;
    padding: 12px 24px;
    &:hover {
      color: ${variables.colorNeutralDark};
    }
  `};
`;

const SocialContainer = styled.div`
  text-align: center;
  margin: 24px 0;
`;

const CompanyContainer = styled.div`
  text-align: center;
  padding: 9px 0;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 12px 0;
  `};
`;

const Company = styled.div`
  color: ${variables.colorNeutralLight};
  font-size: ${variables.fontSizeSmall};
  white-space: nowrap;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: inline;
  `};
`;

const LegalLink = styled.a`
  color: ${variables.colorNeutralLight};
  font-size: ${variables.fontSizeSmall};
  text-decoration: none;
  white-space: nowrap;
  display: inline;
  margin: 0 9px;
  &:hover {
    color: ${variables.colorNeutralLight};
    text-decoration: none;
  }
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    margin-left: 24px;
    &:hover {
      color: ${variables.colorNeutralDark};
    }
  `};
`;

export const Footer = () => (
  <Container>
    <InnerContainer>
      <ItemsContainer>
        <Item>
          <ItemLink to="/#home">Home</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/#wallet">Wallet</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/#card">Card</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/#marketplace">Marketplace</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/about">About</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/careers">Careers</ItemLink>
        </Item>
        <Item>
          <ItemLink to="https://support.getchange.com/" target="_blank">
            Support
          </ItemLink>
        </Item>
        <Item>
          <ItemLink to="https://medium.com/changefinance" target="_blank">
            Blog
          </ItemLink>
        </Item>
      </ItemsContainer>

      <SocialContainer>
        <SocialIcons />
      </SocialContainer>

      <CompanyContainer>
        <Company>All Rights Reserved © Change Technologies OÜ</Company>
        <LegalLink
          href="Change.Terms.and.Conditions.2017-12-28.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms & conditions
        </LegalLink>
      </CompanyContainer>
    </InnerContainer>
  </Container>
);

export default Footer;

// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import { Heading, Top, WrappedContent } from '../ui';
import variables from '../ui/variables';
import { withUser } from '../user';
import { activeVerificationExists } from '../redux/selectors';
import { withVerification } from '../verification/withVerification';
import type { User } from '../user/userState';
import { VERIFICATION_INTRO_ROUTE } from '../verification/constants';
import MultiFactorAuth, { openMultiFactorAuthModal } from './multiFactorAuth';

const StyledList = styled.ul`
  margin-top: 20px;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  list-style: none;
  text-transform: uppercase;
  padding: 18px 0 18px 0;
  border-bottom: 1px solid ${variables.colorNeutralLightest};
  cursor: pointer;
`;

const Item = styled.span`
  color: ${variables.colorNeutral};
`;

const LinkItem = Item.withComponent(Link);

const Status = styled.span`
  color: #02bda5;
`;

export type Props = {
  user: User,
  verificationPending: ?boolean,
  open2FaAuthModal: () => void,
  goTo: string => void,
  noop: () => void,
};

export const Settings = ({
  user,
  open2FaAuthModal,
  goTo,
  noop,
  verificationPending,
}: Props) => {
  const getVerificationStatus = (): string => {
    if (verificationPending) {
      return 'Pending';
    }
    return user.isVerified ? 'Verified' : 'Not Verified';
  };

  const verificationStatus = getVerificationStatus();

  return (
    <WrappedContent>
      <Top>
        <Heading>My account</Heading>
        <StyledList>
          <StyledListItem onClick={open2FaAuthModal}>
            <Item>2-Factor Authentication</Item>
            <Status>{user.isUsing2Fa ? 'On' : 'Off'}</Status>
          </StyledListItem>
          <StyledListItem
            onClick={() =>
              !user.isVerified && !verificationPending
                ? goTo(VERIFICATION_INTRO_ROUTE)
                : noop
            }
          >
            <Item>Verification Status</Item>
            <Status>{verificationStatus}</Status>
          </StyledListItem>
          <StyledListItem>
            <LinkItem to="/logout">Log Out</LinkItem>
          </StyledListItem>
        </StyledList>
      </Top>
      <MultiFactorAuth />
    </WrappedContent>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  verificationPending: activeVerificationExists(state),
});

const mapDispatchToProps = {
  open2FaAuthModal: openMultiFactorAuthModal,
  goTo: push,
  noop: () => null,
};

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(
  Settings,
);

export default withUser(withVerification(ConnectedSettings));

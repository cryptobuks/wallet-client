// @flow

import React from 'react';
import { shallow } from 'enzyme';
import AppRouter, { routes } from '../../router';
import { Intro, type Props } from './Intro';
import { Link, GradientButton, Button } from '../../ui';
import { VERIFICATION_PROFILE_ROUTE } from '../constants';

jest.mock('../../card/order/cardOrderApi', () => ({
  hasOrder: jest.fn(() => Promise.resolve(false)),
}));

describe('Verification flow Intro', () => {
  let component;

  const props: Props = {
    isVerified: false,
  };

  beforeEach(() => {
    component = shallow(<Intro {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('can proceed to next page', () => {
    expect(
      component
        .find(Link)
        .find({ to: VERIFICATION_PROFILE_ROUTE })
        .find(GradientButton).length,
    ).toBe(1);
  });

  it('redirects to default on enter page when the user has already gone through the verification flow', () => {
    component.setProps({ isVerified: true });
    expect(component.contains(<AppRouter defaultOnEnter />)).toBe(true);
  });
});

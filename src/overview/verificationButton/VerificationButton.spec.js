// @flow

import { shallow } from 'enzyme';
import React from 'react';
import { GradientButton } from '../../ui';
import { VerificationButton } from './VerificationButton';

describe('Verification Button', () => {
  let component;

  beforeEach(() => {
    component = shallow(<VerificationButton />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders the verification button', () => {
    expect(component.find(GradientButton)).toBePresent();
  });
});

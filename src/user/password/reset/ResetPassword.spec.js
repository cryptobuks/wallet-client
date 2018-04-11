// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { ResetPassword } from './ResetPassword';
import { Field, PrimaryButton, BackLink, Heading } from '../../../ui';

describe('Overview component', () => {
  let component;
  const props = {
    handleSubmit: jest.fn(),
    error: undefined,
  };

  beforeEach(() => {
    component = shallow(<ResetPassword {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders heading', () => {
    expect(component.find(Heading).length).toBe(1);
  });

  it('renders email field', () => {
    expect(component.find(Field).find('[name="email"]').length).toBe(1);
  });

  it('renders submit button', () => {
    expect(component.find(PrimaryButton).find('[type="submit"]').length).toBe(
      1,
    );
  });

  it('renders back button', () => {
    expect(component.find(BackLink).length).toBe(1);
  });
});

// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { Signup, required } from './Signup';
import type { Props } from './Signup';
import { renderCheckbox, Field } from '../ui';

jest.mock('../redux/reduxStore');

describe('Signup component', () => {
  let component;
  const props: Props = {
    handleSubmit: jest.fn(),
    authenticated: false,
  };

  beforeEach(() => {
    component = shallow(<Signup {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('renders the TOS link', () => {
    expect(
      component.contains(
        <Field
          name="tos"
          id="tos"
          component={renderCheckbox}
          validate={required}
          label={
            <span>
              I agree to the{' '}
              <a
                href="https://getchange.com/legal/terms/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </span>
          }
        />,
      ),
    ).toBe(true);
  });
});

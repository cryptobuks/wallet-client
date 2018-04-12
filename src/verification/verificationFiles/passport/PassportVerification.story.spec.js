// @flow
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import jest from 'jest-mock';
import {
  storiesOf,
  specs,
  action,
  describe,
  beforeEach,
  it,
} from '../../../../.storybook/facade';
import { PassportVerification } from './PassportVerification';

storiesOf('Page', module).add('Passport Verification', () => {
  specs(() =>
    describe('Passport Verification', () => {
      let component;

      const props = {
        onChoose: jest.fn(),
        redirectToNextStep: jest.fn(),
      };

      beforeEach(() => {
        component = shallow(<PassportVerification {...props} />);
      });
      it('renders passport verification component', () => {
        expect(component);
      });
    }),
  );

  return (
    <PassportVerification
      onChoose={action('file chosen')}
      redirectToNextStep={action('redirecting to next step')}
    />
  );
});

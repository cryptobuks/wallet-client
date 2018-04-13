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
import { DrivingLicenseVerification } from './DrivingLicenseVerification';

storiesOf('Page', module).add('Driving License Verification', () => {
  specs(() =>
    describe('Driving License Verification', () => {
      let component;

      const props = {
        onChoose: jest.fn(),
        redirectToNextStep: jest.fn(),
      };

      beforeEach(() => {
        component = shallow(<DrivingLicenseVerification {...props} />);
      });
      it('renders driving license verification component', () => {
        expect(component);
      });
    }),
  );

  return (
    <DrivingLicenseVerification
      onChoose={action('file chosen')}
      redirectToNextStep={action('redirecting to next step')}
    />
  );
});

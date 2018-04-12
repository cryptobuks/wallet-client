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
import { IdFrontVerification } from './IdFrontVerification';

storiesOf('Page', module).add('ID Verification', () => {
  specs(() =>
    describe('ID Verification', () => {
      let component;

      const props = {
        onChoose: jest.fn(),
        redirectToNextStep: jest.fn(),
      };

      beforeEach(() => {
        component = shallow(<IdFrontVerification {...props} />);
      });
      it('renders id verification component', () => {
        expect(component);
      });
    }),
  );

  return (
    <IdFrontVerification
      onChoose={action('file chosen')}
      redirectToNextStep={action('redirecting to next step')}
    />
  );
});

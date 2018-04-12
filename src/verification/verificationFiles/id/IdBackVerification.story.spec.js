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
import { IdBackVerification } from './IdBackVerification';

storiesOf('Page', module).add('ID Back Verification', () => {
  specs(() =>
    describe('ID Back Verification', () => {
      let component;

      const props = {
        onChoose: jest.fn(),
        redirectToNextStep: jest.fn(),
      };

      beforeEach(() => {
        component = shallow(<IdBackVerification {...props} />);
      });
      it('renders id verification component', () => {
        expect(component);
      });
    }),
  );

  return (
    <IdBackVerification
      onChoose={action('file chosen')}
      redirectToNextStep={action('redirecting to next step')}
    />
  );
});

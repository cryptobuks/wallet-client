// @flow
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import {
  storiesOf,
  specs,
  describe,
  beforeEach,
  it,
} from '../../.storybook/facade';
import { Exchange } from './Exchange';

storiesOf('Page', module).add('Exchange', () => {
  specs(() =>
    describe('Exchange component', () => {
      let component;

      beforeEach(() => {
        component = shallow(<Exchange />);
      });
      it('renders exchange component', () => {
        expect(component);
      });
    }),
  );

  return <Exchange />;
});

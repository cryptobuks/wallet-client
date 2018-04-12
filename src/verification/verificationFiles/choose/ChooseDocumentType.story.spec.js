// @flow
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import {
  beforeEach,
  describe,
  it,
  specs,
  storiesOf,
} from '../../../../.storybook/facade';
import { ChooseDocumentType } from './ChooseDocumentType';

storiesOf('Page', module).add('Choose document type', () => {
  specs(() =>
    describe('ID Verification', () => {
      let component;

      beforeEach(() => {
        component = shallow(<ChooseDocumentType />);
      });
      it('renders choose document type component', () => {
        expect(component);
      });
    }),
  );

  return <ChooseDocumentType />;
});

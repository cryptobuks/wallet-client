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
import { ChooseDocumentTypeInternal as ChooseDocumentType } from './ChooseDocumentType';

storiesOf('Page', module).add('Choose document type', () => {
  specs(() =>
    describe('Choose document type', () => {
      let component;

      let props = {};

      beforeEach(() => {
        component = shallow(<ChooseDocumentType {...props} />);
      });
      it('renders choose document type component', () => {
        expect(component);
      });
    }),
  );

  return <ChooseDocumentType />;
});

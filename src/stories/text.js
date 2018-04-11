// @flow
import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import { Heading, SubHeading, Paragraph } from '../ui';

storiesOf('Text', module)
  .add('Heading', () => <Heading>Heading</Heading>)
  .add('Sub Heading', () => <SubHeading>SubHeading</SubHeading>)
  .add('Paragraph', () => <Paragraph>This is just a bunch on text</Paragraph>);

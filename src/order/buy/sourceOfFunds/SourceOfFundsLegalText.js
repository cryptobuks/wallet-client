import React from 'react';
import { Paragraph } from '../../../ui';
import variables from '../../../ui/variables';

const SmallLegalText = Paragraph.extend`
  font-size: ${variables.fontSizeTiny};
  font-family: ${variables.fontPrimary};
  text-align: justify;
`;

export const SourceOfFundsLegalText = () => (
  <SmallLegalText>
    To keep us safe from trouble with the regulators we ask you to confirm that
    you are the beneficial owner and not politically exposed person, nor a
    family member or person known to be close associate of such person. If you
    don’t understand what we are asking or want to know what we mean by this,
    please refer to the{' '}
    <a
      href="https://getchange.com/legal/definitions/"
      target="_blank"
      rel="noopener noreferrer"
    >
      legal definitions
    </a>.
  </SmallLegalText>
);

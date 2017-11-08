import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '../ui';

export default story => (
  <ThemeProvider theme={DefaultTheme}>{story()}</ThemeProvider>
);

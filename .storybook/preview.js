import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { lightTheme } from '../src/AragonTheme';
import '../src/App.css';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];

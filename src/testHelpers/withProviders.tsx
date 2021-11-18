import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { theme } from 'styles/theme';

export const renderWithProviders = (tree: any) => {
  const Tree = tree;

  return render(<ThemeProvider theme={theme}>{Tree}</ThemeProvider>);
};

'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './index';
import './augmentation'; // Import augmentation types

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Theme Provider component that wraps the entire app with our custom MUI theme
 * Includes CSS baseline for consistent styling across browsers
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;

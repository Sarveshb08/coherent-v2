import type { Preview } from "@storybook/react";
import type { Decorator } from "@storybook/react";
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './preview.css';

// Create a basic MUI theme for Storybook
const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const withMuiTheme: Decorator = (Story) => {
  return React.createElement(
    ThemeProvider,
    { theme },
    React.createElement(CssBaseline),
    React.createElement(Story)
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered', // Default layout for all stories
  },
  decorators: [withMuiTheme],
};

export default preview;

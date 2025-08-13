import '@mui/material/styles';

// Augment the palette to include custom color variants
declare module '@mui/material/styles' {
  interface Palette {
    tertiary?: Palette['primary'];
    stepper?: {
      connector: string;
      activeConnector: string;
      numberBackground: string;
      activeNumberBackground: string;
      completedNumberBackground: string;
      numberText: string;
      completedText: string;
      activeText: string;
      inactiveText: string;
      optionalText: string;
    };
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    stepper?: {
      connector: string;
      activeConnector: string;
      numberBackground: string;
      activeNumberBackground: string;
      completedNumberBackground: string;
      numberText: string;
      completedText: string;
      activeText: string;
      inactiveText: string;
      optionalText: string;
    };
  }
}

// Augment Checkbox props to include custom size variants
declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    tertiary: true;
  }
  
  interface CheckboxPropsSizeOverrides {
    large: true;
  }
}

// Augment TextField props to include custom variants if needed
declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    tertiary: true;
  }
}

// Augment Button props for consistency
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

export {};

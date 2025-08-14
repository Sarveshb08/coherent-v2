import '@mui/material/styles';

// Augment the palette to include custom color variants
declare module '@mui/material/styles' {
  interface Palette {
    tertiary?: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
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

// Augment Chip props to include secondary color variants
declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    // Enable default MUI colors that may be disabled
    primary: true;
    secondary: true;
    error: true;
    warning: true;
    info: true;
    success: true;
    default: true;
  }
}

export {};

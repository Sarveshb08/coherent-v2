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

// Augment Stepper components with custom props
declare module '@mui/material/Stepper' {
  interface StepperOwnProps {
    textAlignment?: 'left' | 'center';
    smallScreen?: boolean;
  }
}

declare module '@mui/material/Step' {
  interface StepOwnProps {
    optional?: boolean;
  }
}

declare module '@mui/material/StepLabel' {
  interface StepLabelOwnProps {
    textAlignment?: 'left' | 'center';
    optional?: boolean;
  }
}

declare module '@mui/material/MobileStepper' {
  interface MobileStepperOwnProps {
    progressType?: 'text' | 'dots' | 'progress';
  }
}

export {};

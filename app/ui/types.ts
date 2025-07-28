// Design token types for consistent theming
export interface DesignTokens {
  colors: {
    primary: ColorPalette;
    secondary: ColorPalette;
    success: ColorPalette;
    warning: ColorPalette;
    danger: ColorPalette;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  fontSize: {
    xs: [string, { lineHeight: string }];
    sm: [string, { lineHeight: string }];
    md: [string, { lineHeight: string }];
    lg: [string, { lineHeight: string }];
    xl: [string, { lineHeight: string }];
  };
}

export interface ColorPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

// Component type exports
export type { ButtonVariant, ButtonSize, ButtonState, EnhancedButtonProps } from './enhanced-button';
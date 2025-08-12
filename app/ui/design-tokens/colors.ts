// Design tokens extracted from Figma
// Color palette for the design system components including TextField

export const colors = {
  // Primary colors
  primary: {
    main: '#461E96',        // Primary purple from Figma
    hover: 'rgba(70, 30, 150, 0.04)',
    focus: 'rgba(70, 30, 150, 0.3)',
    border: '#461E96',
    disabled: 'rgba(70, 30, 150, 0.38)',
  },
  
  // Secondary colors  
  secondary: {
    main: '#6930CA',        // Secondary purple
    hover: 'rgba(105, 48, 202, 0.04)',
    focus: 'rgba(105, 48, 202, 0.3)',
    border: '#6930CA',
    disabled: 'rgba(105, 48, 202, 0.38)',
  },
  
  // Error colors
  error: {
    main: '#D92C2C',        // Error red from Figma
    hover: 'rgba(217, 44, 44, 0.04)',
    focus: 'rgba(217, 44, 44, 0.3)',
    border: '#D92C2C',
    disabled: 'rgba(217, 44, 44, 0.38)',
  },
  
  // Warning colors
  warning: {
    main: '#EF6C00',        // Orange
    hover: 'rgba(239, 108, 0, 0.04)',
    focus: 'rgba(239, 108, 0, 0.3)',
    border: '#EF6C00',
    disabled: 'rgba(239, 108, 0, 0.38)',
  },
  
  // Info colors
  info: {
    main: '#0288D1',        // Light blue
    hover: 'rgba(2, 136, 209, 0.04)',
    focus: 'rgba(2, 136, 209, 0.3)',
    border: '#0288D1',
    disabled: 'rgba(2, 136, 209, 0.38)',
  },
  
  // Success colors
  success: {
    main: '#2E7D32',        // Green
    hover: 'rgba(46, 125, 50, 0.04)',
    focus: 'rgba(46, 125, 50, 0.3)',
    border: '#2E7D32',
    disabled: 'rgba(46, 125, 50, 0.38)',
  },
  
  // Default/neutral colors
  default: {
    main: '#6B6C7B',        // Gray
    hover: 'rgba(0, 0, 0, 0.04)', // Hover state from Figma
    focus: 'rgba(0, 0, 0, 0.12)',
    border: 'rgba(0, 0, 0, 0.56)',      // Default border from Figma
    disabled: 'rgba(0, 0, 0, 0.38)', // Disabled state from Figma
  },
  
  // Background colors
  background: {
    white: '#FFFFFF',
    filled: 'rgba(0, 0, 0, 0.06)', // Filled variant background
    filledHover: 'rgba(0, 0, 0, 0.09)', // Filled variant hover
  },

  // Text colors from Figma
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',     // Value text
    secondary: 'rgba(0, 0, 0, 0.6)',    // Label text 
    disabled: 'rgba(0, 0, 0, 0.38)',    // Disabled text
  },

  // Notification-specific colors from Figma
  notification: {
    // Error notification colors
    error: {
      filled: '#DF5555',         // Error filled background
      outlined: '#D32F2F',       // Error outlined border and icon
      standard: 'rgba(203, 44, 44, 0.1)', // Error standard background
      text: '#5F2120',           // Error text color
      icon: '#D32F2F',           // Error icon color for outlined/standard
    },
    // Warning notification colors  
    warning: {
      filled: '#D68309',         // Warning filled background
      outlined: '#D68309',       // Warning outlined border
      standard: '#FFF8E1',       // Warning standard background
      text: '#663C00',           // Warning text color
      icon: '#EF6C00',           // Warning icon color
    },
    // Info notification colors
    info: {
      filled: '#D68309',         // Info filled background (matches warning in Figma)
      outlined: '#D68309',       // Info outlined border
      standard: '#FFF8E1',       // Info standard background
      text: '#663C00',           // Info text color
      icon: '#D68309',           // Info icon color
    },
    // Success notification colors
    success: {
      filled: '#00A331',         // Success filled background
      outlined: '#00A331',       // Success outlined border
      standard: 'rgba(0, 163, 49, 0.1)', // Success standard background
      text: '#1E4620',           // Success text color
      icon: '#2E7D32',           // Success icon color for outlined/standard
    },
  },
} as const;

// Export individual color types for TypeScript
export type ColorVariant = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
export type NotificationSeverity = 'error' | 'warning' | 'info' | 'success';
export type NotificationVariant = 'filled' | 'outlined' | 'standard';
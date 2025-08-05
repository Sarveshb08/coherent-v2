// Design tokens extracted from Figma
// Color palette for the design system components including TextField

export const colors = {
  // Primary colors
  primary: {
    main: '#461E96',        // Primary purple from Figma
    hover: 'rgba(70, 30, 150, 0.04)',
    focus: 'rgba(70, 30, 150, 0.3)',
  },
  
  // Secondary colors  
  secondary: {
    main: '#6930CA',        // Secondary purple
    hover: 'rgba(105, 48, 202, 0.04)',
    focus: 'rgba(105, 48, 202, 0.3)',
  },
  
  // Error colors
  error: {
    main: '#D92C2C',        // Error red from Figma
    hover: 'rgba(217, 44, 44, 0.04)',
    focus: 'rgba(217, 44, 44, 0.3)',
  },
  
  // Warning colors
  warning: {
    main: '#EF6C00',        // Orange
    hover: 'rgba(239, 108, 0, 0.04)',
    focus: 'rgba(239, 108, 0, 0.3)',
  },
  
  // Info colors
  info: {
    main: '#0288D1',        // Light blue
    hover: 'rgba(2, 136, 209, 0.04)',
    focus: 'rgba(2, 136, 209, 0.3)',
  },
  
  // Success colors
  success: {
    main: '#2E7D32',        // Green
    hover: 'rgba(46, 125, 50, 0.04)',
    focus: 'rgba(46, 125, 50, 0.3)',
  },
  
  // Default/neutral colors
  default: {
    main: '#6B6C7B',        // Gray
    hover: 'rgba(105, 48, 202, 0.5)', // Hover state from Figma
    focus: 'rgba(0, 0, 0, 0.12)',
    border: '#6930CA',      // Default border from Figma
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

  // Radio component specific colors from Figma
  radio: {
    primary: {
      main: '#1976D2',
      hover: 'rgba(25, 118, 210, 0.04)',
      focus: 'rgba(25, 118, 210, 0.3)',
    },
    secondary: {
      main: '#9C27B0',
      hover: 'rgba(156, 39, 176, 0.04)',
      focus: 'rgba(156, 39, 176, 0.3)',
    },
    error: {
      main: '#D32F2F',
      hover: 'rgba(211, 47, 47, 0.04)',
      focus: 'rgba(211, 47, 47, 0.3)',
    },
    warning: {
      main: '#EF6C00',
      hover: 'rgba(239, 108, 0, 0.04)',
      focus: 'rgba(239, 108, 0, 0.3)',
    },
    info: {
      main: '#0288D1',
      hover: 'rgba(2, 136, 209, 0.04)',
      focus: 'rgba(2, 136, 209, 0.3)',
    },
    success: {
      main: '#2E7D32',
      hover: 'rgba(46, 125, 50, 0.04)',
      focus: 'rgba(46, 125, 50, 0.3)',
    },
    default: {
      main: 'rgba(0, 0, 0, 0.6)',         // Border color for unchecked state
      hover: 'rgba(0, 0, 0, 0.04)',       // Hover background
      focus: 'rgba(0, 0, 0, 0.12)',       // Focus background
      disabled: 'rgba(0, 0, 0, 0.38)',    // Disabled state
    },
  },
} as const;

// Export individual color types for TypeScript
export type ColorVariant = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
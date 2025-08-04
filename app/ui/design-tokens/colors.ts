// Design tokens extracted from Figma
// Color palette for the checkbox component and design system

export const colors = {
  // Primary colors
  primary: {
    main: '#1976D2',        // Primary blue
    hover: 'rgba(25, 118, 210, 0.04)',
    focus: 'rgba(25, 118, 210, 0.3)',
  },
  
  // Secondary colors  
  secondary: {
    main: '#6930CA',        // Purple
    hover: 'rgba(105, 48, 202, 0.04)',
    focus: 'rgba(105, 48, 202, 0.3)',
  },
  
  // Error colors
  error: {
    main: '#D32F2F',        // Red
    hover: 'rgba(211, 47, 47, 0.04)',
    focus: 'rgba(211, 47, 47, 0.3)',
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
    hover: 'rgba(0, 0, 0, 0.04)',
    focus: 'rgba(0, 0, 0, 0.12)',
    border: 'rgba(0, 0, 0, 0.56)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  
  // Background colors
  background: {
    white: '#FFFFFF',
  },
} as const;

// Export individual color types for TypeScript
export type ColorVariant = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
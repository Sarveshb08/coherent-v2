// Main design tokens index file
// Re-exports all design tokens for easy import

export * from './colors';
export * from './sizes';

// Combined types for convenience
export interface CheckboxVariant {
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
  size: 'small' | 'medium' | 'large';
}

// TextField variant types
export interface TextFieldVariant {
  variant: 'standard' | 'filled' | 'outlined';
  size: 'small' | 'medium';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
}

export type TextFieldVariantType = 'standard' | 'filled' | 'outlined';
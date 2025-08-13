// Main design tokens index file
// Re-exports all design tokens for easy import

export * from './colors';
export * from './sizes';

// Type definitions for component variants
export type ColorVariant = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
export type SizeVariant = 'small' | 'medium' | 'large';
export type TextFieldSizeVariant = 'small' | 'medium';
export type TextFieldVariantType = 'outlined' | 'filled' | 'standard';


// Main design tokens index file
// Re-exports all design tokens for easy import

export * from './colors';
export * from './sizes';

// Combined types for convenience
export interface CheckboxVariant {
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
  size: 'small' | 'medium' | 'large';
}

// Button variant types
export interface ButtonVariant {
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary';
}

// TextField variant types
export interface TextFieldVariant {
  variant: 'standard' | 'filled' | 'outlined';
  size: 'small' | 'medium';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
}

export type TextFieldVariantType = 'standard' | 'filled' | 'outlined';

// Switch variant types
export interface SwitchVariant {
  color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
  size: 'small' | 'medium';
}

// Notification variant types
export interface NotificationProps {
  severity: 'error' | 'warning' | 'info' | 'success';
  variant: 'filled' | 'outlined' | 'standard';
  title: string;
  description?: string;
}
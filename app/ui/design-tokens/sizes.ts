// Size tokens extracted from Figma
// Defines the different sizes available for components

export const sizes = {
  small: {
    size: 20,              // 20x20px
    iconSize: 15,          // 15x15px icon
    focusRipple: 34,       // 34x34px focus ring
    padding: 9,            // 9px padding
  },
  medium: {
    size: 24,              // 24x24px  
    iconSize: 18,          // 18x18px icon
    focusRipple: 38,       // 38x38px focus ring
    padding: 9,            // 9px padding
  },
  large: {
    size: 28,              // 28x28px
    iconSize: 21,          // 21x21px icon  
    focusRipple: 42,       // 42x42px focus ring
    padding: 9,            // 9px padding
  },
} as const;

// TextField specific sizes from Figma
export const textFieldSizes = {
  small: {
    padding: '8px 12px',      // Small input padding
    labelPadding: '6px 12px 4px', // Small label padding when has value
    gap: '4.5px',             // Gap between label and input
    fontSize: '16px',         // Input text size
    labelFontSize: '12px',    // Label text size
    borderRadius: '6px',      // Border radius
  },
  medium: {
    padding: '16px 12px',     // Medium input padding  
    labelPadding: '9px 12px 8px', // Medium label padding when has value
    gap: '6px',               // Gap between label and input
    fontSize: '16px',         // Input text size
    labelFontSize: '12px',    // Label text size
    borderRadius: '6px',      // Border radius
  },
} as const;

export const spacing = {
  padding: 9,              // Standard padding around checkbox
  gap: 10,                 // Gap between elements
} as const;

export const borderRadius = {
  checkbox: 4,             // 4px border radius for checkbox
  focusRing: 100,          // 100px for circular focus ring
  textField: 6,            // 6px border radius for text fields
} as const;

// Stroke weights from Figma
export const strokeWeights = {
  default: 1,              // Default border
  focused: 2,              // Focused/active border
  error: 2,                // Error state border
} as const;

// Export size type for TypeScript
export type SizeVariant = 'small' | 'medium' | 'large';
export type TextFieldSizeVariant = 'small' | 'medium';
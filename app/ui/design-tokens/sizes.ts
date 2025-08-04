// Size tokens extracted from Figma
// Defines the different sizes available for the checkbox component

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

export const spacing = {
  padding: 9,              // Standard padding around checkbox
  gap: 10,                 // Gap between elements
} as const;

export const borderRadius = {
  checkbox: 4,             // 4px border radius for checkbox
  focusRing: 100,          // 100px for circular focus ring
} as const;

// Export size type for TypeScript
export type SizeVariant = 'small' | 'medium' | 'large';
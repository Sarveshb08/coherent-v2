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

// Notification component sizes from Figma
export const notificationSizes = {
  padding: '6px 16px',         // Main container padding
  iconPadding: '7px 12px 7px 0px', // Icon container padding
  textPadding: '8px 0px',      // Text container padding
  gap: '4px',                  // Gap between title and description
  borderRadius: '6px',         // Border radius
  iconSize: '22px',            // Icon size
} as const;

// Typography styles from Figma
export const notificationTypography = {
  title: {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '1.5em',
    letterSpacing: '0.9375%',
  },
  description: {
    fontFamily: 'Roboto',
    fontWeight: 400,          // Regular weight for description
    fontSize: '14px',
    lineHeight: '1.43em',
    letterSpacing: '1.21%',
  },
} as const;

// Switch specific sizes from Figma
export const switchSizes = {
  small: {
    track: {
      width: 40,              // 40px track width
      height: 24,             // 24px track height
    },
    knob: {
      size: 16,               // 16px knob diameter
      padding: 4,             // 4px padding around knob
      translateX: 16,         // 16px translate when checked
    },
    focusRipple: {
      size: 20,               // 20px focus ring
      offset: 2,              // 2px offset from knob
    },
  },
  medium: {
    track: {
      width: 58,              // 58px track width  
      height: 38,             // 38px track height
    },
    knob: {
      size: 20,               // 20px knob diameter
      padding: 9,             // 9px padding around knob
      translateX: 20,         // 20px translate when checked
    },
    focusRipple: {
      size: 34,               // 34px focus ring
      offset: 2,              // 2px offset from knob
    },
  },
} as const;

// Switch transition timing
export const switchTransitions = {
  duration: 150,              // 150ms transition duration
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)', // Material Design easing
} as const;

// Export size type for TypeScript
export type SizeVariant = 'small' | 'medium' | 'large';
export type TextFieldSizeVariant = 'small' | 'medium';
export type SwitchSizeVariant = 'small' | 'medium';
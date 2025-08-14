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

// Component label typography from Figma
export const labelTypography = {
  fontSize: '14px',        // Label text size for form controls
  fontWeight: 500,         // Label font weight
  fontFamily: 'Roboto',    // Font family
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

// Stepper component sizes and typography from Figma
export const stepperSizes = {
  iconSize: 24,                // Step icon diameter
  connectorHeight: 1,          // Horizontal connector height
  connectorWidth: 1,           // Vertical connector width
  minConnectorHeight: 24,      // Minimum vertical connector height
  labelGap: 8,                 // Gap between icon and label (left alignment)
  verticalGap: 16,             // Gap between icon and label (center alignment)
} as const;

export const stepperTypography = {
  // Step number typography: stepper/num_typo from Figma
  stepNumber: {
    fontFamily: '"Proxima Nova", Arial, sans-serif',
    fontWeight: 700,           // Bold
    fontSize: '18px',
    lineHeight: '100%',        // lineHeight: 100 from Figma
  },
  // Step label typography
  stepLabel: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    lineHeight: 1.57,          // typography/subtitle2 lineHeight
    fontWeightActive: 500,     // Medium for active/completed
    fontWeightInactive: 400,   // Regular for inactive
  },
  // Optional text typography  
  optionalText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '12px',
    fontWeight: 400,           // Regular
    lineHeight: 1.66,          // typography/caption lineHeight
    marginTop: '2px',          // Small gap above optional text
  },
} as const;

// Tabs-specific sizes from Figma
export const tabsSizes = {
  minHeight: 48,               // Standard tab height
  indicatorHeight: 2,          // Active tab indicator height
  padding: '12px 16px',        // Tab padding
  scrollButtonWidth: 40,       // Scroll button width
  iconSize: 24,                // Icon size in tabs
  gap: 8,                      // Gap between icon and label
} as const;

// Tabs typography from Figma  
export const tabsTypography = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: '14px',            // Tab label font size
  fontWeight: 500,             // Medium for labels
  lineHeight: 1.75,            // Line height for readability
  textTransform: 'none' as const, // No uppercase transformation
} as const;

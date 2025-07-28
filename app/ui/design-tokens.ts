/**
 * Design tokens extracted from Figma design
 * File: MUI-based design system, Node: 223:9876 (Final_demo)
 */

export const designTokens = {
  // Typography
  typography: {
    fontFamily: {
      primary: 'DM Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    fontSize: {
      label: '14px',        // Labels and input text
      radioLabel: '12px',   // Radio button labels
    },
    fontWeight: {
      bold: 700,           // Labels
      medium: 500,         // Input text and radio labels
    },
    lineHeight: {
      normal: '1.4',       // 1.4em from Figma
    },
  },

  // Colors
  colors: {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',    // Primary text color
      placeholder: '#A6A7B0',            // Placeholder text color
    },
    border: {
      default: '#A6A7B0',                // Input border color
    },
    radio: {
      selected: '#6930CA',               // Selected radio button
      unselected: 'rgba(0, 0, 0, 0.6)', // Unselected radio button
    },
    background: {
      white: '#FFFFFF',                  // Form background
    },
  },

  // Spacing
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '25px',
    xxl: '30px',
  },

  // Border radius
  borderRadius: {
    input: '8px',          // Input fields border radius
    radio: '100px',        // Radio button border radius
  },

  // Layout dimensions
  layout: {
    inputHeight: '48px',         // Standard input height
    textareaHeight: '122px',     // Textarea height for address
    formWidth: '469px',          // Form container width
    gap: {
      fieldGroup: '12px',        // Gap between label and input
      formFields: '20px',        // Gap between form field groups
    },
  },

  // Component specific tokens
  components: {
    input: {
      padding: '16px',
      border: '1px solid #A6A7B0',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.87)',
      placeholderColor: '#A6A7B0',
    },
    label: {
      fontSize: '14px',
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.87)',
      marginBottom: '12px',
    },
    radio: {
      size: '20px',
      gap: '39.14px', // Gap between radio and label based on Figma
      labelFontSize: '12px',
      labelFontWeight: 500,
    },
  },
} as const;

// Tailwind CSS classes derived from design tokens
export const tailwindClasses = {
  label: 'text-sm font-bold text-gray-900 mb-3',
  input: 'w-full px-4 py-4 text-sm font-medium border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 placeholder-gray-400',
  textarea: 'w-full px-4 py-3 text-sm font-medium border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 placeholder-gray-400 resize-none',
  radioGroup: 'flex items-center gap-8',
  radioItem: 'flex items-center gap-2',
  radioInput: 'w-5 h-5 text-purple-600 border-gray-400 focus:ring-purple-600',
  radioLabel: 'text-xs font-medium text-gray-900',
  formContainer: 'max-w-lg mx-auto bg-white p-5',
  fieldGroup: 'mb-5',
} as const;
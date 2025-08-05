# TextField Component

A customizable TextField component based on Material UI with design tokens extracted from Figma. This component provides consistent styling and behavior across the design system.

## Features

- **Three Variants**: Standard, Filled, and Outlined
- **Two Sizes**: Small and Medium
- **Multiple States**: Enabled, Focused, Hovered, Disabled, Error
- **Design Token Integration**: Uses centralized design tokens for colors, spacing, and typography
- **TypeScript Support**: Fully typed with proper interfaces
- **Accessibility**: Built on Material-UI foundation with proper ARIA support

## Design Tokens

The component uses the following design tokens from Figma:

### Colors
- **Primary**: `#461E96` (Purple from Figma)
- **Error**: `#D92C2C` (Error red from Figma)
- **Default Border**: `#6930CA` (Secondary purple)
- **Text Colors**: Various opacity levels of black for different states
- **Background**: Filled variant uses `rgba(0, 0, 0, 0.06)`

### Typography
- **Font Family**: Roboto
- **Input Text**: 16px
- **Label Text**: 12px when shrunk

### Spacing & Sizing
- **Small**: 8px padding, 4.5px gap
- **Medium**: 16px padding, 6px gap  
- **Border Radius**: 6px
- **Border Width**: 1px default, 2px focused/error

## Usage

```tsx
import { TextField } from '@/ui/components/TextField';

// Basic usage
<TextField
  label="Email"
  placeholder="Enter your email"
/>

// With different variants
<TextField
  variant="filled"
  label="Filled TextField"
/>

<TextField
  variant="outlined"
  label="Outlined TextField"
/>

<TextField
  variant="standard"
  label="Standard TextField"
/>

// Different sizes
<TextField
  size="small"
  label="Small TextField"
/>

<TextField
  size="medium"
  label="Medium TextField"
/>

// Error state
<TextField
  error
  label="Email"
  helperText="Please enter a valid email"
/>

// Disabled state
<TextField
  disabled
  label="Disabled Field"
  value="Cannot edit this"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'standard' \| 'filled' \| 'outlined'` | `'outlined'` | The visual variant of the TextField |
| `size` | `'small' \| 'medium'` | `'medium'` | The size of the TextField |
| `color` | `ColorVariant` | `'primary'` | The color theme of the TextField |
| `label` | `string` | - | Label text for the TextField |
| `placeholder` | `string` | - | Placeholder text |
| `helperText` | `string` | - | Helper text displayed below the field |
| `error` | `boolean` | `false` | Whether the field is in error state |
| `disabled` | `boolean` | `false` | Whether the field is disabled |
| `fullWidth` | `boolean` | `false` | Whether the field should take full width |

All other Material-UI TextField props are also supported.

## States

### Enabled
The default state with normal colors and interactions.

### Focused
When the field is focused, it shows the primary color accent and elevates the label.

### Hovered
Subtle hover effects on borders and backgrounds.

### Error
Red coloring for borders, labels, and helper text.

### Disabled
Muted colors and no interaction.

## Variants

### Standard
Traditional underline style with minimal visual weight.

### Filled
Filled background with underline, good for forms on colored backgrounds.

### Outlined  
Full border outline, most prominent and clear visual hierarchy.

## Accessibility

- Proper label association
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management
- Error state announcements

## Storybook

View all variants and states in Storybook:
- Default configurations
- All variant combinations
- Size comparisons
- State demonstrations
- Complete showcase
# Switch Component

A customizable toggle switch component based on the Figma design system.

## Features

- **Multiple color variants**: primary, secondary, error, warning, info, success, default
- **Two sizes**: small (40×24px) and medium (58×38px)
- **Multiple states**: enabled, hovered, focused, disabled
- **Accessibility**: Full keyboard navigation and screen reader support
- **Smooth transitions**: Material Design motion specifications

## Usage

```tsx
import { Switch } from '@/app/ui/components';

// Basic usage
<Switch />

// With label
<Switch label="Enable notifications" />

// Controlled component
<Switch 
  checked={isEnabled}
  onChange={(event, checked) => setIsEnabled(checked)}
/>

// Different variants
<Switch color="primary" size="medium" />
<Switch color="error" size="small" />
<Switch color="success" disabled />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `ColorVariant` | `'primary'` | Color variant of the switch |
| `size` | `'small' \| 'medium'` | `'medium'` | Size variant of the switch |
| `checked` | `boolean` | `false` | Whether the switch is checked |
| `onChange` | `(event, checked) => void` | - | Callback when state changes |
| `disabled` | `boolean` | `false` | Whether the switch is disabled |
| `label` | `string` | - | Optional label text |
| `className` | `string` | - | Additional CSS classes |
| `inputProps` | `object` | - | Props passed to input element |

## Color Variants

- `primary` - Main brand color
- `secondary` - Secondary brand color  
- `error` - Error/danger state
- `warning` - Warning/caution state
- `info` - Information state
- `success` - Success/confirmation state
- `default` - Neutral gray

## Sizes

- `small` - 40×24px track with 16px knob
- `medium` - 58×38px track with 20px knob

## Accessibility

- Full keyboard navigation support
- Screen reader compatible
- Focus indicators
- Proper ARIA attributes
- High contrast support

## Design System

This component follows the Coherent v2 design system specifications and uses design tokens for consistent theming across the application.
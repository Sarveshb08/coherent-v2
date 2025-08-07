# Button Component

A reusable Button component for the Coherent-v2 design system that supports multiple variants, sizes, and states.

## Features

- **Variants**: Primary and secondary button styles
- **Colors**: Support for all design system colors (primary, secondary, error, warning, info, success, default)
- **Sizes**: Small, medium, and large sizing options
- **States**: Normal, hover, focus, active, and disabled states
- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsive**: Adapts to different screen sizes
- **TypeScript**: Fully typed with comprehensive prop interfaces

## Usage

```tsx
import { Button } from '@/app/ui/components';

// Primary button (default)
<Button onClick={handleClick}>
  Click me
</Button>

// Secondary button
<Button variant="secondary" color="primary">
  Secondary Action
</Button>

// Different sizes
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>

// Different colors
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="error">Error</Button>
<Button color="warning">Warning</Button>
<Button color="info">Info</Button>
<Button color="success">Success</Button>

// Disabled state
<Button disabled>Disabled Button</Button>

// Submit button for forms
<Button type="submit" color="primary">
  Submit Form
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `ColorVariant` | `'primary'` | The color variant of the button |
| `size` | `SizeVariant` | `'medium'` | The size variant of the button |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | The style variant of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `children` | `React.ReactNode` | - | The content of the button |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Click handler |
| `className` | `string` | - | Additional CSS class names |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |
| `aria-label` | `string` | - | Accessible label for screen readers |

## Accessibility

- Full keyboard navigation support
- Focus indicators that meet WCAG guidelines
- Screen reader compatibility
- Proper ARIA attributes
- Disabled state handling

## Design Tokens

The Button component uses the following design tokens:

- **Colors**: From `colors` design tokens for consistent theming
- **Sizes**: Custom size mappings for padding, font size, and dimensions
- **Typography**: Roboto font family with appropriate font weights
- **Border Radius**: Responsive border radius based on size
- **Transitions**: Smooth hover and focus transitions
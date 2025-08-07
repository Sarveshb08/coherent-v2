# Progress Component

A customizable progress indicator component based on Material UI LinearProgress with design tokens from Figma.

## Features

- **Three type variants**: Determinate (shows specific progress), Indeterminate (continuous animation), and Buffer (buffering animation with segments)
- **Three color variants**: Primary (#1976D2), Secondary (#9C27B0), and Inherit (uses current text color)
- **Optional label support**: Shows percentage values or custom text
- **Consistent sizing**: 4px height with 200px default width as specified in the design
- **Fully accessible**: Proper ARIA attributes and semantic HTML
- **TypeScript support**: Complete type definitions

## Usage

```tsx
import { Progress } from '@/app/ui/components';

// Basic determinate progress
<Progress type="determinate" value={50} />

// With label showing percentage
<Progress type="determinate" value={75} showLabel />

// Indeterminate progress
<Progress type="indeterminate" color="secondary" />

// Buffer progress
<Progress type="buffer" value={60} valueBuffer={80} />

// Custom label
<Progress type="determinate" value={30} showLabel label="Loading..." />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'determinate' \| 'indeterminate' \| 'buffer'` | `'determinate'` | The type of progress indicator |
| `color` | `'primary' \| 'secondary' \| 'inherit'` | `'primary'` | The color variant |
| `value` | `number` | `0` | Progress value (0-100) for determinate type |
| `valueBuffer` | `number` | - | Buffer progress value (0-100) for buffer type |
| `showLabel` | `boolean` | `false` | Whether to show progress label |
| `label` | `string` | - | Custom label text |
| `width` | `string \| number` | `'200px'` | Custom width for progress bar |
| `className` | `string` | - | Additional CSS classes |

## Design Tokens

The component uses the following design tokens:

- **Colors**: From `colors.progress` design token system
- **Sizing**: 4px height, 200px default width
- **Typography**: Material UI Typography component for labels

## Accessibility

- Uses semantic `progressbar` role
- Includes proper `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes
- Supports screen readers with meaningful labels
# Checkbox Component

A customizable checkbox component built with TypeScript, Material UI, and Tailwind CSS, following the Figma design system specifications.

## Features

- **7 Color Variants**: Primary, Secondary, Error, Warning, Info, Success, Default
- **3 Size Variants**: Small (20px), Medium (24px), Large (28px)
- **Multiple States**: Unchecked, Checked, Indeterminate, Disabled
- **Accessibility**: Full ARIA support through Material UI
- **TypeScript**: Complete type safety
- **Design Tokens**: Consistent styling system

## Usage

### Basic Usage

```tsx
import { Checkbox } from './app/ui/components/Checkbox';

// Simple checkbox
<Checkbox />

// With label
<Checkbox label="Accept terms and conditions" />

// Different colors
<Checkbox color="primary" checked />
<Checkbox color="secondary" checked />
<Checkbox color="error" checked />

// Different sizes
<Checkbox size="small" checked />
<Checkbox size="medium" checked />
<Checkbox size="large" checked />

// States
<Checkbox checked />
<Checkbox indeterminate />
<Checkbox disabled />
```

### Advanced Usage

```tsx
import { Checkbox } from './app/ui/components/Checkbox';
import { useState } from 'react';

function MyForm() {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  return (
    <div>
      <Checkbox
        color="primary"
        size="medium"
        checked={checked}
        indeterminate={indeterminate}
        onChange={(e) => setChecked(e.target.checked)}
        label="Newsletter subscription"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'primary' \| 'secondary' \| 'error' \| 'warning' \| 'info' \| 'success' \| 'default'` | `'primary'` | The color variant of the checkbox |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size variant of the checkbox |
| `checked` | `boolean` | `false` | Whether the checkbox is checked |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in an indeterminate state |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `label` | `string` | - | Optional label text for the checkbox |
| `className` | `string` | - | Additional CSS classes |
| `onChange` | `(event: ChangeEvent<HTMLInputElement>) => void` | - | Callback fired when the state is changed |

## Design Tokens

The component uses design tokens for consistent styling:

### Colors
- Primary: `#1976D2`
- Secondary: `#6930CA`
- Error: `#D32F2F`
- Warning: `#EF6C00`
- Info: `#0288D1`
- Success: `#2E7D32`
- Default: `#6B6C7B`

### Sizes
- Small: 20×20px checkbox, 15×15px icon
- Medium: 24×24px checkbox, 18×18px icon
- Large: 28×28px checkbox, 21×21px icon

## Storybook

View all variants and interact with the component in Storybook:

```bash
npm run storybook
```

Navigate to `Components > Checkbox` to see all available stories and variants.
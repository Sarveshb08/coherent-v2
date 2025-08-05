# RadioGroup Component

A comprehensive radio button group component built with Material-UI and styled to match the Figma design system specifications.

## Features

- **Multiple Sizes**: Small (20px), Medium (24px), Large (28px)
- **Color Variants**: Primary, Secondary, Error, Warning, Info, Success, Default
- **States**: Enabled, Hovered, Focused, Disabled
- **Accessibility**: Full ARIA support and keyboard navigation
- **Flexible Layout**: Horizontal or vertical arrangement
- **Form Integration**: Works with form libraries and validation

## Usage

### Basic Example

```tsx
import { RadioGroup } from '@/app/ui/components/RadioGroup';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function MyComponent() {
  const [value, setValue] = useState('option1');
  
  return (
    <RadioGroup
      label="Choose an option"
      options={options}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
    />
  );
}
```

### Different Sizes

```tsx
// Small
<RadioGroup options={options} size="small" />

// Medium (default)
<RadioGroup options={options} size="medium" />

// Large
<RadioGroup options={options} size="large" />
```

### Color Variants

```tsx
// Primary (default)
<RadioGroup options={options} color="primary" />

// Secondary
<RadioGroup options={options} color="secondary" />

// Error
<RadioGroup options={options} color="error" />

// Warning
<RadioGroup options={options} color="warning" />

// Info
<RadioGroup options={options} color="info" />

// Success
<RadioGroup options={options} color="success" />
```

### Horizontal Layout

```tsx
<RadioGroup
  options={options}
  direction="row"
  label="Choose an option"
/>
```

### With Error State

```tsx
<RadioGroup
  options={options}
  label="Required Field"
  required
  error={!value}
  helperText={!value ? "Please select an option" : ""}
/>
```

### Disabled State

```tsx
// Disable entire group
<RadioGroup options={options} disabled />

// Disable specific options
const optionsWithDisabled = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2', disabled: true },
  { value: 'option3', label: 'Option 3' },
];

<RadioGroup options={optionsWithDisabled} />
```

### Individual Radio Component

You can also use the individual Radio component:

```tsx
import { Radio } from '@/app/ui/components/RadioGroup';

<Radio
  value="option1"
  label="Option 1"
  color="primary"
  size="medium"
  checked={selectedValue === 'option1'}
  onChange={handleChange}
/>
```

## Props

### RadioGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `RadioOption[]` | - | Array of radio options |
| `color` | `ColorVariant` | `'primary'` | Color variant |
| `size` | `RadioSizeVariant` | `'medium'` | Size variant |
| `label` | `string` | - | Label for the radio group |
| `helperText` | `string` | - | Helper text below the group |
| `error` | `boolean` | `false` | Error state |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required field indicator |
| `direction` | `'row' \| 'column'` | `'column'` | Layout direction |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Default value for uncontrolled |
| `onChange` | `function` | - | Change handler |

### RadioOption Interface

```tsx
interface RadioOption {
  value: string;           // The value of the option
  label: string;           // Display label
  disabled?: boolean;      // Whether this option is disabled
  radioProps?: Partial<RadioProps>; // Additional props for the Radio
}
```

### Radio Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `ColorVariant` | `'primary'` | Color variant |
| `size` | `RadioSizeVariant` | `'medium'` | Size variant |
| `label` | `string` | - | Label for the radio |
| `value` | `any` | - | The value of the radio |
| `checked` | `boolean` | - | Checked state |
| `disabled` | `boolean` | `false` | Disabled state |
| `onChange` | `function` | - | Change handler |

## Design Specifications

Based on the Figma design system:

### Sizes
- **Small**: 20×20px radio, 34px focus ring
- **Medium**: 24×24px radio, 38px focus ring  
- **Large**: 28×28px radio, 42px focus ring

### Colors
- **Primary**: `#1976D2`
- **Secondary**: `#9C27B0`
- **Error**: `#D32F2F`
- **Warning**: `#EF6C00`
- **Info**: `#0288D1`
- **Success**: `#2E7D32`

### States
- **Hover**: Background with 4% opacity of the main color
- **Focus**: Ring with 30% opacity of the main color
- **Disabled**: 38% opacity for both border and fill

## Accessibility

- Full keyboard navigation support
- ARIA attributes for screen readers
- Focus management and visual indicators
- Semantic HTML structure with proper labeling

## Browser Support

Compatible with all modern browsers that support:
- CSS Grid and Flexbox
- CSS Custom Properties
- ES6+ JavaScript features
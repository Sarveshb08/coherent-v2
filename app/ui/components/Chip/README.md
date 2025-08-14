# Chip Component

A customizable Chip component built with Material-UI and design tokens from Figma. Chips represent complex entities in small blocks, such as contacts, tags, or categories.

## Features

- **Two variants**: `filled` and `outlined`
- **Multiple colors**: `primary`, `secondary`, `error`, `warning`, `info`, `success`, `default`
- **Two sizes**: `small` and `medium`
- **Avatar support**: Display profile pictures or initials
- **Icon support**: Display icons alongside labels
- **Delete functionality**: Optional delete button with customizable icon
- **Full accessibility**: Keyboard navigation and screen reader support
- **Design system integration**: Uses design tokens from Figma for consistent styling

## Usage

### Basic Chip

```tsx
import { Chip } from '@/app/ui/components';

<Chip label="Basic Chip" />
```

### Variants

```tsx
// Filled (default)
<Chip label="Filled Chip" variant="filled" />

// Outlined
<Chip label="Outlined Chip" variant="outlined" />
```

### Colors

```tsx
<Chip label="Primary" color="primary" />
<Chip label="Secondary" color="secondary" />
<Chip label="Error" color="error" />
<Chip label="Warning" color="warning" />
<Chip label="Info" color="info" />
<Chip label="Success" color="success" />
<Chip label="Default" color="default" />
```

### Sizes

```tsx
<Chip label="Small" size="small" />
<Chip label="Medium" size="medium" />
```

### With Avatar

```tsx
import { Avatar } from '@mui/material';

<Chip 
  label="John Doe" 
  avatar={<Avatar>JD</Avatar>} 
/>

<Chip 
  label="Jane Smith" 
  avatar={<Avatar src="/path/to/avatar.jpg" />} 
/>
```

### With Icon

```tsx
import { Home } from '@mui/icons-material';

<Chip 
  label="Home" 
  icon={<Home />} 
/>
```

### Deletable

```tsx
<Chip 
  label="Deletable" 
  onDelete={() => console.log('Delete clicked')} 
/>

// Custom delete icon
import { Close } from '@mui/icons-material';

<Chip 
  label="Custom Delete" 
  onDelete={() => console.log('Delete clicked')} 
  deleteIcon={<Close />}
/>
```

### Clickable

```tsx
<Chip 
  label="Clickable" 
  clickable
  onClick={() => console.log('Chip clicked')} 
/>
```

### Disabled

```tsx
<Chip 
  label="Disabled" 
  disabled 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `React.ReactNode` | **Required** | The content of the chip label |
| `variant` | `'filled' \| 'outlined'` | `'filled'` | The variant to use |
| `color` | `'primary' \| 'secondary' \| 'error' \| 'warning' \| 'info' \| 'success' \| 'default'` | `'secondary'` | The color of the chip |
| `size` | `'small' \| 'medium'` | `'medium'` | The size of the chip |
| `avatar` | `React.ReactElement` | `undefined` | Avatar element to display |
| `icon` | `React.ReactElement` | `undefined` | Icon element to display |
| `onDelete` | `React.EventHandler<any>` | `undefined` | Callback fired when delete icon is clicked |
| `deleteIcon` | `React.ReactElement` | `undefined` | Custom delete icon element |
| `disabled` | `boolean` | `false` | If true, the chip will be disabled |
| `clickable` | `boolean` | `false` | If true, the chip will appear clickable |
| `onClick` | `React.EventHandler<any>` | `undefined` | Callback fired when chip is clicked |

## Design Tokens

The component uses the following design tokens from Figma:

### Typography
- **Font Family**: Roboto
- **Font Size**: 13px
- **Font Weight**: 400 (Regular)
- **Line Height**: 18px

### Colors
- **Secondary Main**: #6930ca
- **Secondary Hover**: #6930ca0a
- **Secondary Focus**: #6930ca4d

### Sizes
- **Small**: 24px height, 4px-12px padding
- **Medium**: 32px height, 6px-16px padding

### Avatar Sizes
- **Small**: 18px diameter, 10px font
- **Medium**: 24px diameter, 12px font

## Accessibility

The Chip component includes:

- Proper ARIA attributes for screen readers
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Semantic HTML structure

## Storybook

View all variations and interactive examples in Storybook under `Components/Chip`.

## Design Reference

Based on the Figma design: [Coherent-v2 Chip Component](https://www.figma.com/design/qsvxjZOgpBMl3cHsEzPe0L/Coherent-v2-design-system?node-id=12080-316994)
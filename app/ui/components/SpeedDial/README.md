# SpeedDial Component

A reusable SpeedDial component that follows the Material Design specifications and integrates with the Coherent-v2 design system.

## Features

- **Multiple Directions**: Supports up, down, left, and right directions
- **Customizable Actions**: Configurable action items with icons and tooltips
- **Accessible**: Built-in ARIA support and keyboard navigation
- **Themeable**: Integrates with the design system theme
- **TypeScript**: Full TypeScript support with proper type definitions

## Usage

### Basic Example

```tsx
import React from 'react';
import { SpeedDial } from '@/ui/components/SpeedDial';
import { ContentCopy, Save, Print, Share } from '@mui/icons-material';

export const BasicSpeedDial = () => {
  const actions = [
    {
      icon: <ContentCopy />,
      name: 'Copy',
      onClick: () => console.log('Copy clicked')
    },
    {
      icon: <Save />,
      name: 'Save',
      onClick: () => console.log('Save clicked')
    },
    {
      icon: <Print />,
      name: 'Print',
      onClick: () => console.log('Print clicked')
    },
    {
      icon: <Share />,
      name: 'Share',
      onClick: () => console.log('Share clicked')
    }
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      direction="up"
      actions={actions}
    />
  );
};
```

### Controlled State

```tsx
import React, { useState } from 'react';
import { SpeedDial } from '@/ui/components/SpeedDial';
import { Add, Edit } from '@mui/icons-material';

export const ControlledSpeedDial = () => {
  const [open, setOpen] = useState(false);

  return (
    <SpeedDial
      ariaLabel="Controlled SpeedDial"
      direction="up"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      actions={[
        {
          icon: <Edit />,
          name: 'Edit',
          onClick: () => {
            console.log('Edit clicked');
            setOpen(false);
          }
        }
      ]}
    />
  );
};
```

### Different Directions

```tsx
// Up direction (default)
<SpeedDial direction="up" ariaLabel="Up" actions={actions} />

// Down direction
<SpeedDial direction="down" ariaLabel="Down" actions={actions} />

// Left direction
<SpeedDial direction="left" ariaLabel="Left" actions={actions} />

// Right direction
<SpeedDial direction="right" ariaLabel="Right" actions={actions} />
```

## Props

### SpeedDial Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'` | Direction for the speed dial to open |
| `icon` | `React.ReactElement` | `<AddIcon />` | Icon for the main FAB when closed |
| `openIcon` | `React.ReactElement` | `undefined` | Icon for the main FAB when open |
| `actions` | `SpeedDialActionConfig[]` | `[]` | Array of action configurations |
| `ariaLabel` | `string` | required | ARIA label for the speed dial |
| `open` | `boolean` | `undefined` | Whether the speed dial is open (controlled) |
| `onOpen` | `() => void` | `undefined` | Callback when the speed dial opens |
| `onClose` | `() => void` | `undefined` | Callback when the speed dial closes |
| `className` | `string` | `undefined` | Additional CSS classes |

### SpeedDialActionConfig

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ReactElement` | required | Icon component for the action |
| `name` | `string` | required | Name/identifier for the action |
| `onClick` | `() => void` | `undefined` | Click handler for the action |
| `tooltipTitle` | `string` | `name` | Tooltip text for the action |
| `tooltipOpen` | `boolean` | `false` | Whether the tooltip is open by default |

## Styling

The SpeedDial component uses the theme configuration for consistent styling:

- **Main FAB**: Large size (56px), Primary color
- **Action FABs**: Small size (40px), White background with shadows
- **Spacing**: Configured spacing between actions
- **Animations**: Smooth Material Design animations

## Accessibility

- Built-in ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## Design Tokens

The component uses the following design tokens:

```typescript
speedDialSizes: {
  main: {
    size: 56,        // Main FAB size
    iconSize: 24,    // Main FAB icon size
  },
  action: {
    size: 40,        // Action FAB size
    iconSize: 18,    // Action FAB icon size
  },
  spacing: {
    actionSpacing: 8,     // Space between actions
    mainToAction: 16,     // Distance from main to first action
  }
}
```
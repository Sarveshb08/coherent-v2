# Tabs Component

A customizable Tabs component based on Material UI with design tokens extracted from Figma. This component provides consistent styling and behavior across the design system.

## Features

- **Multiple Orientations**: Horizontal and vertical layouts
- **Three Variants**: Standard, Scrollable, and Full Width
- **Tab States**: Active, hover, focus, and disabled states
- **Scroll Configuration**: Automatic, forced, or disabled scroll buttons
- **Icon Support**: Optional icons with customizable positioning
- **Responsive**: Mobile-friendly with scroll button controls
- **Design Token Integration**: Uses centralized design tokens for colors, spacing, and typography
- **TypeScript Support**: Fully typed with proper interfaces
- **Accessibility**: Built on Material-UI foundation with proper ARIA support

## Usage

```tsx
import { Tabs } from '@/app/ui/components';

// Basic tabs
const basicTabs = [
  { label: 'Tab 1', value: 'tab1', content: <div>Content 1</div> },
  { label: 'Tab 2', value: 'tab2', content: <div>Content 2</div> },
  { label: 'Tab 3', value: 'tab3', content: <div>Content 3</div> },
];

<Tabs
  tabs={basicTabs}
  value={currentTab}
  onChange={(event, newValue) => setCurrentTab(newValue)}
/>

// Scrollable tabs with icons
import { HomeIcon, FavoriteIcon, PersonIcon } from '@mui/icons-material';

const scrollableTabs = [
  { label: 'Home', value: 'home', icon: <HomeIcon />, content: <div>Home Content</div> },
  { label: 'Favorites', value: 'favorites', icon: <FavoriteIcon />, content: <div>Favorites</div> },
  { label: 'Profile', value: 'profile', icon: <PersonIcon />, content: <div>Profile</div> },
];

<Tabs
  tabs={scrollableTabs}
  variant="scrollable"
  scrollButtons="auto"
  value={currentTab}
  onChange={(event, newValue) => setCurrentTab(newValue)}
/>

// Vertical tabs
<Tabs
  tabs={basicTabs}
  orientation="vertical"
  value={currentTab}
  onChange={(event, newValue) => setCurrentTab(newValue)}
/>

// Full width tabs  
<Tabs
  tabs={basicTabs}
  variant="fullWidth"
  value={currentTab}
  onChange={(event, newValue) => setCurrentTab(newValue)}
/>

// Centered tabs
<Tabs
  tabs={basicTabs}
  centered
  value={currentTab}
  onChange={(event, newValue) => setCurrentTab(newValue)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabsData[]` | - | Array of tab configuration objects |
| `variant` | `'standard' \| 'scrollable' \| 'fullWidth'` | `'standard'` | The visual variant of the tabs |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the tabs |
| `centered` | `boolean` | `false` | Whether to center the tabs (horizontal only) |
| `scrollButtons` | `boolean \| 'auto'` | `'auto'` | Scroll buttons configuration for scrollable variant |
| `allowScrollButtonsMobile` | `boolean` | `false` | Show scroll buttons on mobile |
| `showPanels` | `boolean` | `true` | Whether to render tab panels |
| `value` | `string \| number` | - | Currently selected tab value |
| `onChange` | `function` | - | Callback when tab selection changes |
| `className` | `string` | - | Additional CSS classes |

### TabsData Interface

```tsx
interface TabsData {
  label: string;
  value: string | number;
  icon?: React.ReactElement;
  disabled?: boolean;
  content?: React.ReactNode;
}
```

All other Material-UI Tabs props are also supported.

## Variants

### Standard
The default variant with standard spacing and no scroll behavior.

### Scrollable
Enables horizontal or vertical scrolling when tabs exceed container width/height. Includes configurable scroll buttons.

### Full Width
Tabs expand to fill the full width of their container. Useful for mobile layouts.

## States

### Active
The currently selected tab with primary color accent and indicator.

### Hover
Subtle hover effects with background color changes.

### Focus
Keyboard focus indicators with proper accessibility support.

### Disabled
Muted colors and no interaction for disabled tabs.

## Design Tokens

The component uses the following design tokens from Figma:

### Colors
- **Active Text**: `#461E96` (Primary purple)
- **Inactive Text**: `rgba(0, 0, 0, 0.6)` (Secondary text)
- **Indicator**: `#461E96` (Primary purple)
- **Scroll Buttons**: `#6930CA` (Secondary purple)
- **Hover Background**: Primary hover states

### Typography
- **Font Family**: Roboto
- **Font Size**: 14px
- **Font Weight**: 500 (Medium) for labels, 600 (Semi-bold) for active
- **Line Height**: 1.75
- **Text Transform**: None (preserves original case)

### Spacing & Sizing
- **Tab Height**: 48px minimum
- **Padding**: 12px horizontal, 16px vertical
- **Indicator Height**: 2px
- **Icon Size**: 24px
- **Gap**: 8px between icon and text

## Accessibility

- Full keyboard navigation support (arrow keys, Enter, Space)
- Screen reader compatible with proper ARIA labels
- Focus indicators for keyboard users
- Proper tab-panel relationships
- Role and state announcements

## Implementation Approach

This component follows the **MUI-First Development Rules**:

1. **Leverages MUI's built-in capabilities**: Uses `variant`, `orientation`, `scrollButtons`, and `centered` props
2. **Theme-based customization**: All visual styling handled through theme overrides in `/app/ui/theme/overrides/Tabs.override.ts`
3. **Minimal component logic**: Only handles data transformation and configuration mapping
4. **Exact Figma compliance**: Colors, typography, and spacing match design specifications exactly

## Storybook

View all component variants and states in Storybook:

```bash
npm run storybook
```

The component includes comprehensive stories showing all orientations, variants, and interaction states to help with development and testing.

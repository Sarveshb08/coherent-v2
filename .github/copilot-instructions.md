# Design System Rules for Next.js Dashboard

This document outlines the design system structure and rules for integrating Figma designs using the Model Context Protocol.

## Design System Structure

### 1. Token Definitions

Design tokens are centralized in the `app/ui/design-tokens/` directory:

- **Colors**: `app/ui/design-tokens/colors.ts`
  ```typescript
  export const colors = {
    primary: {
      main: '#461E96',
      hover: 'rgba(70, 30, 150, 0.04)',
      focus: 'rgba(70, 30, 150, 0.3)',
      border: '#461E96',
      disabled: 'rgba(70, 30, 150, 0.38)',
    },
    // Additional color tokens...
  };
  ```

- **Sizes**: `app/ui/design-tokens/sizes.ts`
- **Index**: `app/ui/design-tokens/index.ts` (exports all tokens)

**Token Format**: TypeScript objects with semantic naming (primary, secondary, error, etc.) and state variants (main, hover, focus, disabled).

### 2. Component Library

Components are organized in `app/ui/components/` with the following structure:

```
app/ui/components/
├── index.ts (barrel exports)
├── Checkbox/
│   ├── Checkbox.tsx
│   ├── index.ts
│   ├── types.ts
│   └── README.md
├── Notification/
├── Switch/
└── TextField/
```

**Component Architecture**:
- Each component has its own directory with TypeScript types
- Components use MUI as the base library with custom styling
- Props are typed in separate `types.ts` files
- Each component includes a README.md for documentation

**Example Component Pattern**:
```typescript
import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import clsx from 'clsx';
import { CheckboxProps } from './types';

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  ...props
}) => {
  // Component implementation
};
```

### 3. Frameworks & Libraries

**UI Framework**: React 18+ with TypeScript
**Styling Libraries**: 
- Material-UI (MUI) v7.2.0 for base components
- Tailwind CSS v3.4.17 for utility classes
- Emotion for styled components

**Build System**: 
- Next.js (latest) with Turbopack for development
- PostCSS for CSS processing
- TypeScript 5.7.3

**Package Manager**: pnpm with lockfile

### 4. Asset Management

**Static Assets**: Stored in `public/` directory
- Favicon: `public/favicon.ico`

**Asset References**: Use Next.js public folder for static assets
**Optimization**: Next.js built-in image optimization for web assets

### 5. Icon System

**Icons**: Using Heroicons React library (`@heroicons/react`)
```typescript
import { IconName } from '@heroicons/react/24/outline';
```

**Usage Pattern**: Import specific icons as React components
**Naming Convention**: Follow Heroicons naming conventions

### 6. Styling Approach

**CSS Methodology**: Combination of:
- Tailwind CSS utility classes for layout and spacing
- MUI theming system for component styling
- Emotion for styled components

**Global Styles**: `app/ui/global.css`
**Theme Configuration**: 
- `app/ui/theme/` directory contains theme configuration
- `ThemeProvider.tsx` wraps the application
- `augmentation.ts` extends MUI theme types

**Responsive Design**: 
- Tailwind responsive utilities
- MUI breakpoint system

**Theme Structure**:
```typescript
// app/ui/theme/ThemeProvider.tsx
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme } from './index';

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);
```

### 7. Project Structure

```
nextjs-dashboard/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── ui/                # UI system
│       ├── components/    # Reusable components
│       ├── design-tokens/ # Design tokens
│       ├── theme/         # Theme configuration
│       ├── fonts.ts       # Font definitions
│       └── global.css     # Global styles
├── public/                # Static assets
├── stories/               # Storybook stories
├── .github/              # GitHub configuration
└── configuration files   # Next.js, Tailwind, TypeScript configs
```

## Integration Guidelines

### When Converting Figma Designs

1. **Extract Design Tokens First**: 
   - Add new tokens to appropriate files in `design-tokens/`
   - Use semantic naming aligned with existing patterns

2. **Component Development**:
   - Create new components in `app/ui/components/ComponentName/`
   - Include TypeScript types, main component, barrel export, and README
   - Extend MUI components when possible

3. **Styling Priority**:
   - Use MUI theme system for component-specific styling
   - Use Tailwind for layout, spacing, and utilities
   - Avoid inline styles; prefer theme-based approaches

4. **Documentation**:
   - Create Storybook stories in `stories/` directory
   - Include component README with usage examples
   - Document any new design tokens

5. **Testing Integration**:
   - Ensure components work with existing theme
   - Test responsive behavior across breakpoints
   - Validate accessibility features

### Code Patterns

**Component Export Pattern**:
```typescript
// Component/index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './types';
```

**Theme Integration**:
```typescript
import { useTheme } from '@mui/material/styles';

const Component = () => {
  const theme = useTheme();
  // Use theme.palette, theme.spacing, etc.
};
```

**Responsive Design**:
```typescript
// Use Tailwind responsive utilities
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Content */}
</div>

// Or MUI breakpoints
sx={{
  width: { xs: '100%', md: '50%', lg: '33.33%' }
}}
```

This structure ensures consistent design implementation and maintainable code that aligns with Figma designs while leveraging the existing MUI and Tailwind ecosystem.

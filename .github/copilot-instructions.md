# Component Development Guidelines

## Overview
This repository is a design system built with Next.js, TypeScript, Material-UI (MUI), and follows a structured component development workflow.

## Component Development Workflow

### 1. Design Tokens First
When creating or modifying components, always start with design tokens:
- Add new tokens to `/app/ui/design-tokens/` (colors, sizes, etc.)
- Export tokens from `/app/ui/design-tokens/index.ts`
- Follow existing naming conventions

### 2. Theme Extension
If new theme properties are needed:
- Extend the theme in `/app/ui/theme/index.ts`
- Add custom theme properties following MUI theme structure
- Keep styling centralized in theme files

### 3. Type Augmentation
For TypeScript theme extensions:
- Update `/app/ui/theme/augmentation.ts`
- Properly extend MUI interfaces
- Ensure type safety across the component system

### 4. Component Structure
Follow this exact structure for all components:

```
ComponentName/
├── types.ts          # All prop type definitions
├── ComponentName.tsx # Component implementation
├── index.ts          # Exports (component + types)
└── README.md         # Component documentation
```

### 5. Type Definitions
- **ALWAYS** create separate `types.ts` files for prop definitions
- **NEVER** define prop types in component files
- Extend MUI component props when applicable
- Include comprehensive JSDoc comments

### 6. Component Implementation Guidelines

#### MUI Usage
- **ALWAYS** use MUI components as the foundation
- **NEVER** add style overrides in component files
- Use MUI's built-in theming system
- Leverage MUI's sx prop for dynamic styling

#### Style Overrides
- Add style overrides **ONLY** in `/app/ui/theme/index.ts`
- Use MUI's component override system
- Avoid inline styles or CSS modules
- If MUI fulfills requirements, use it as-is

#### Props and API Design
- Extend MUI component props using `extends`
- Add only necessary custom props
- Provide sensible defaults
- Include comprehensive prop documentation

## Example Component Implementation

```typescript
// types.ts
import { ButtonProps as MuiButtonProps } from '@mui/material';

export interface CustomButtonProps extends MuiButtonProps {
  /**
   * Custom variant for the button
   */
  customVariant?: 'primary' | 'secondary';
}

// CustomButton.tsx
import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { CustomButtonProps } from './types';

export const CustomButton: React.FC<CustomButtonProps> = ({
  customVariant = 'primary',
  ...props
}) => {
  return (
    <MuiButton
      variant={customVariant === 'primary' ? 'contained' : 'outlined'}
      {...props}
    />
  );
};

export default CustomButton;

// index.ts
export { CustomButton } from './CustomButton';
export { default } from './CustomButton';
export type { CustomButtonProps } from './types';
```

## Package Management
- **ALWAYS use pnpm** for package management
- Use `pnpm install`, `pnpm add`, `pnpm remove`
- Respect locked versions in `pnpm-lock.yaml`

## Code Quality
- Follow existing patterns and conventions
- Add comprehensive JSDoc comments
- Use consistent naming conventions
- Maintain proper import/export structure
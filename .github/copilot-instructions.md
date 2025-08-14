# GitHub Copilot Instructions

This file contains instructions for GitHub Copilot to help with code generation and development in this project.

## Project Context

This is a Next.js 14+ project using:
- TypeScript
- Material-UI (MUI) v5+ with custom theming
- Storybook for component development
- Tailwind CSS for utility styling
- React 18+

## Component Development Methodology

### MANDATORY: Analysis-First Approach

**BEFORE implementing any component, ALWAYS follow this sequence:**

#### STEP 1: ANALYZE DESIGN 
```
1. Use mcp_figma_dev_mod_get_variable_defs to extract exact design tokens
2. Use mcp_figma_dev_mod_get_image to get visual reference
3. Use mcp_figma_dev_mod_get_code to understand component structure
4. Document EXACT requirements (colors, spacing, typography, states)
```

#### STEP 2: EXTRACT AND ADD DESIGN TOKENS
```
1. Extract ALL color values, sizes, typography from Figma analysis
2. Add new tokens to /app/ui/design-tokens/colors.ts (for colors)
3. Add new tokens to /app/ui/design-tokens/sizes.ts (for spacing, typography, dimensions)
4. Update /app/ui/design-tokens/index.ts to export new tokens
5. NEVER use hardcoded values in theme overrides - ALWAYS use design tokens
```

#### STEP 3: ANALYZE MUI CAPABILITIES 
```
1. Search https://mui.com/material-ui/react-${component}/ for official MUI documentation
2. Use get_vscode_api to search MUI documentation for the target component
3. For GitHub Copilot agents: Refer to https://github.com/mui/material-ui/tree/v7.3.1/docs/data/material/components
4. Use semantic_search to find similar components in the codebase
5. Document what MUI provides out-of-the-box:
   - Default props and variants
   - Theme customization options
   - Built-in accessibility features
   - Styling override points
```

#### STEP 4: GAP ANALYSIS 
```
Create explicit comparison:
- What MUI provides: [list capabilities]
- What design requires: [list requirements]  
- Gaps to bridge: [minimal list of actual customizations needed]
- Implementation strategy: Theme override vs Custom component
```

#### STEP 5: MINIMAL IMPLEMENTATION 
```
1. Start with standard MUI component
2. Apply theme overrides using ONLY design tokens (never hardcoded values)
3. Only create custom components for gaps that theme cannot solve
4. Validate each change against design requirements
```

#### STEP 6: ORGANIZE THEME OVERRIDES
```
1. Create /app/ui/theme/overrides/ComponentName.override.ts
2. Import design tokens at top of override file
3. Use ONLY design tokens for all styling values (colors, sizes, typography)
4. Add all MUI component customizations in the override file
5. Import and reference in main theme/index.ts
6. Keep main theme file clean and organized
```

### MUI-First Development Rules

**NEVER create custom components when MUI theme can achieve the same result**

#### Theme Override Priority:
```typescript
1. FIRST: Try MUI theme component overrides
2. SECOND: Try MUI component props and variants
3. THIRD: Try styled() wrapper with minimal changes
4. LAST RESORT: Custom component implementation
```

### Design System Integration

#### Color Usage Rules:
```
- Extract exact hex values from Figma variables using mcp_figma_dev_mod_get_variable_defs
- Add extracted colors to /app/ui/design-tokens/colors.ts with semantic names
- Add extracted sizes/typography to /app/ui/design-tokens/sizes.ts
- Import and use ONLY design tokens in theme overrides, never hardcoded values
- Map to MUI theme palette (primary, secondary, success, error)
- Use semantic color names, not hex values in components
- Validate colors match design exactly
```

#### Component Structure:
```
/app/ui/components/ComponentName/
├── index.ts (exports only)
├── ComponentName.tsx (main component)
├── types.ts (TypeScript interfaces)
└── README.md (usage documentation)
```

#### Theme Override Organization:
```
For MUI component customizations:

1. Create /app/ui/theme/overrides/ComponentName.override.ts
2. Export component overrides and prop extensions
3. Import and reference in main theme/index.ts
4. Keep theme/index.ts clean - only imports and assembly

Example structure:
/app/ui/theme/
├── index.ts (main theme assembly)
├── augmentation.ts (global type extensions)
└── overrides/
    ├── TextField.override.ts
    ├── Button.override.ts
    └── ComponentName.override.ts

Each override file should contain:
- MUI component theme overrides
- Custom prop extensions (if needed)
- Component-specific design tokens
```

### Implementation Validation:
```
- Does it match Figma design exactly?
- Does it use MUI patterns correctly?
- Is it accessible by default?
- Is it maintainable and extensible?
```

## CRITICAL: Anti-Patterns to Avoid

❌ **DO NOT:**
- Rebuild functionality that MUI already provides
- Create custom components when theme overrides suffice
- Ignore MUI's theming system
- Apply wrong colors from misreading design
- Skip the analysis phase and jump to implementation
- Use hardcoded values in theme overrides
- **Add styling that is NOT explicitly shown in the Figma design**
- **Make assumptions about "standard" UI patterns not present in the design**

✅ **DO:**
- Always analyze MUI capabilities first
- Extract exact design token values from Figma
- Use ONLY design tokens for all styling in theme overrides
- Leverage MUI's accessibility features
- Create minimal, focused customizations
- Document decision rationale
- **Only style what is visually present in the Figma design**
- **Question any styling that feels like an assumption rather than design requirement**


# Component Implementation Guidelines

## MANDATORY: Analysis-First Approach

**BEFORE implementing any component, ALWAYS follow this sequence:**

### STEP 1: ANALYZE DESIGN 
1. Use `Figma-Dev-Mode-MCP-get_variable_defs` to extract exact design tokens
2. Use `Figma-Dev-Mode-MCP-get_image` to get visual reference  
3. Use `Figma-Dev-Mode-MCP-get_code` to understand component structure
4. **If Figma tools fail**: Document the failure and note tool unavailability in PR/comments
5. Document EXACT requirements (colors, spacing, typography, states)

### STEP 2: RESEARCH MUI CAPABILITIES
1. Use `github-mcp-server-search_code` to find MUI documentation in repo:mui/material-ui
2. Search for: `repo:mui/material-ui path:docs/data/material/components/{component-name}`
3. Document what MUI provides out-of-the-box:
   - Default props and variants
   - Theme customization options  
   - Built-in accessibility features
   - Styling override points

### STEP 3: GAP ANALYSIS
Create explicit comparison:
- **What MUI provides**: [list capabilities]
- **What design requires**: [list requirements from Figma]
- **Gaps to bridge**: [minimal list of actual customizations needed]
- **Implementation strategy**: Theme palette extension vs Theme override vs Custom component

### STEP 4: MINIMAL IMPLEMENTATION PLAN
1. **FIRST**: Try MUI theme palette extensions (colors, typography)
2. **SECOND**: Try MUI component theme overrides (only for gaps)
3. **THIRD**: Try styled() wrapper with minimal changes
4. **LAST RESORT**: Custom component implementation

## Color Implementation Rules

### Extract and Add Design Tokens
1. Extract ALL color values from Figma analysis
2. Add to `/app/ui/design-tokens/colors.ts` with semantic names
3. **NEVER use hardcoded values** in theme overrides
4. Map colors to MUI theme palette (primary, secondary, etc.)

### Extend Color Types  
1. Use theme augmentation in `/app/ui/theme/augmentation.ts`
2. Extend component color prop types to include custom colors
3. Example:
```typescript
declare module '@mui/material/ComponentName' {
  interface ComponentNamePropsColorOverrides {
    customColor: true;
  }
}
```

## Theme Override Organization

### Structure
```
/app/ui/theme/
├── index.ts (main theme assembly)
├── augmentation.ts (global type extensions)  
└── overrides/
    └── ComponentName.override.ts
```

### Override File Pattern
```typescript
import { Components } from '@mui/material/styles';
import { colors } from '../../design-tokens';

export const ComponentOverrides: Components['MuiComponent'] = {
  styleOverrides: {
    // Only override what MUI doesn't provide
  },
  defaultProps: {
    // Set sensible defaults
  },
};
```

## Critical Anti-Patterns

❌ **AVOID:**
- Rebuilding functionality MUI provides
- Complex size/spacing overrides when MUI handles it
- Hardcoded values instead of design tokens
- Skipping MUI documentation research
- Creating custom components when theme suffices

✅ **DO:**
- Leverage MUI's built-in capabilities first
- Use exact design token values from Figma
- Extend types for better customization
- Document tool failures when they occur
- Focus on bridging gaps, not rebuilding

## Documentation Requirements

- Note any tool unavailability in PR descriptions
- Attach actual Storybook screenshots demonstrating implementation
- Document decision rationale for approach chosen
- Include "bridge gap" analysis showing MUI vs Design requirements
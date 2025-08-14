import { Components } from '@mui/material/styles';
import { colors, chipTypography } from '../../design-tokens';

export const ChipOverrides: Components['MuiChip'] = {
  styleOverrides: {
    root: {
      // Use Figma typography specifications
      fontFamily: chipTypography.fontFamily,
      fontSize: chipTypography.fontSize,
      fontWeight: chipTypography.fontWeight,
      lineHeight: chipTypography.lineHeight,
    },
    
    // Only customize what MUI doesn't handle for secondary color hover/focus states
    filled: ({ theme, ownerState }) => ({
      ...(ownerState.color === 'secondary' && {
        // Use exact Figma color for hover state
        '&:hover': {
          backgroundColor: colors.secondary.main, // Keep main color on hover for filled
        },
        // Focus state with exact Figma color
        '&:focus': {
          backgroundColor: colors.secondary.main,
          boxShadow: `0 0 0 3px ${colors.secondary.focus}`, // #6930ca4d from Figma
        },
      }),
    }),
    
    outlined: ({ theme, ownerState }) => ({
      ...(ownerState.color === 'secondary' && {
        // Hover state for outlined variant
        '&:hover': {
          backgroundColor: colors.secondary.hover, // #6930ca0a from Figma
        },
        // Focus state for outlined variant
        '&:focus': {
          backgroundColor: colors.secondary.hover,
          boxShadow: `0 0 0 3px ${colors.secondary.focus}`, // #6930ca4d from Figma
        },
      }),
    }),
  },
  
  // Set sensible defaults
  defaultProps: {
    size: 'medium',
    variant: 'filled',
    color: 'secondary',
  },
};
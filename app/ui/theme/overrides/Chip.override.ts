import { Components } from '@mui/material/styles';
import { colors, chipSizes, chipTypography } from '../../design-tokens';

export const ChipOverrides: Components['MuiChip'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      // Base typography from Figma design tokens
      fontFamily: chipTypography.fontFamily,
      fontSize: chipTypography.fontSize,
      fontWeight: chipTypography.fontWeight,
      lineHeight: chipTypography.lineHeight,
      
      // Border radius
      borderRadius: '16px',
      
      // Size-specific overrides
      ...(ownerState.size === 'small' && {
        height: chipSizes.small.height,
        padding: chipSizes.small.padding,
        fontSize: chipSizes.small.fontSize,
        '& .MuiChip-avatar': {
          width: chipSizes.small.avatarSize,
          height: chipSizes.small.avatarSize,
          fontSize: '10px', // avatar/initialsSm from Figma
        },
        '& .MuiChip-deleteIcon': {
          width: chipSizes.small.deleteIconSize,
          height: chipSizes.small.deleteIconSize,
        },
      }),
      
      ...(ownerState.size === 'medium' && {
        height: chipSizes.medium.height,
        padding: chipSizes.medium.padding,
        fontSize: chipSizes.medium.fontSize,
        '& .MuiChip-avatar': {
          width: chipSizes.medium.avatarSize,
          height: chipSizes.medium.avatarSize,
          fontSize: '12px', // avatar/initialsMd from Figma
        },
        '& .MuiChip-deleteIcon': {
          width: chipSizes.medium.deleteIconSize,
          height: chipSizes.medium.deleteIconSize,
        },
      }),
    }),
    
    // Filled variant styles
    filled: ({ theme, ownerState }) => ({
      ...(ownerState.color === 'secondary' && {
        backgroundColor: colors.secondary.main, // #6930ca from Figma
        color: '#ffffff', // White text for contrast
        
        // Hover state from Figma: secondary/_states/hover
        '&:hover': {
          backgroundColor: colors.secondary.main,
          boxShadow: `inset 0 0 0 100px ${colors.secondary.hover}`, // #6930ca0a
        },
        
        // Focus state from Figma: secondary/_states/focusVisible  
        '&:focus': {
          backgroundColor: colors.secondary.main,
          boxShadow: `0 0 0 3px ${colors.secondary.focus}`, // #6930ca4d
        },
        
        // Delete icon styling for filled variant
        '& .MuiChip-deleteIcon': {
          color: 'inherit',
          '&:hover': {
            color: 'inherit',
          },
        },
      }),
    }),
    
    // Outlined variant styles
    outlined: ({ theme, ownerState }) => ({
      ...(ownerState.color === 'secondary' && {
        borderColor: colors.secondary.main, // #6930ca
        color: colors.secondary.main,
        backgroundColor: 'transparent',
        
        // Hover state
        '&:hover': {
          borderColor: colors.secondary.main,
          backgroundColor: colors.secondary.hover, // #6930ca0a
        },
        
        // Focus state
        '&:focus': {
          borderColor: colors.secondary.main,
          backgroundColor: colors.secondary.hover,
          boxShadow: `0 0 0 3px ${colors.secondary.focus}`, // #6930ca4d
        },
        
        // Delete icon styling for outlined variant
        '& .MuiChip-deleteIcon': {
          color: colors.secondary.main,
          '&:hover': {
            color: colors.secondary.main,
          },
        },
      }),
    }),
    
    // Label styles
    label: {
      fontFamily: chipTypography.fontFamily,
      fontSize: chipTypography.fontSize,
      fontWeight: chipTypography.fontWeight,
      lineHeight: chipTypography.lineHeight,
      padding: 0, // Remove default padding to use root padding
    },
  },
  
  // Default props
  defaultProps: {
    size: 'medium',
    variant: 'filled',
    color: 'secondary',
  },
};
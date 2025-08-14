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
      
      // Border radius - 16px for both sizes to match Figma
      borderRadius: '16px',
      
      // Ensure proper alignment
      display: 'inline-flex',
      alignItems: 'center',
      
      // Size-specific overrides
      ...(ownerState.size === 'small' && {
        height: chipSizes.small.height,
        padding: '0 12px', // Horizontal padding, vertical handled by height
        fontSize: chipSizes.small.fontSize,
        '& .MuiChip-avatar': {
          width: chipSizes.small.avatarSize,
          height: chipSizes.small.avatarSize,
          fontSize: '10px', // avatar/initialsSm from Figma
          marginLeft: '-6px', // Negative margin to align with padding
          marginRight: '4px',
        },
        '& .MuiChip-deleteIcon': {
          width: chipSizes.small.deleteIconSize,
          height: chipSizes.small.deleteIconSize,
          marginLeft: '4px',
          marginRight: '-6px', // Negative margin to align with padding
        },
        '& .MuiChip-icon': {
          width: chipSizes.small.deleteIconSize,
          height: chipSizes.small.deleteIconSize,
          marginLeft: '-6px',
          marginRight: '4px',
        },
      }),
      
      ...(ownerState.size === 'medium' && {
        height: chipSizes.medium.height,
        padding: '0 16px', // Horizontal padding, vertical handled by height
        fontSize: chipSizes.medium.fontSize,
        '& .MuiChip-avatar': {
          width: chipSizes.medium.avatarSize,
          height: chipSizes.medium.avatarSize,
          fontSize: '12px', // avatar/initialsMd from Figma
          marginLeft: '-8px', // Negative margin to align with padding
          marginRight: '6px',
        },
        '& .MuiChip-deleteIcon': {
          width: chipSizes.medium.deleteIconSize,
          height: chipSizes.medium.deleteIconSize,
          marginLeft: '6px',
          marginRight: '-8px', // Negative margin to align with padding
        },
        '& .MuiChip-icon': {
          width: chipSizes.medium.deleteIconSize,
          height: chipSizes.medium.deleteIconSize,
          marginLeft: '-8px',
          marginRight: '6px',
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
          backgroundColor: colors.secondary.hover, // #6930ca0a from Figma
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
import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { 
  colors, 
  textFieldSizes, 
  borderRadius, 
  strokeWeights,
  ColorVariant, 
  TextFieldSizeVariant,
  TextFieldVariantType 
} from '../../design-tokens';

// Custom styled TextField using MUI's styled API
const StyledTextField = styled(MuiTextField, {
  shouldForwardProp: (prop) => !['colorVariant', 'sizeVariant', 'textFieldVariant'].includes(prop as string),
})<{
  colorVariant: ColorVariant;
  sizeVariant: TextFieldSizeVariant;
  textFieldVariant: TextFieldVariantType;
}>(({ theme, colorVariant, sizeVariant, textFieldVariant }) => {
  const colorTokens = colors[colorVariant] || colors.primary;
  const sizeTokens = textFieldSizes[sizeVariant];

  const baseStyles = {
    '& .MuiInputBase-root': {
      borderRadius: `${borderRadius.textField}px`,
      fontSize: sizeTokens.fontSize,
      fontFamily: 'Roboto, sans-serif',
      color: colors.text.primary,
      
      '&.Mui-focused': {
        '& .MuiInputLabel-root': {
          color: colorVariant === 'error' ? colors.error.main : colorTokens.main,
        },
      },
      
      '&.Mui-disabled': {
        color: colors.text.disabled,
        '& .MuiInputLabel-root': {
          color: colors.text.disabled,
        },
      },

      '&.Mui-error': {
        '& .MuiInputLabel-root': {
          color: colors.error.main,
        },
      },
    },

    '& .MuiInputLabel-root': {
      fontSize: sizeTokens.labelFontSize,
      fontFamily: 'Roboto, sans-serif',
      color: colors.text.secondary,
      '&.Mui-focused': {
        color: colorVariant === 'error' ? colors.error.main : colorTokens.main,
      },
      '&.Mui-disabled': {
        color: colors.text.disabled,
      },
      '&.Mui-error': {
        color: colors.error.main,
      },
    },
  };

  // Variant-specific styles
  switch (textFieldVariant) {
    case 'standard':
      return {
        ...baseStyles,
        '& .MuiInput-underline:before': {
          borderBottomColor: colors.default.border,
          borderBottomWidth: `${strokeWeights.default}px`,
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: colors.default.hover,
          borderBottomWidth: `${strokeWeights.focused}px`,
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: colorVariant === 'error' ? colors.error.main : colorTokens.main,
          borderBottomWidth: `${strokeWeights.focused}px`,
        },
        '& .MuiInput-underline.Mui-error:after': {
          borderBottomColor: colors.error.main,
        },
        '& .MuiInput-underline.Mui-disabled:before': {
          borderBottomStyle: 'dotted',
          borderBottomColor: colors.text.disabled,
        },
        '& .MuiInputBase-input': {
          padding: sizeTokens.padding,
        },
      };

    case 'filled':
      return {
        ...baseStyles,
        '& .MuiFilledInput-root': {
          backgroundColor: colors.background.filled,
          borderTopLeftRadius: `${borderRadius.textField}px`,
          borderTopRightRadius: `${borderRadius.textField}px`,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          '&:hover': {
            backgroundColor: colors.background.filledHover,
          },
          '&.Mui-focused': {
            backgroundColor: colors.background.filled,
          },
          '&.Mui-disabled': {
            backgroundColor: colors.background.filled,
          },
        },
        '& .MuiFilledInput-underline:before': {
          borderBottomColor: colors.default.border,
          borderBottomWidth: `${strokeWeights.default}px`,
        },
        '& .MuiFilledInput-underline:hover:not(.Mui-disabled):before': {
          borderBottomColor: colors.default.hover,
          borderBottomWidth: `${strokeWeights.focused}px`,
        },
        '& .MuiFilledInput-underline:after': {
          borderBottomColor: colorVariant === 'error' ? colors.error.main : colorTokens.main,
          borderBottomWidth: `${strokeWeights.focused}px`,
        },
        '& .MuiFilledInput-underline.Mui-error:after': {
          borderBottomColor: colors.error.main,
        },
        '& .MuiFilledInput-underline.Mui-disabled:before': {
          borderBottomStyle: 'dotted',
          borderBottomColor: colors.text.disabled,
        },
        '& .MuiInputBase-input': {
          padding: sizeTokens.padding,
        },
      };

    case 'outlined':
      return {
        ...baseStyles,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: colors.default.border,
            borderWidth: `${strokeWeights.default}px`,
          },
          '&:hover fieldset': {
            borderColor: colors.default.hover,
            borderWidth: `${strokeWeights.default}px`,
          },
          '&.Mui-focused fieldset': {
            borderColor: colorVariant === 'error' ? colors.error.main : colorTokens.main,
            borderWidth: `${strokeWeights.focused}px`,
          },
          '&.Mui-error fieldset': {
            borderColor: colors.error.main,
            borderWidth: `${strokeWeights.default}px`,
          },
          '&.Mui-disabled fieldset': {
            borderColor: colors.text.disabled,
          },
        },
        '& .MuiInputBase-input': {
          padding: sizeTokens.padding,
        },
        '& .MuiInputLabel-root': {
          '&.MuiInputLabel-outlined': {
            transform: 'translate(14px, 16px) scale(1)',
            '&.MuiInputLabel-shrink': {
              transform: 'translate(14px, -9px) scale(0.75)',
            },
          },
        },
      };

    default:
      return baseStyles;
  }
});

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'color' | 'size' | 'variant'> {
  /**
   * The color variant of the TextField
   * @default 'primary'
   */
  color?: ColorVariant;

  /**
   * The size variant of the TextField
   * @default 'medium'
   */
  size?: TextFieldSizeVariant;

  /**
   * The variant of the TextField
   * @default 'outlined'
   */
  variant?: TextFieldVariantType;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TextField component based on Figma design system
 * Supports Standard, Filled, and Outlined variants with multiple sizes and states
 */
export const TextField: React.FC<TextFieldProps> = ({
  color = 'primary',
  size = 'medium', 
  variant = 'outlined',
  className,
  ...props
}) => {
  return (
    <StyledTextField
      colorVariant={color}
      sizeVariant={size}
      textFieldVariant={variant}
      variant={variant}
      size={size === 'small' ? 'small' : 'medium'}
      className={clsx(className)}
      {...props}
    />
  );
};

export default TextField;
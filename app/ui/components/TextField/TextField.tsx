import React from 'react';
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from '@mui/material';
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
  // Map custom ColorVariant to MUI's expected color values
  const getMuiColor = (colorVariant: ColorVariant): MuiTextFieldProps['color'] => {
    switch (colorVariant) {
      case 'primary':
      case 'secondary':
      case 'error':
      case 'warning':
      case 'info':
      case 'success':
        return colorVariant;
      case 'default':
      default:
        return 'primary';
    }
  };

  return (
    <MuiTextField
      color={getMuiColor(color)}
      variant={variant}
      size={size === 'small' ? 'small' : 'medium'}
      className={clsx(className)}
      {...props}
    />
  );
};

export default TextField;
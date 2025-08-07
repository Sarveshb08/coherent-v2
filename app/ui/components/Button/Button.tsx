import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { colors, ColorVariant, SizeVariant } from '../../design-tokens';

// Custom styled button using MUI's styled API
const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !['colorVariant', 'sizeVariant'].includes(prop as string),
})<{
  colorVariant: ColorVariant;
  sizeVariant: SizeVariant;
}>(({ theme, colorVariant, sizeVariant }) => {
  const colorTokens = colors[colorVariant];
  
  // Size mappings
  const sizeStyles = {
    small: {
      padding: '8px 16px',
      fontSize: '14px',
      minHeight: '36px',
      borderRadius: '6px',
    },
    medium: {
      padding: '12px 24px',
      fontSize: '16px',
      minHeight: '44px',
      borderRadius: '8px',
    },
    large: {
      padding: '16px 32px',
      fontSize: '18px',
      minHeight: '52px',
      borderRadius: '10px',
    },
  };

  const currentSize = sizeStyles[sizeVariant];

  return {
    textTransform: 'none',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    borderRadius: currentSize.borderRadius,
    padding: currentSize.padding,
    fontSize: currentSize.fontSize,
    minHeight: currentSize.minHeight,
    border: `1px solid ${colorTokens.border}`,
    transition: 'all 0.2s ease-in-out',
    
    // Default colors
    backgroundColor: colorTokens.main,
    color: '#FFFFFF',
    
    '&:hover': {
      backgroundColor: colorTokens.hover !== colorTokens.main ? colorTokens.hover : `${colorTokens.main}dd`,
      borderColor: colorTokens.border,
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
    },

    '&:focus': {
      outline: `2px solid ${colorTokens.focus}`,
      outlineOffset: '2px',
    },

    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12)',
    },

    '&:disabled, &.Mui-disabled': {
      backgroundColor: colorTokens.disabled,
      color: colors.text.disabled,
      borderColor: colorTokens.disabled,
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
      
      '&:hover': {
        backgroundColor: colorTokens.disabled,
        transform: 'none',
        boxShadow: 'none',
      },
    },
  };
});

// Secondary variant styling
const SecondaryButton = styled(StyledButton)(({ theme, colorVariant }) => {
  const colorTokens = colors[colorVariant];
  
  return {
    backgroundColor: 'transparent',
    color: colorTokens.main,
    borderColor: colorTokens.border,
    
    '&:hover': {
      backgroundColor: colorTokens.hover,
      color: colorTokens.main,
      borderColor: colorTokens.border,
    },

    '&:disabled, &.Mui-disabled': {
      backgroundColor: 'transparent',
      color: colorTokens.disabled,
      borderColor: colorTokens.disabled,
    },
  };
});

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'size' | 'variant'> {
  /**
   * The color variant of the button
   * @default 'primary'
   */
  color?: ColorVariant;
  
  /**
   * The size variant of the button
   * @default 'medium'
   */
  size?: SizeVariant;
  
  /**
   * The variant of the button (primary or secondary)
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * The content of the button
   */
  children: React.ReactNode;
  
  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Accessible label for screen readers when button content is not descriptive
   */
  'aria-label'?: string;
}

export const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  size = 'medium',
  variant = 'primary',
  disabled = false,
  children,
  onClick,
  className,
  type = 'button',
  'aria-label': ariaLabel,
  ...props
}) => {
  const ButtonComponent = variant === 'secondary' ? SecondaryButton : StyledButton;
  
  return (
    <ButtonComponent
      colorVariant={color}
      sizeVariant={size}
      disabled={disabled}
      onClick={onClick}
      className={clsx(className)}
      type={type}
      aria-label={ariaLabel}
      role="button"
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
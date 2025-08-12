import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { colors, sizes, borderRadius, ColorVariant, SizeVariant } from '../../design-tokens';

export interface CheckboxProps extends Omit<MuiCheckboxProps, 'color' | 'size'> {
  /**
   * The color variant of the checkbox
   * @default 'primary'
   */
  color?: ColorVariant;

  /**
   * The size variant of the checkbox
   * @default 'medium'
   */
  size?: SizeVariant;

  /**
   * Whether the checkbox is in an indeterminate state
   * @default false
   */
  indeterminate?: boolean;

  className?: string;

  label?: string;
}

// Styled Checkbox using design tokens
const StyledCheckbox = styled(MuiCheckbox, {
  shouldForwardProp: (prop) => prop !== 'colorVariant',
})<{ colorVariant: ColorVariant }>(({ theme, colorVariant }) => {
  const colorConfig = colors[colorVariant];
  
  return {
    color: colorConfig.border,
    '&.Mui-checked': {
      color: colorConfig.main,
    },
    '&.MuiCheckbox-indeterminate': {
      color: colorConfig.main,
    },
    '&:hover': {
      backgroundColor: colorConfig.hover,
    },
    '&:focus': {
      backgroundColor: colorConfig.focus,
    },
    '&.Mui-disabled': {
      color: colorConfig.disabled,
    },
    '&.Mui-checked:hover': {
      backgroundColor: colorConfig.hover,
    },
    '&.MuiCheckbox-indeterminate:hover': {
      backgroundColor: colorConfig.hover,
    },
  };
});

export const Checkbox: React.FC<CheckboxProps> = ({
  color = 'primary',
  size = 'medium',
  indeterminate = false,
  className,
  label,
  ...props
}) => {
  const checkboxElement = (
    <StyledCheckbox
      colorVariant={color}
      size={size}
      indeterminate={indeterminate}
      className={clsx(className)}
      {...props}
    />
  );

  // If label is provided, wrap in a container
  if (label) {
    return (
      <div className="flex items-center gap-2">
        {checkboxElement}
        <label 
          className="text-sm font-medium cursor-pointer"
          style={{ color: colors.text.primary }}
        >
          {label}
        </label>
      </div>
    );
  }

  return checkboxElement;
};

export default Checkbox;
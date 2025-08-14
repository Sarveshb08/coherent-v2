import React from 'react';
import { Switch as MuiSwitch, FormControlLabel } from '@mui/material';
import clsx from 'clsx';
import { SwitchProps } from './types';

/**
 * Switch component using MUI theme-based styling
 * Supports all standard MUI Switch props including color variants and sizes
 */
export const Switch: React.FC<SwitchProps> = ({
  color = 'primary',
  size = 'medium',
  checked = false,
  onChange,
  disabled = false,
  className,
  label,
  inputProps,
  ...props
}) => {
  const switchElement = (
    <MuiSwitch
      color={color}
      size={size}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={clsx(className)}
      inputProps={inputProps}
      {...props}
    />
  );

  // If label is provided, use FormControlLabel for proper accessibility
  if (label) {
    return (
      <FormControlLabel
        control={switchElement}
        label={label}
        disabled={disabled}
      />
    );
  }

  return switchElement;
};

export default Switch;
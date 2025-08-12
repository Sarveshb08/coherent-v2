import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import clsx from 'clsx';
import { CheckboxProps } from './types';

/**
 * Checkbox component using MUI theme-based styling
 * Supports all standard MUI Checkbox props including color variants and sizes
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  ...props
}) => {
  const checkboxElement = (
    <MuiCheckbox
      className={clsx(className)}
      {...props}
    />
  );

  // If label is provided, use FormControlLabel for proper accessibility
  if (label) {
    return (
      <FormControlLabel
        control={checkboxElement}
        label={label}
        sx={{
          '& .MuiFormControlLabel-label': {
            fontSize: '14px',
            fontWeight: 500,
            color: 'text.primary',
          },
        }}
      />
    );
  }

  return checkboxElement;
};

export default Checkbox;
import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import clsx from 'clsx';
import { TextFieldProps } from './types';

/**
 * TextField component using MUI theme-based styling
 * Supports all standard MUI TextField props including variants, colors, and sizes
 */
export const TextField: React.FC<TextFieldProps> = ({
  className,
  ...props
}) => {
  return (
    <MuiTextField
      className={clsx(className)}
      {...props}
    />
  );
};

export default TextField;
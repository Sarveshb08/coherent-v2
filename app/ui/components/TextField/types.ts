import { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface TextFieldProps extends Omit<MuiTextFieldProps, never> {
  /**
   * Additional CSS classes
   */
  className?: string;
}

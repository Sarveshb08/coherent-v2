import { CheckboxProps as MuiCheckboxProps } from '@mui/material';

export interface CheckboxProps extends MuiCheckboxProps {
  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Label for the checkbox (optional)
   */
  label?: string;
}

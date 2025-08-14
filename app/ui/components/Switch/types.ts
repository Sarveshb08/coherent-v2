import { SwitchProps as MuiSwitchProps } from '@mui/material';
import { ChangeEvent } from 'react';

export interface SwitchProps extends Omit<MuiSwitchProps, 'color' | 'size'> {
  /**
   * The color variant of the switch
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';

  /**
   * The size variant of the switch
   * @default 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * If true, the switch is checked
   * @default false
   */
  checked?: boolean;

  /**
   * Callback fired when the state is changed
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;

  /**
   * If true, the switch is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Optional label for the switch
   */
  label?: string;

  /**
   * Props applied to the input element
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

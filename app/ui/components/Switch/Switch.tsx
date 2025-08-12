import React, { ChangeEvent } from 'react';
import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { 
  colors, 
  switchSizes, 
  switchTransitions, 
  ColorVariant, 
  SwitchSizeVariant 
} from '../../design-tokens';

export interface SwitchProps extends Omit<MuiSwitchProps, 'color' | 'size'> {
  /**
   * The color variant of the switch
   * @default 'primary'
   */
  color?: ColorVariant;

  /**
   * The size variant of the switch
   * @default 'medium'
   */
  size?: SwitchSizeVariant;

  /**
   * If true, the switch is checked
   * @default false
   */
  checked?: boolean;

  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;

  /**
   * If true, the switch is disabled
   * @default false
   */
  disabled?: boolean;

  className?: string;

  label?: string;

  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

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

  // If label is provided, wrap in a container
  if (label) {
    return (
      <div className="flex items-center gap-2">
        {switchElement}
        <label 
          className={clsx(
            "text-sm font-medium cursor-pointer",
            disabled ? "text-gray-400" : "text-gray-700"
          )}
        >
          {label}
        </label>
      </div>
    );
  }

  return switchElement;
};

export default Switch;
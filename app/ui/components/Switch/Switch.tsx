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

// Custom styled switch using MUI's styled API
const StyledSwitch = styled(MuiSwitch, {
  shouldForwardProp: (prop) => !['colorVariant', 'sizeVariant'].includes(prop as string),
})<{
  colorVariant: ColorVariant;
  sizeVariant: SwitchSizeVariant;
}>(({ theme, colorVariant, sizeVariant }) => {
  const colorTokens = colors[colorVariant];
  const sizeTokens = switchSizes[sizeVariant];

  return {
    width: sizeTokens.track.width,
    height: sizeTokens.track.height,
    padding: 0,
    display: 'flex',
    
    '& .MuiSwitch-switchBase': {
      padding: sizeTokens.knob.padding,
      margin: 0,
      transitionDuration: `${switchTransitions.duration}ms`,
      transitionTimingFunction: switchTransitions.easing,
      
      // Unchecked state
      '& + .MuiSwitch-track': {
        opacity: 0.38,
        backgroundColor: colors.default.main,
        borderRadius: sizeTokens.track.height / 2,
      },
      
      // Checked state positioning
      '&.Mui-checked': {
        transform: `translateX(${sizeTokens.knob.translateX}px)`,
        color: colorTokens.main,
        
        '& + .MuiSwitch-track': {
          opacity: 0.5,
          backgroundColor: colorTokens.main,
        },
      },
      
      // Hover state  
      '&:hover': {
        backgroundColor: colorTokens.hover,
        
        '&.Mui-checked': {
          backgroundColor: colorTokens.hover,
        },
      },
      
      // Focus state with focus ring
      '&.Mui-focusVisible': {
        '& .MuiSwitch-thumb::after': {
          content: '""',
          position: 'absolute',
          top: sizeTokens.focusRipple.offset * -1,
          left: sizeTokens.focusRipple.offset * -1,
          width: sizeTokens.focusRipple.size,
          height: sizeTokens.focusRipple.size,
          borderRadius: '50%',
          backgroundColor: colorVariant === 'default' 
            ? 'rgba(255, 255, 255, 0.3)' 
            : colorTokens.focus,
          pointerEvents: 'none',
        },
      },
      
      // Disabled state
      '&.Mui-disabled': {
        color: colors.default.disabled,
        
        '& + .MuiSwitch-track': {
          opacity: 0.12,
          backgroundColor: colors.default.disabled,
        },
        
        '& .MuiSwitch-thumb': {
          backgroundColor: '#F5F5F5',
        },
      },
    },
    
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: sizeTokens.knob.size,
      height: sizeTokens.knob.size,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)',
      position: 'relative',
    },
    
    '& .MuiSwitch-track': {
      borderRadius: sizeTokens.track.height / 2,
      backgroundColor: colors.default.main,
      opacity: 0.38,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: switchTransitions.duration,
        easing: switchTransitions.easing,
      }),
    },
  };
});

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
   * Label for the switch (optional)
   */
  label?: string;

  /**
   * Input props passed to the underlying input element
   */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Switch component based on Figma design system
 * Supports multiple sizes, colors, and states for toggle functionality
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
    <StyledSwitch
      colorVariant={color}
      sizeVariant={size}
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
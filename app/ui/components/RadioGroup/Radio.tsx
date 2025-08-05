import React from 'react';
import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { colors, radioSizes, borderRadius, ColorVariant, RadioSizeVariant } from '../../design-tokens';

// Custom styled radio using MUI's styled API with Figma design specifications
const StyledRadio = styled(MuiRadio, {
  shouldForwardProp: (prop) => !['colorVariant', 'sizeVariant'].includes(prop as string),
})<{
  colorVariant: ColorVariant;
  sizeVariant: RadioSizeVariant;
}>(({ theme, colorVariant, sizeVariant }) => {
  const colorTokens = colors.radio[colorVariant];
  const sizeTokens = radioSizes[sizeVariant];

  return {
    padding: `${sizeTokens.padding}px`,
    borderRadius: `${borderRadius.focusRing}px`,
    
    '& .MuiSvgIcon-root': {
      width: `${sizeTokens.size}px`,
      height: `${sizeTokens.size}px`,
    },

    // Unchecked state - outer circle only with proper MUI icon handling
    '&:not(.Mui-checked)': {
      '& .MuiSvgIcon-root': {
        color: 'transparent',
        border: `1px solid ${colorTokens.main}`,
        borderRadius: '50%',
        backgroundColor: colors.background.white,
      },
    },

    // Checked state - show the inner filled circle using MUI's built-in checked icon
    '&.Mui-checked': {
      '& .MuiSvgIcon-root': {
        color: colorTokens.main,
        backgroundColor: colors.background.white,
        border: `1px solid ${colorTokens.main}`,
        borderRadius: '50%',
      },
    },

    // Hover state
    '&:hover': {
      backgroundColor: colorTokens.hover,
    },

    // Focus state - focus ring around the radio
    '&.Mui-focusVisible': {
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 2,
        left: 2,
        width: `${sizeTokens.focusRipple}px`,
        height: `${sizeTokens.focusRipple}px`,
        borderRadius: '50%',
        backgroundColor: colorTokens.focus,
        pointerEvents: 'none',
        zIndex: -1,
      },
    },

    // Disabled state
    '&.Mui-disabled': {
      '& .MuiSvgIcon-root': {
        color: colors.radio.default.disabled,
        borderColor: colors.radio.default.disabled,
      },
    },

    // Remove default Material-UI ripple effect in favor of custom focus ring
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
  };
});

export interface RadioProps extends Omit<MuiRadioProps, 'color' | 'size'> {
  /**
   * The color variant of the radio
   * @default 'primary'
   */
  color?: ColorVariant;

  /**
   * The size variant of the radio
   * @default 'medium'
   */
  size?: RadioSizeVariant;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Label for the radio (optional)
   */
  label?: string;
}

/**
 * Radio component based on Figma design system
 * Supports multiple sizes, colors, and states
 * Designed to be used within a RadioGroup component
 */
export const Radio: React.FC<RadioProps> = ({
  color = 'primary',
  size = 'medium',
  className,
  label,
  ...props
}) => {
  const radioElement = (
    <StyledRadio
      colorVariant={color}
      sizeVariant={size}
      className={clsx(className)}
      {...props}
    />
  );

  // If label is provided, wrap in a container with proper structure
  if (label) {
    return (
      <div className="flex items-center gap-2">
        {radioElement}
        <label 
          className="text-sm font-medium text-gray-700 cursor-pointer"
          onClick={(e) => {
            // Find the radio input and trigger a click
            const radio = e.currentTarget.previousElementSibling?.querySelector('input[type="radio"]') as HTMLInputElement;
            if (radio && !radio.disabled) {
              radio.click();
            }
          }}
        >
          {label}
        </label>
      </div>
    );
  }

  return radioElement;
};

export default Radio;
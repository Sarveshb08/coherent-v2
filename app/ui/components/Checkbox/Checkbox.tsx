import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { colors, sizes, borderRadius, ColorVariant, SizeVariant } from '../../design-tokens';

// Custom styled checkbox using MUI's styled API
// const StyledCheckbox = styled(MuiCheckbox, {
//   shouldForwardProp: (prop) => !['colorVariant', 'sizeVariant'].includes(prop as string),
// })<{
//   colorVariant: ColorVariant;
//   sizeVariant: SizeVariant;
// }>(({ theme, colorVariant, sizeVariant }) => {
//   const colorTokens = colors[colorVariant];
//   const sizeTokens = sizes[sizeVariant];

//   return {
//     padding: `${sizes.small.padding}px`,
//     borderRadius: `${borderRadius.focusRing}px`,

//     '& .MuiSvgIcon-root': {
//       width: `${sizeTokens.size}px`,
//       height: `${sizeTokens.size}px`,
//       borderRadius: `${borderRadius.checkbox}px`,
//     },

//     // Default/unchecked state
//     '&:not(.Mui-checked) .MuiSvgIcon-root': {
//       color: colorVariant === 'default' ? colorTokens.border : 'transparent',
//       backgroundColor: colors.background.white,
//       border: `1px solid ${colorVariant === 'default' ? colorTokens.border : colorTokens.main}`,
//     },

//     // Checked state
//     '&.Mui-checked .MuiSvgIcon-root': {
//       color: colorTokens.main,
//       backgroundColor: colors.background.white,
//     },

//     // // Indeterminate state  
//     // '&.MuiCheckbox-indeterminate .MuiSvgIcon-root': {
//     //   color: colorTokens.main,
//     //   backgroundColor: colors.background.white,
//     // },

//     // Hover state
//     '&:hover': {
//       backgroundColor: colorTokens.hover,
//     },

//     // Focus state
//     '&.Mui-focusVisible': {
//       backgroundColor: colorTokens.focus,
//       '&::after': {
//         content: '""',
//         position: 'absolute',
//         top: 2,
//         left: 2,
//         right: 2,
//         bottom: 2,
//         borderRadius: `${borderRadius.focusRing}px`,
//         backgroundColor: colorTokens.focus,
//         pointerEvents: 'none',
//       },
//     },

//     // Disabled state
//     '&.Mui-disabled': {
//       '& .MuiSvgIcon-root': {
//         color: colorTokens.disabled || colors.default.disabled,
//         borderColor: colorTokens.disabled || colors.default.disabled,
//       },
//     },

   
//     '& .MuiTouchRipple-root .MuiTouchRipple-child': {
//       backgroundColor: colorTokens.focus,
//     },

//   };
// });

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

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Label for the checkbox (optional)
   */
  label?: string;
}

/**
 * Checkbox component based on Figma design system
 * Supports multiple sizes, colors, and states including indeterminate
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  color = 'primary',
  size = 'medium',
  indeterminate = false,
  className,
  label,
  ...props
}) => {
  const checkboxElement = (
    <MuiCheckbox
      color={color}
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
        <label className="text-sm font-medium text-gray-700 cursor-pointer">
          {label}
        </label>
      </div>
    );
  }

  return checkboxElement;
};

export default Checkbox;
'use client';

import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

// Simple interface that leverages MUI's built-in props
export interface ChipProps extends MuiChipProps {
  /**
   * The content of the chip label.
   */
  label: React.ReactNode;
}

/**
 * Chip component based on Material-UI Chip with design system theming.
 * 
 * Leverages MUI's built-in functionality with custom theme integration.
 * All standard MUI Chip props are supported.
 * 
 * @example
 * ```tsx
 * // Basic secondary chip (default)
 * <Chip label="Basic Chip" />
 * 
 * // Other colors
 * <Chip label="Primary" color="primary" />
 * <Chip label="Error" color="error" />
 * 
 * // With avatar
 * <Chip label="John Doe" avatar={<Avatar>JD</Avatar>} />
 * 
 * // Deletable chip
 * <Chip label="Deletable" onDelete={() => console.log('Delete')} />
 * 
 * // Outlined variant
 * <Chip label="Outlined" variant="outlined" />
 * 
 * // Small size
 * <Chip label="Small" size="small" />
 * ```
 */
export const Chip: React.FC<ChipProps> = ({ 
  color = 'secondary',
  variant = 'filled',
  size = 'medium',
  ...props 
}) => {
  return (
    <MuiChip
      color={color}
      variant={variant}
      size={size}
      {...props}
    />
  );
};

export default Chip;
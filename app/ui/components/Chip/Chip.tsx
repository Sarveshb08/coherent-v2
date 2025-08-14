'use client';

import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

// Define specific chip variants for better type safety
export interface ChipProps extends Omit<MuiChipProps, 'color' | 'variant' | 'size'> {
  /**
   * The color of the chip.
   * @default 'secondary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default';
  
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined';
  
  /**
   * The size of the chip.
   * @default 'medium'
   */
  size?: 'small' | 'medium';
  
  /**
   * The content of the chip label.
   */
  label: React.ReactNode;
  
  /**
   * Avatar element to display.
   */
  avatar?: React.ReactElement;
  
  /**
   * Icon element to display.
   */
  icon?: React.ReactElement;
  
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete?: React.EventHandler<any>;
  
  /**
   * Custom delete icon element.
   */
  deleteIcon?: React.ReactElement;
  
  /**
   * If true, the chip will be disabled.
   * @default false
   */
  disabled?: boolean;
  
  /**
   * If true, the chip will appear clickable.
   * @default false
   */
  clickable?: boolean;
  
  /**
   * Callback fired when the chip is clicked.
   */
  onClick?: React.EventHandler<any>;
}

/**
 * Chip component based on Material-UI Chip with design system customizations.
 * 
 * Chips represent complex entities in small blocks, such as a contact.
 * They can be used to display labels, tags, or other categorization elements.
 * 
 * Features:
 * - Two variants: filled and outlined
 * - Multiple color options following design system palette
 * - Avatar and icon support
 * - Delete functionality with customizable delete icon
 * - Small and medium sizes
 * - Full accessibility support
 * 
 * @example
 * ```tsx
 * // Basic chip
 * <Chip label="Basic Chip" />
 * 
 * // Chip with avatar
 * <Chip 
 *   label="John Doe" 
 *   avatar={<Avatar src="/path/to/avatar.jpg" />} 
 * />
 * 
 * // Deletable chip
 * <Chip 
 *   label="Deletable" 
 *   onDelete={() => console.log('Delete clicked')} 
 * />
 * 
 * // Outlined chip
 * <Chip 
 *   label="Outlined" 
 *   variant="outlined" 
 * />
 * ```
 */
export const Chip: React.FC<ChipProps> = ({
  color = 'secondary',
  variant = 'filled',
  size = 'medium',
  label,
  avatar,
  icon,
  onDelete,
  deleteIcon,
  disabled = false,
  clickable = false,
  onClick,
  ...props
}) => {
  return (
    <MuiChip
      color={color}
      variant={variant}
      size={size}
      label={label}
      avatar={avatar}
      icon={icon}
      onDelete={onDelete}
      deleteIcon={deleteIcon}
      disabled={disabled}
      clickable={clickable}
      onClick={onClick}
      {...props}
    />
  );
};

export default Chip;
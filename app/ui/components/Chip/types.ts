export interface ChipProps {
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
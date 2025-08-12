import { SpeedDialProps as MuiSpeedDialProps, SpeedDialActionProps as MuiSpeedDialActionProps } from '@mui/material';
import { SpeedDialDirection } from '../../design-tokens';

export interface SpeedDialActionConfig {
  /**
   * Icon component for the action
   */
  icon: React.ReactElement;
  
  /**
   * Tooltip text for the action
   */
  name: string;
  
  /**
   * Click handler for the action
   */
  onClick?: () => void;
  
  /**
   * Whether to show tooltip
   * @default true
   */
  tooltipTitle?: string;
  
  /**
   * Whether the tooltip is open by default
   * @default false
   */
  tooltipOpen?: boolean;
}

export interface SpeedDialProps extends Omit<MuiSpeedDialProps, 'direction' | 'children'> {
  /**
   * Direction for the speed dial to open
   * @default 'up'
   */
  direction?: SpeedDialDirection;
  
  /**
   * Icon for the main FAB when closed
   */
  icon?: React.ReactElement;
  
  /**
   * Icon for the main FAB when open (optional)
   */
  openIcon?: React.ReactElement;
  
  /**
   * Array of action configurations
   */
  actions: SpeedDialActionConfig[];
  
  /**
   * ARIA label for the speed dial
   */
  ariaLabel: string;
  
  /**
   * Whether the speed dial is open
   */
  open?: boolean;
  
  /**
   * Callback when the speed dial open state changes
   */
  onOpen?: () => void;
  
  /**
   * Callback when the speed dial closes
   */
  onClose?: () => void;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface SpeedDialActionProps extends MuiSpeedDialActionProps {
  /**
   * Configuration for the action
   */
  action: SpeedDialActionConfig;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
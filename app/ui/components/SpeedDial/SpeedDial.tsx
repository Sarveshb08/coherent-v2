import React, { useState } from 'react';
import { 
  SpeedDial as MuiSpeedDial, 
  SpeedDialAction as MuiSpeedDialAction,
  SpeedDialIcon as MuiSpeedDialIcon 
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import clsx from 'clsx';
import { SpeedDialProps, SpeedDialActionProps } from './types';

/**
 * SpeedDialAction component for individual actions in the speed dial
 */
export const SpeedDialAction: React.FC<SpeedDialActionProps> = ({
  action,
  className,
  ...props
}) => {
  return (
    <MuiSpeedDialAction
      key={action.name}
      icon={action.icon}
      tooltipTitle={action.tooltipTitle || action.name}
      tooltipOpen={action.tooltipOpen}
      onClick={action.onClick}
      className={clsx(className)}
      {...props}
    />
  );
};

/**
 * SpeedDial component using MUI theme-based styling
 * Supports all directions (up, down, left, right) and customizable actions
 * 
 * @example
 * ```tsx
 * <SpeedDial
 *   ariaLabel="SpeedDial basic example"
 *   direction="up"
 *   actions={[
 *     {
 *       icon: <ContentCopy />,
 *       name: 'Copy',
 *       onClick: () => console.log('Copy clicked')
 *     },
 *     {
 *       icon: <Save />,
 *       name: 'Save',
 *       onClick: () => console.log('Save clicked')
 *     }
 *   ]}
 * />
 * ```
 */
export const SpeedDial: React.FC<SpeedDialProps> = ({
  direction = 'up',
  icon = <AddIcon />,
  openIcon,
  actions = [],
  ariaLabel,
  open: controlledOpen,
  onOpen,
  onClose,
  className,
  ...props
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  
  // Use controlled or uncontrolled state
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  
  const handleOpen = () => {
    if (controlledOpen === undefined) {
      setInternalOpen(true);
    }
    onOpen?.();
  };
  
  const handleClose = () => {
    if (controlledOpen === undefined) {
      setInternalOpen(false);
    }
    onClose?.();
  };

  return (
    <MuiSpeedDial
      ariaLabel={ariaLabel}
      icon={
        <MuiSpeedDialIcon 
          icon={icon} 
          openIcon={openIcon}
        />
      }
      direction={direction}
      open={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      className={clsx(className)}
      {...props}
    >
      {actions.map((action) => (
        <SpeedDialAction 
          key={action.name}
          action={action}
        />
      ))}
    </MuiSpeedDial>
  );
};

export default SpeedDial;
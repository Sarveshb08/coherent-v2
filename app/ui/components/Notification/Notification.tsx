import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import clsx from 'clsx';
import { NotificationProps } from './types';

/**
 * Notification component using MUI Alert with theme-based styling
 * Supports all standard MUI Alert props with custom title and description
 */
export const Notification: React.FC<NotificationProps> = ({
  severity,
  variant = 'filled',
  title,
  description,
  className,
  children,
  ...props
}) => {
  return (
    <Alert
      severity={severity}
      variant={variant}
      className={clsx(className)}
      {...props}
    >
      <AlertTitle sx={{ fontWeight: 500, fontSize: '16px', margin: 0 }}>
        {title}
      </AlertTitle>
      {description && (
        <div style={{ fontSize: '14px', fontWeight: 400, marginTop: '4px' }}>
          {description}
        </div>
      )}
      {children}
    </Alert>
  );
};

export default Notification;
'use client';

import React from 'react';
import { styled } from '@mui/material/styles';
import { Alert, AlertTitle } from '@mui/material';
import clsx from 'clsx';
import {
  ExclamationCircleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import {
  colors,
  notificationSizes,
  notificationTypography,
  NotificationSeverity,
  NotificationVariant,
} from '../../design-tokens';

// Icon mapping for different severity types using Heroicons
const severityIcons = {
  error: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InformationCircleIcon,
  success: CheckCircleIcon,
} as const;

// Custom styled notification using MUI's Alert as base
const StyledNotification = styled(Alert, {
  shouldForwardProp: (prop) => !['notificationSeverity', 'notificationVariant'].includes(prop as string),
})<{
  notificationSeverity: NotificationSeverity;
  notificationVariant: NotificationVariant;
}>(({ theme, notificationSeverity, notificationVariant }) => {
  const notificationColors = colors.notification[notificationSeverity];

  // Base styles for all variants
  const baseStyles = {
    padding: notificationSizes.padding,
    borderRadius: notificationSizes.borderRadius,
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0px', // We handle gap with padding in icon container
    fontSize: notificationTypography.title.fontSize,
    fontFamily: notificationTypography.title.fontFamily,
    
    '& .MuiAlert-icon': {
      padding: notificationSizes.iconPadding,
      marginRight: 0,
      alignSelf: 'flex-start',
      
      '& svg': {
        width: notificationSizes.iconSize,
        height: notificationSizes.iconSize,
      },
    },

    '& .MuiAlert-message': {
      padding: notificationSizes.textPadding,
      display: 'flex',
      flexDirection: 'column',
      gap: notificationSizes.gap,
      flex: 1,
      
      '& .MuiAlertTitle-root': {
        marginBottom: 0,
        fontFamily: notificationTypography.title.fontFamily,
        fontWeight: notificationTypography.title.fontWeight,
        fontSize: notificationTypography.title.fontSize,
        lineHeight: notificationTypography.title.lineHeight,
        letterSpacing: notificationTypography.title.letterSpacing,
      },
      
      '& .notification-description': {
        fontFamily: notificationTypography.description.fontFamily,
        fontWeight: notificationTypography.description.fontWeight,
        fontSize: notificationTypography.description.fontSize,
        lineHeight: notificationTypography.description.lineHeight,
        letterSpacing: notificationTypography.description.letterSpacing,
        margin: 0,
      },
    },
  };

  // Variant-specific styles
  switch (notificationVariant) {
    case 'filled':
      return {
        ...baseStyles,
        backgroundColor: notificationColors.filled,
        border: 'none',
        color: colors.background.white,
        
        '& .MuiAlert-icon svg': {
          color: colors.background.white,
        },
        
        '& .MuiAlertTitle-root': {
          color: colors.background.white,
        },
        
        '& .notification-description': {
          color: colors.background.white,
        },
      };

    case 'outlined':
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        border: `1px solid ${notificationColors.outlined}`,
        color: notificationColors.text,
        
        '& .MuiAlert-icon svg': {
          color: notificationColors.icon,
        },
        
        '& .MuiAlertTitle-root': {
          color: notificationColors.text,
        },
        
        '& .notification-description': {
          color: notificationColors.text,
        },
      };

    case 'standard':
      return {
        ...baseStyles,
        backgroundColor: notificationColors.standard,
        border: `1px solid ${notificationColors.outlined}`,
        color: notificationColors.text,
        
        '& .MuiAlert-icon svg': {
          color: notificationColors.icon,
        },
        
        '& .MuiAlertTitle-root': {
          color: notificationColors.text,
        },
        
        '& .notification-description': {
          color: notificationColors.text,
        },
      };

    default:
      return baseStyles;
  }
});

export interface NotificationProps {
  /**
   * The severity type of the notification
   */
  severity: NotificationSeverity;

  /**
   * The variant style of the notification
   * @default 'filled'
   */
  variant?: NotificationVariant;

  /**
   * The main title/message of the notification
   */
  title: string;

  /**
   * Optional description text for additional details
   */
  description?: string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Callback when notification is closed (if close button is shown)
   */
  onClose?: () => void;

  /**
   * Whether to show a close button
   * @default false
   */
  closable?: boolean;
}

/**
 * Notification component based on Figma design system
 * Displays alerts and notifications with multiple severity types and variants
 */
export const Notification: React.FC<NotificationProps> = ({
  severity,
  variant = 'filled',
  title,
  description,
  className,
  onClose,
  closable = false,
  ...props
}) => {
  const IconComponent = severityIcons[severity];

  return (
    <StyledNotification
      severity={severity}
      notificationSeverity={severity}
      notificationVariant={variant}
      icon={<IconComponent />}
      onClose={closable ? onClose : undefined}
      className={clsx(className)}
      {...props}
    >
      <AlertTitle>{title}</AlertTitle>
      {description && (
        <div className="notification-description">
          {description}
        </div>
      )}
    </StyledNotification>
  );
};

export default Notification;
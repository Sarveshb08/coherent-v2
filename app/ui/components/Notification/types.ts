import { AlertProps } from '@mui/material';

export interface NotificationProps extends Omit<AlertProps, 'title'> {
  /**
   * The severity of the notification
   */
  severity: 'error' | 'warning' | 'info' | 'success';

  /**
   * The variant of the notification
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'standard';

  /**
   * The title of the notification
   */
  title: string;

  /**
   * The description/message of the notification
   */
  description?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

import React from 'react';
import clsx from 'clsx';

// Button variant types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'danger';

// Button size types  
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Button state types
export type ButtonState = 'default' | 'loading' | 'disabled';

// Enhanced Button Props Interface
export interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  rounded?: boolean;
  shadow?: boolean;
  href?: string;
  as?: 'button' | 'a';
}

// Variant styles mapping
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-500 text-white border-primary-500 hover:bg-primary-600 hover:border-primary-600 focus:ring-primary-500 active:bg-primary-700',
  secondary: 'bg-secondary-100 text-secondary-700 border-secondary-200 hover:bg-secondary-200 hover:border-secondary-300 focus:ring-secondary-500 active:bg-secondary-300',
  outline: 'bg-transparent text-primary-600 border-primary-300 hover:bg-primary-50 hover:border-primary-400 focus:ring-primary-500 active:bg-primary-100',
  ghost: 'bg-transparent text-secondary-700 border-transparent hover:bg-secondary-100 hover:text-secondary-900 focus:ring-secondary-500 active:bg-secondary-200',
  success: 'bg-success-500 text-white border-success-500 hover:bg-success-600 hover:border-success-600 focus:ring-success-500 active:bg-success-700',
  warning: 'bg-warning-500 text-white border-warning-500 hover:bg-warning-600 hover:border-warning-600 focus:ring-warning-500 active:bg-warning-700',
  danger: 'bg-danger-500 text-white border-danger-500 hover:bg-danger-600 hover:border-danger-600 focus:ring-danger-500 active:bg-danger-700',
};

// Size styles mapping
const sizeStyles: Record<ButtonSize, string> = {
  xs: 'h-btn-xs px-btn-xs text-btn-xs rounded-btn-xs',
  sm: 'h-btn-sm px-btn-sm text-btn-sm rounded-btn-sm',
  md: 'h-btn-md px-btn-md text-btn-md rounded-btn-md',
  lg: 'h-btn-lg px-btn-lg text-btn-lg rounded-btn-lg',
  xl: 'h-btn-xl px-btn-xl text-btn-xl rounded-btn-xl',
};

// Icon size mapping
const iconSizes: Record<ButtonSize, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-6 h-6',
};

// Loading spinner component
const LoadingSpinner: React.FC<{ size: ButtonSize }> = ({ size }) => (
  <svg
    className={clsx('animate-spin', iconSizes[size])}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

// Enhanced Button Component
export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  state = 'default',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  rounded = false,
  shadow = false,
  href,
  as = 'button',
  className,
  disabled,
  ...rest
}) => {
  const isDisabled = disabled || state === 'disabled';
  const isLoading = state === 'loading';
  
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium border transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Conditional styles
  const conditionalStyles = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    {
      'w-full': fullWidth,
      'rounded-full': rounded,
      'shadow-md hover:shadow-lg': shadow,
      'cursor-not-allowed opacity-50': isDisabled,
      'cursor-wait': isLoading,
    },
    className
  );

  // Content with icon and loading state
  const renderContent = () => (
    <>
      {isLoading && (
        <LoadingSpinner size={size} />
      )}
      
      {!isLoading && icon && iconPosition === 'left' && (
        <span className={clsx('flex-shrink-0', iconSizes[size], children && 'mr-2')}>
          {icon}
        </span>
      )}
      
      {!isLoading && children && (
        <span className="flex-1">{children}</span>
      )}
      
      {!isLoading && icon && iconPosition === 'right' && (
        <span className={clsx('flex-shrink-0', iconSizes[size], children && 'ml-2')}>
          {icon}
        </span>
      )}
    </>
  );

  // Render as link if href is provided
  if (href && as === 'a') {
    return (
      <a
        href={href}
        className={conditionalStyles}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {renderContent()}
      </a>
    );
  }

  // Render as button
  return (
    <button
      className={conditionalStyles}
      disabled={isDisabled}
      {...rest}
    >
      {renderContent()}
    </button>
  );
};

export default EnhancedButton;
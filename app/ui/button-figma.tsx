import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const baseStyles =
  'inline-flex items-center justify-center font-inter font-medium rounded-[6px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F172A]';

const variantStyles: Record<ButtonVariant, string> = {
  default:
    'bg-default text-white hover:bg-default-dark active:bg-default border border-transparent',
  primary:
    'bg-primary text-white hover:bg-primary-dark active:bg-primary border border-transparent',
  secondary:
    'bg-secondary text-default hover:bg-secondary-dark active:bg-secondary border border-transparent',
  outline:
    'bg-outline text-default border border-outline-border hover:bg-outline-hover active:bg-outline-active',
  ghost:
    'bg-ghost text-default hover:bg-ghost-hover active:bg-ghost-active border border-transparent',
  danger:
    'bg-danger text-white hover:bg-danger-dark active:bg-danger border border-transparent',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1 text-[13px]',
  md: 'px-4 py-2 text-[14px]',
  lg: 'px-6 py-3 text-[16px]',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

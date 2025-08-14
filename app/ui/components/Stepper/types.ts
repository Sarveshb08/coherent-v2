import { StepperProps as MuiStepperProps } from '@mui/material';

export type StepAlignment = 'left' | 'center';

export interface StepData {
  /**
   * The primary label for the step
   */
  label: string;
  
  /**
   * Optional secondary text below the label
   */
  optional?: string;
  
  /**
   * Whether this step is completed
   */
  completed?: boolean;
  
  /**
   * Whether this step is disabled
   */
  disabled?: boolean;
}

export interface StepperProps extends Omit<MuiStepperProps, 'children'> {
  /**
   * Array of step data
   */
  steps: StepData[];
  
  /**
   * The index of the currently active step (0-based)
   * @default 0
   */
  activeStep?: number;
  
  /**
   * Orientation of the stepper
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Alignment of step labels
   * @default 'left'
   */
  alignment?: StepAlignment;
  
  /**
   * Whether to show optional text below labels
   * @default true
   */
  showOptional?: boolean;
  
  /**
   * Whether this is a small screen layout
   * @default false
   */
  smallScreen?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Callback fired when a step is clicked (for non-linear steppers)
   */
  onStepClick?: (step: number) => void;
}

import { StepperProps as MuiStepperProps, MobileStepperProps as MuiMobileStepperProps, StepProps as MuiStepProps } from '@mui/material';
import { ReactNode } from 'react';

/**
 * Props for the main Stepper component (desktop/tablet stepper)
 */
export interface StepperProps extends Omit<MuiStepperProps, 'orientation'> {
  /**
   * The active step (0-indexed)
   * @default 0
   */
  activeStep?: number;

  /**
   * The orientation of the stepper
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Text alignment for step labels
   * @default 'left'
   */
  textAlignment?: 'left' | 'center';

  /**
   * Whether this is displayed on a small screen
   * @default false
   */
  smallScreen?: boolean;

  /**
   * The steps to display
   */
  steps: StepData[];

  /**
   * Callback fired when a step is clicked
   */
  onStepClick?: (stepIndex: number) => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Props for the MobileStepper component
 */
export interface MobileStepperProps {
  /**
   * The active step (0-indexed)
   */
  activeStep: number;

  /**
   * Total number of steps
   */
  steps: number;

  /**
   * The variant of the mobile stepper
   * @default 'dots'
   */
  variant?: 'text' | 'dots' | 'progress';

  /**
   * Callback for the back button
   */
  onBack?: () => void;

  /**
   * Callback for the next button
   */
  onNext?: () => void;

  /**
   * Text for the back button
   * @default 'Back'
   */
  backButtonText?: string;

  /**
   * Text for the next button
   * @default 'Next'
   */
  nextButtonText?: string;

  /**
   * Whether the back button is disabled
   * @default false
   */
  backDisabled?: boolean;

  /**
   * Whether the next button is disabled
   * @default false
   */
  nextDisabled?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Data structure for each step
 */
export interface StepData {
  /**
   * The step label/title
   */
  label: string;

  /**
   * Optional text for the step
   */
  optional?: string;

  /**
   * Whether this step is completed
   * @default false
   */
  completed?: boolean;

  /**
   * Whether this step is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether this step has an error
   * @default false
   */
  error?: boolean;

  /**
   * Custom icon for the step
   */
  icon?: ReactNode;
}

/**
 * Props for individual Step component (internal use)
 */
export interface StepComponentProps extends Omit<MuiStepProps, 'children'> {
  /**
   * The step data
   */
  stepData: StepData;

  /**
   * Whether this step is active
   */
  active?: boolean;

  /**
   * Text alignment for the step label
   */
  textAlignment?: 'left' | 'center';

  /**
   * Callback when the step is clicked
   */
  onClick?: () => void;
}

/**
 * Export types for external use
 */
export type StepperOrientation = 'horizontal' | 'vertical';
export type StepperTextAlignment = 'left' | 'center';
export type MobileStepperVariant = 'text' | 'dots' | 'progress';
export type StepState = 'active' | 'completed' | 'error' | 'disabled' | 'default';
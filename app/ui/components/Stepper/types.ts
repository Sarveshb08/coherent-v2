import { 
  StepperProps as MuiStepperProps,
  MobileStepperProps as MuiMobileStepperProps,
  StepProps as MuiStepProps,
  StepLabelProps as MuiStepLabelProps
} from '@mui/material';
import { ReactNode } from 'react';

/**
 * Props for individual step configuration
 */
export interface StepConfig {
  /**
   * The label text for the step
   */
  label: string;
  /**
   * Optional descriptive text for the step
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
  /**
   * Content to render for this step (for DesktopStepper)
   */
  content?: ReactNode;
}

/**
 * Props for the main Stepper component
 */
export interface StepperProps extends Omit<MuiStepperProps, 'children'> {
  /**
   * Array of step configurations
   */
  steps: StepConfig[];
  /**
   * The currently active step (0-indexed)
   */
  activeStep: number;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether to show optional text for steps
   */
  showOptional?: boolean;
  /**
   * Alignment of step content
   * @default 'left'
   */
  alignment?: 'left' | 'center';
}

/**
 * Props for the MobileStepper component
 */
export interface MobileStepperProps extends Omit<MuiMobileStepperProps, 'steps'> {
  /**
   * Total number of steps
   */
  steps: number;
  /**
   * The currently active step (0-indexed)
   */
  activeStep: number;
  /**
   * Variant type for mobile stepper
   * @default 'dots'
   */
  variant?: 'text' | 'dots' | 'progress';
  /**
   * Handler for back button click
   */
  onBack?: () => void;
  /**
   * Handler for next button click
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
   */
  backButtonDisabled?: boolean;
  /**
   * Whether the next button is disabled
   */
  nextButtonDisabled?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Props for the DesktopStepper component
 */
export interface DesktopStepperProps extends Omit<StepperProps, 'orientation'> {
  /**
   * Content to render for the active step
   */
  children?: ReactNode;
  /**
   * Handler for back button click
   */
  onBack?: () => void;
  /**
   * Handler for next button click
   */
  onNext?: () => void;
  /**
   * Text for the back button
   * @default 'Back'
   */
  backButtonText?: string;
  /**
   * Text for the next button
   * @default 'Continue'
   */
  nextButtonText?: string;
  /**
   * Whether the back button is disabled
   */
  backButtonDisabled?: boolean;
  /**
   * Whether the next button is disabled
   */
  nextButtonDisabled?: boolean;
  /**
   * Whether to show action buttons
   * @default true
   */
  showActions?: boolean;
}

/**
 * Props for custom Step component
 */
export interface StepComponentProps extends MuiStepProps {
  /**
   * The step configuration
   */
  step: StepConfig;
  /**
   * Whether this step is active
   */
  active?: boolean;
  /**
   * Whether to show optional text
   */
  showOptional?: boolean;
  /**
   * Alignment of step content
   */
  alignment?: 'left' | 'center';
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Props for custom StepLabel component
 */
export interface StepLabelComponentProps extends MuiStepLabelProps {
  /**
   * The step configuration
   */
  step: StepConfig;
  /**
   * Whether to show optional text
   */
  showOptional?: boolean;
  /**
   * Alignment of step content
   */
  alignment?: 'left' | 'center';
  /**
   * Additional CSS classes
   */
  className?: string;
}
import React from 'react';
import {
  Stepper as MuiStepper,
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  MobileStepper as MuiMobileStepper,
  Button,
  LinearProgress,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { StepperProps, MobileStepperProps, StepComponentProps } from './types';

/**
 * Internal Step component
 */
const StepComponent: React.FC<StepComponentProps> = ({
  stepData,
  active = false,
  textAlignment = 'left',
  onClick,
  ...props
}) => {
  return (
    <MuiStep
      {...props}
      completed={stepData.completed}
      disabled={stepData.disabled}
      onClick={onClick}
    >
      <MuiStepLabel
        error={stepData.error}
        icon={stepData.icon}
        optional={stepData.optional ? <span>{stepData.optional}</span> : undefined}
        data-text-alignment={textAlignment}
      >
        {stepData.label}
      </MuiStepLabel>
    </MuiStep>
  );
};

/**
 * Main Stepper component for desktop and tablet layouts
 * 
 * @example
 * ```tsx
 * const steps = [
 *   { label: 'Select campaign settings', completed: true },
 *   { label: 'Create an ad group', optional: 'Optional' },
 *   { label: 'Create an ad' },
 * ];
 * 
 * <Stepper
 *   activeStep={1}
 *   steps={steps}
 *   orientation="horizontal"
 *   textAlignment="left"
 * />
 * ```
 */
export const Stepper: React.FC<StepperProps> = ({
  activeStep = 0,
  orientation = 'horizontal',
  textAlignment = 'left',
  smallScreen = false,
  steps,
  onStepClick,
  className,
  ...props
}) => {
  const theme = useTheme();
  
  return (
    <MuiStepper
      {...props}
      activeStep={activeStep}
      orientation={orientation}
      className={className}
      alternativeLabel={textAlignment === 'center' && orientation === 'horizontal'}
      sx={{
        ...(textAlignment === 'center' && orientation === 'horizontal' && {
          '& .MuiStepLabel-labelContainer': {
            textAlign: 'center',
          },
        }),
      }}
    >
      {steps.map((step, index) => (
        <StepComponent
          key={index}
          stepData={step}
          active={index === activeStep}
          textAlignment={textAlignment}
          onClick={onStepClick ? () => onStepClick(index) : undefined}
        />
      ))}
    </MuiStepper>
  );
};

/**
 * Mobile Stepper component for mobile layouts
 * 
 * @example
 * ```tsx
 * <MobileStepper
 *   variant="dots"
 *   steps={3}
 *   activeStep={1}
 *   onNext={handleNext}
 *   onBack={handleBack}
 *   backDisabled={activeStep === 0}
 *   nextDisabled={activeStep === 2}
 * />
 * ```
 */
export const MobileStepper: React.FC<MobileStepperProps> = ({
  activeStep,
  steps,
  variant = 'dots',
  onBack,
  onNext,
  backButtonText = 'Back',
  nextButtonText = 'Next',
  backDisabled = false,
  nextDisabled = false,
  className,
  ...props
}) => {
  const theme = useTheme();
  
  // For text variant, we'll use a custom implementation
  if (variant === 'text') {
    return (
      <Box 
        className={className}
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: `${theme.spacing(1)}`,
        }}
      >
        <Button
          size="small"
          onClick={onBack}
          disabled={backDisabled}
          startIcon={<KeyboardArrowLeft />}
          sx={{ color: backDisabled ? theme.palette.text.disabled : theme.palette.primary.main }}
        >
          {backButtonText}
        </Button>
        
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          color: theme.palette.stepper?.mobileStepper.text,
          fontFamily: theme.typography.fontFamily,
          fontSize: '14px',
          fontWeight: 400,
        }}>
          {activeStep + 1}/{steps}
        </Box>
        
        <Button
          size="small"
          onClick={onNext}
          disabled={nextDisabled}
          endIcon={<KeyboardArrowRight />}
          sx={{ color: nextDisabled ? theme.palette.text.disabled : theme.palette.primary.main }}
        >
          {nextButtonText}
        </Button>
      </Box>
    );
  }

  // For progress variant
  if (variant === 'progress') {
    return (
      <Box 
        className={className}
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: `${theme.spacing(1)}`,
          gap: 2,
        }}
      >
        <Button
          size="small"
          onClick={onBack}
          disabled={backDisabled}
          startIcon={<KeyboardArrowLeft />}
          sx={{ color: backDisabled ? theme.palette.text.disabled : theme.palette.primary.main }}
        >
          {backButtonText}
        </Button>
        
        <LinearProgress
          variant="determinate"
          value={(activeStep / (steps - 1)) * 100}
          sx={{ 
            flex: 1,
            height: 4,
            borderRadius: 2,
            backgroundColor: theme.palette.stepper?.mobileStepper.progressBackground,
            '& .MuiLinearProgress-bar': {
              backgroundColor: theme.palette.stepper?.mobileStepper.progressColor,
            },
          }}
        />
        
        <Button
          size="small"
          onClick={onNext}
          disabled={nextDisabled}
          endIcon={<KeyboardArrowRight />}
          sx={{ color: nextDisabled ? theme.palette.text.disabled : theme.palette.primary.main }}
        >
          {nextButtonText}
        </Button>
      </Box>
    );
  }

  // For dots variant (default)
  return (
    <MuiMobileStepper
      {...props}
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep}
      className={className}
      sx={{
        backgroundColor: 'transparent',
        '& .MuiMobileStepper-dot': {
          backgroundColor: theme.palette.stepper?.mobileStepper.dotInactive,
        },
        '& .MuiMobileStepper-dotActive': {
          backgroundColor: theme.palette.stepper?.mobileStepper.dotActive,
        },
      }}
      nextButton={
        <Button
          size="small"
          onClick={onNext}
          disabled={nextDisabled}
          endIcon={<KeyboardArrowRight />}
          sx={{ color: nextDisabled ? theme.palette.text.disabled : theme.palette.primary.main }}
        >
          {nextButtonText}
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={onBack}
          disabled={backDisabled}
          startIcon={<KeyboardArrowLeft />}
          sx={{ color: backDisabled ? theme.palette.text.disabled : theme.palette.primary.main }}
        >
          {backButtonText}
        </Button>
      }
    />
  );
};

/**
 * Responsive Stepper that automatically switches between desktop and mobile variants
 * based on screen size
 */
export const ResponsiveStepper: React.FC<StepperProps & {
  mobileVariant?: 'text' | 'dots' | 'progress';
  onNext?: () => void;
  onBack?: () => void;
  nextButtonText?: string;
  backButtonText?: string;
}> = ({
  mobileVariant = 'dots',
  onNext,
  onBack,
  nextButtonText,
  backButtonText,
  ...stepperProps
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile) {
    const mobileProps = {
      variant: mobileVariant,
      steps: stepperProps.steps.length,
      activeStep: stepperProps.activeStep || 0,
      onNext,
      onBack,
      nextButtonText,
      backButtonText,
      backDisabled: (stepperProps.activeStep || 0) === 0,
      nextDisabled: (stepperProps.activeStep || 0) === stepperProps.steps.length - 1,
    };
    
    return <MobileStepper {...mobileProps} />;
  }

  return <Stepper {...stepperProps} />;
};

export default Stepper;
import React from 'react';
import {
  Stepper as MuiStepper,
  Step as MuiStep,
  StepLabel as MuiStepLabel,
  MobileStepper as MuiMobileStepper,
  Button,
  LinearProgress,
  Box,
  Typography,
  Paper
} from '@mui/material';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon
} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import {
  StepperProps,
  MobileStepperProps,
  DesktopStepperProps,
  StepComponentProps,
  StepLabelComponentProps
} from './types';

/**
 * Custom Step component with enhanced styling
 */
const StepComponent: React.FC<StepComponentProps> = ({
  step,
  active,
  showOptional = false,
  alignment = 'left',
  className,
  ...props
}) => {
  return (
    <MuiStep
      className={clsx(className)}
      {...props}
    >
      <StepLabelComponent
        step={step}
        showOptional={showOptional}
        alignment={alignment}
        StepIconComponent={({ active, completed }) => (
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: completed || active ? 'secondary.main' : 'stepper.numberBackground',
              color: 'stepper.numberText',
              fontSize: '18px',
              fontFamily: 'Proxima Nova',
              fontWeight: 700,
            }}
          >
            {completed ? (
              <CheckIcon style={{ fontSize: 16, color: 'white' }} />
            ) : (
              <span>{props.index != null ? props.index + 1 : '1'}</span>
            )}
          </Box>
        )}
      />
    </MuiStep>
  );
};

/**
 * Custom StepLabel component with enhanced styling
 */
const StepLabelComponent: React.FC<StepLabelComponentProps> = ({
  step,
  showOptional = false,
  alignment = 'left',
  className,
  ...props
}) => {
  return (
    <MuiStepLabel
      className={clsx(className)}
      optional={
        showOptional && step.optional ? (
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.66',
              letterSpacing: '0.4px',
              color: 'stepper.optionalText',
            }}
          >
            {step.optional}
          </Typography>
        ) : undefined
      }
      {...props}
      sx={{
        '& .MuiStepLabel-label': {
          fontFamily: 'Roboto',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '1.57',
          letterSpacing: '0.1px',
          textAlign: alignment,
          '&.Mui-active': {
            color: 'stepper.activeText',
          },
          '&.Mui-completed': {
            color: 'stepper.completedText',
          },
          '&.Mui-disabled': {
            color: 'stepper.inactiveText',
          },
        },
        '& .MuiStepLabel-labelContainer': {
          textAlign: alignment,
          ...(alignment === 'center' && {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }),
        },
        ...props.sx,
      }}
    >
      {step.label}
    </MuiStepLabel>
  );
};

/**
 * Main Stepper component using MUI Stepper with design tokens from Figma
 * Supports both horizontal and vertical orientations with customizable styling
 */
export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  className,
  showOptional = false,
  alignment = 'left',
  orientation = 'horizontal',
  ...props
}) => {
  return (
    <MuiStepper
      activeStep={activeStep}
      orientation={orientation}
      className={clsx(className)}
      sx={{
        '& .MuiStepConnector-line': {
          borderColor: 'stepper.connector',
          borderTopWidth: 1,
        },
        '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
          borderColor: 'secondary.main',
        },
        '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
          borderColor: 'secondary.main',
        },
        ...(orientation === 'vertical' && {
          '& .MuiStepConnector-line': {
            borderLeftWidth: 1,
            borderTopWidth: 0,
            minHeight: 24,
          },
        }),
      }}
      {...props}
    >
      {steps.map((step, index) => (
        <StepComponent
          key={`step-${index}`}
          step={step}
          index={index}
          active={index === activeStep}
          completed={step.completed || index < activeStep}
          disabled={step.disabled}
          showOptional={showOptional}
          alignment={alignment}
        />
      ))}
    </MuiStepper>
  );
};

/**
 * MobileStepper component for mobile-friendly step navigation
 * Supports text, dots, and progress variants as shown in Figma
 */
export const MobileStepper: React.FC<MobileStepperProps> = ({
  steps,
  activeStep,
  variant = 'dots',
  onBack,
  onNext,
  backButtonText = 'Back',
  nextButtonText = 'Next',
  backButtonDisabled = false,
  nextButtonDisabled = false,
  className,
  ...props
}) => {
  // Extract button props from the spread to avoid conflicts
  const { nextButton: _, backButton: __, ...otherProps } = props as any;

  const nextButton = (
    <Button
      size="small"
      onClick={onNext}
      disabled={nextButtonDisabled || activeStep === steps - 1}
      sx={{
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '22px',
        letterSpacing: '0.46px',
        textTransform: 'uppercase',
        color: nextButtonDisabled || activeStep === steps - 1 ? 'action.disabled' : 'secondary.main',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
      endIcon={<ChevronRightIcon style={{ width: 16, height: 16 }} />}
    >
      {nextButtonText}
    </Button>
  );

  const backButton = (
    <Button
      size="small"
      onClick={onBack}
      disabled={backButtonDisabled || activeStep === 0}
      sx={{
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '13px',
        lineHeight: '22px',
        letterSpacing: '0.46px',
        textTransform: 'uppercase',
        color: 'action.disabled',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
      startIcon={<ChevronLeftIcon style={{ width: 16, height: 16 }} />}
    >
      {backButtonText}
    </Button>
  );

  return (
    <MuiMobileStepper
      steps={steps}
      position="static"
      activeStep={activeStep}
      variant={variant}
      className={clsx(className)}
      nextButton={nextButton}
      backButton={backButton}
      sx={{
        padding: '8px',
        backgroundColor: 'transparent',
        '& .MuiMobileStepper-dot': {
          width: 8,
          height: 8,
          margin: '0 2px',
        },
        '& .MuiMobileStepper-dotActive': {
          backgroundColor: 'secondary.main',
        },
        '& .MuiMobileStepper-progress': {
          width: '200px',
          minWidth: '200px',
        },
      }}
      LinearProgressProps={{
        sx: {
          height: 4,
          borderRadius: 0,
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'secondary.main',
          },
          '& .MuiLinearProgress-root': {
            backgroundColor: 'action.disabledBackground',
          },
        },
      }}
      {...otherProps}
    />
  );
};

/**
 * DesktopStepper component with integrated content area and action buttons
 * Follows the Figma design for desktop stepper with content and navigation
 */
export const DesktopStepper: React.FC<DesktopStepperProps> = ({
  steps,
  activeStep,
  children,
  onBack,
  onNext,
  backButtonText = 'Back',
  nextButtonText = 'Continue',
  backButtonDisabled = false,
  nextButtonDisabled = false,
  showActions = true,
  className,
  showOptional = false,
  alignment = 'left',
  ...props
}) => {
  const currentStep = steps[activeStep];

  return (
    <Box
      className={clsx(className)}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      {/* Stepper */}
      <Box sx={{ padding: '0 16px' }}>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          showOptional={showOptional}
          alignment={alignment}
          {...props}
        />
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          padding: '24px',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.paper',
          border: '1px dashed',
          borderColor: 'action.disabled',
          borderRadius: 1,
        }}
      >
        {children || (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.66',
              letterSpacing: '0.4px',
              textAlign: 'center',
            }}
          >
            Instance Slot
          </Typography>
        )}
      </Box>

      {/* Action Buttons */}
      {showActions && (
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'flex-start',
          }}
        >
          <Button
            onClick={onBack}
            disabled={backButtonDisabled || activeStep === 0}
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '24px',
              letterSpacing: '0.4px',
              textTransform: 'uppercase',
              color: 'action.disabled',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            {backButtonText}
          </Button>
          <Button
            variant="contained"
            onClick={onNext}
            disabled={nextButtonDisabled || activeStep === steps.length - 1}
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '24px',
              letterSpacing: '0.4px',
              textTransform: 'uppercase',
              backgroundColor: 'secondary.main',
              '&:hover': {
                backgroundColor: 'secondary.dark',
              },
            }}
          >
            {nextButtonText}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Stepper;
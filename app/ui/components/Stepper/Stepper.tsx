import React from 'react';
import { 
  Stepper as MuiStepper, 
  Step, 
  StepLabel, 
  Box
} from '@mui/material';
import clsx from 'clsx';
import { StepperProps } from './types';
import { stepperTypography, colors } from '../../design-tokens';

/**
 * Stepper component using MUI with theme-based styling to match Figma design
 * Leverages MUI's built-in capabilities with minimal customization
 */
export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep = 0,
  orientation = 'horizontal',
  alignment = 'left',
  showOptional = true,
  smallScreen = false,
  className,
  onStepClick,
  ...props
}) => {
  // Use MUI's alternativeLabel for center alignment in horizontal mode
  const alternativeLabel = orientation === 'horizontal' && alignment === 'center';
  
  return (
    <MuiStepper
      activeStep={activeStep}
      orientation={orientation}
      alternativeLabel={alternativeLabel}
      className={clsx(className)}
      {...props}
    >
      {steps.map((step, index) => (
        <Step 
          key={index}
          completed={step.completed}
          disabled={step.disabled}
          onClick={onStepClick ? () => onStepClick(index) : undefined}
          sx={{
            cursor: onStepClick ? 'pointer' : 'default',
            ...(smallScreen && {
              flexDirection: 'column',
              alignItems: 'flex-start',
            }),
          }}
        >
          <StepLabel>
            {/* Use Box for optional text below label when needed */}
            {showOptional && step.optional ? (
              <Box>
                <Box component="span" sx={{ display: 'block' }}>
                  {step.label}
                </Box>
                <Box 
                  component="span" 
                  sx={{
                    display: 'block',
                    fontSize: stepperTypography.optionalText.fontSize,
                    fontFamily: stepperTypography.optionalText.fontFamily,
                    fontWeight: stepperTypography.optionalText.fontWeight,
                    lineHeight: stepperTypography.optionalText.lineHeight,
                    color: colors.text.primary,
                    marginTop: stepperTypography.optionalText.marginTop,
                  }}
                >
                  {step.optional}
                </Box>
              </Box>
            ) : (
              step.label
            )}
          </StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
};

export default Stepper;

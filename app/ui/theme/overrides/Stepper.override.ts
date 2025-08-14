import { Components } from '@mui/material/styles';
import { colors, stepperSizes, stepperTypography } from '../../design-tokens';

export const StepperOverrides: Components['MuiStepper'] = {
  styleOverrides: {
    root: {
      // Use MUI's built-in alternativeLabel for center alignment
      '&.MuiStepper-alternativeLabel .MuiStepLabel-labelContainer': {
        textAlign: 'center',
      },
    },
  },
};

export const StepOverrides: Components['MuiStep'] = {
  styleOverrides: {
    root: {
      // Step container styling
    },
  },
};

export const StepLabelOverrides: Components['MuiStepLabel'] = {
  styleOverrides: {
    root: {
      // Step label container
    },
    label: {
      fontFamily: stepperTypography.stepLabel.fontFamily,
      fontSize: stepperTypography.stepLabel.fontSize,
      lineHeight: stepperTypography.stepLabel.lineHeight,
      fontWeight: stepperTypography.stepLabel.fontWeightInactive, // Default Regular
      color: colors.text.secondary, // Default inactive color
      
      '&.Mui-active': {
        fontWeight: stepperTypography.stepLabel.fontWeightActive, // Medium for active
        color: colors.text.primary,
      },
      '&.Mui-completed': {
        fontWeight: stepperTypography.stepLabel.fontWeightActive, // Medium for completed
        color: colors.text.primary,
      },
      '&.Mui-disabled': {
        color: colors.text.disabled,
      },
    },
  },
};

export const StepConnectorOverrides: Components['MuiStepConnector'] = {
  styleOverrides: {
    root: {
      // Active and completed states using correct MUI syntax
      '&.Mui-active': {
        '& .MuiStepConnector-line': {
          borderColor: colors.stepper.activeBackground, // Active connector color (secondary)
        },
      },
      '&.Mui-completed': {
        '& .MuiStepConnector-line': {
          borderColor: colors.stepper.completedBackground, // Completed connector color (success/light)
        },
      },
    },
    line: {
      borderColor: colors.stepper.connector, // Inactive connector color from Figma
      transition: 'border-color 0.3s ease',
    },
    lineHorizontal: {
      borderTopWidth: `${stepperSizes.connectorHeight}px`,
    },
    lineVertical: {
      borderLeftWidth: `${stepperSizes.connectorWidth}px`,
      minHeight: `${stepperSizes.minConnectorHeight}px`,
    },
  },
};

export const StepIconOverrides: Components['MuiStepIcon'] = {
  styleOverrides: {
    root: {
      width: `${stepperSizes.iconSize}px`,
      height: `${stepperSizes.iconSize}px`,
      color: colors.stepper.numBackground, // Default inactive color
      
      '&.Mui-active': {
        color: colors.stepper.activeBackground, // Active step color (secondary)
      },
      '&.Mui-completed': {
        color: colors.stepper.completedBackground, // Completed step color (success/light)
      },
    },
    text: {
      fontFamily: stepperTypography.stepNumber.fontFamily,
      fontSize: stepperTypography.stepNumber.fontSize,
      fontWeight: stepperTypography.stepNumber.fontWeight,
      lineHeight: stepperTypography.stepNumber.lineHeight,
      fill: 'primary.contrastText', // White text
    },
  },
};

import { createTheme } from '@mui/material/styles';
import { colors, sizes, borderRadius, strokeWeights, textFieldSizes, notificationSizes, stepperSizes, stepperTypography } from '../design-tokens';


export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,          // #461E96
      light: colors.primary.hover,        // rgba(70, 30, 150, 0.04)
      dark: colors.primary.border,        // #461E96
      contrastText: '#fff',               // White text for better contrast
    },
    secondary: {
      main: colors.secondary.main,        // #6930CA
      light: colors.secondary.hover,      // rgba(105, 48, 202, 0.04)
      dark: colors.secondary.border,      // #6930CA
      contrastText: '#fff',               // White text for better contrast
    },
    error: {
      main: colors.error.main,            // #D92C2C
      dark: colors.error.border,          // #D92C2C
      contrastText: '#fff',               // White text for better contrast
    },
    warning: {
      main: colors.warning.main,          // #D68309
      dark: colors.warning.border,        // #D68309
      contrastText: '#fff',               // White text for better contrast
    },
    info: {
      main: colors.info.main,             // #D68309
      dark: colors.info.border,           // #D68309
      contrastText: '#fff',               // White text for better contrast
    },
    success: {
      main: colors.success.main,          // #00A331
      dark: colors.success.border,        // #00A331
      contrastText: '#fff',               // White text for better contrast
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
      disabled: colors.text.disabled,
    },
    background: {
      default: colors.background.white,
      paper: colors.background.white,
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  shape: {
    borderRadius: borderRadius.textField,
  },
  components: {
    // TextField component customization
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: `${borderRadius.textField}px`,
            fontSize: textFieldSizes.medium.fontSize,
            fontFamily: 'Roboto, sans-serif',
            '& fieldset': {
              borderWidth: `${strokeWeights.default}px`,
            },
            '&:hover fieldset': {
              borderWidth: `${strokeWeights.default}px`,
            },
            '&.Mui-focused fieldset': {
              borderWidth: `${strokeWeights.focused}px`,
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: textFieldSizes.medium.labelFontSize,
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
      variants: [
        {
          props: { size: 'small' },
          style: {
            '& .MuiOutlinedInput-root': {
              fontSize: textFieldSizes.small.fontSize,
              '& .MuiInputBase-input': {
                padding: textFieldSizes.small.padding,
              },
            },
            '& .MuiInputLabel-root': {
              fontSize: textFieldSizes.small.labelFontSize,
            },
          },
        },
      ],
    },

    // Stepper component customization
    MuiStepper: {
      styleOverrides: {
        root: {
          '&.MuiStepper-horizontal': {
            gap: `${stepperSizes.spacing.stepGap}px`,
          },
          '&.MuiStepper-vertical': {
            gap: `${stepperSizes.spacing.stepGap}px`,
          },
        },
      },
    },

    // StepIcon component customization
    MuiStepIcon: {
      styleOverrides: {
        root: {
          width: `${stepperSizes.stepIcon.size}px`,
          height: `${stepperSizes.stepIcon.size}px`,
          borderRadius: `${stepperSizes.stepIcon.borderRadius}px`,
          fontSize: `${stepperSizes.stepIcon.fontSize}px`,
          fontFamily: stepperTypography.stepNumber.fontFamily,
          fontWeight: stepperTypography.stepNumber.fontWeight,
          '&.Mui-active': {
            backgroundColor: colors.stepper.active.background,
            color: colors.stepper.active.text,
          },
          '&.Mui-completed': {
            backgroundColor: colors.stepper.completed.background,
            color: colors.stepper.completed.icon,
          },
          '&:not(.Mui-active):not(.Mui-completed)': {
            backgroundColor: colors.stepper.inactive.background,
            color: colors.stepper.inactive.text,
          },
        },
        text: {
          fontSize: `${stepperSizes.stepIcon.fontSize}px`,
          fontFamily: stepperTypography.stepNumber.fontFamily,
          fontWeight: stepperTypography.stepNumber.fontWeight,
        },
      },
    },

    // StepLabel component customization
    MuiStepLabel: {
      styleOverrides: {
        root: {
          '&[data-text-alignment="center"]': {
            alignItems: 'center',
            textAlign: 'center',
          },
        },
        label: {
          fontFamily: stepperTypography.stepTitle.fontFamily,
          fontWeight: stepperTypography.stepTitle.fontWeight,
          fontSize: stepperTypography.stepTitle.fontSize,
          lineHeight: stepperTypography.stepTitle.lineHeight,
          letterSpacing: stepperTypography.stepTitle.letterSpacing,
          '&.Mui-active': {
            color: colors.stepper.active.stepText,
          },
          '&.Mui-completed': {
            color: colors.stepper.completed.text,
          },
          '&:not(.Mui-active):not(.Mui-completed)': {
            color: colors.stepper.inactive.stepText,
          },
          '&[data-text-alignment="center"]': {
            fontFamily: stepperTypography.stepTitleCenter.fontFamily,
            fontWeight: stepperTypography.stepTitleCenter.fontWeight,
            fontSize: stepperTypography.stepTitleCenter.fontSize,
            lineHeight: stepperTypography.stepTitleCenter.lineHeight,
            letterSpacing: stepperTypography.stepTitleCenter.letterSpacing,
            textAlign: 'center',
          },
          '&.Mui-disabled': {
            fontFamily: stepperTypography.stepTitleInactive.fontFamily,
            fontWeight: stepperTypography.stepTitleInactive.fontWeight,
            fontSize: stepperTypography.stepTitleInactive.fontSize,
            lineHeight: stepperTypography.stepTitleInactive.lineHeight,
            letterSpacing: stepperTypography.stepTitleInactive.letterSpacing,
            textAlign: 'center',
          },
        },
      },
    },

    // StepConnector component customization
    MuiStepConnector: {
      styleOverrides: {
        root: {
          '&.Mui-active .MuiStepConnector-line': {
            borderColor: colors.stepper.connector.completed,
          },
          '&.Mui-completed .MuiStepConnector-line': {
            borderColor: colors.stepper.connector.completed,
          },
        },
        line: {
          borderWidth: `${stepperSizes.connector.thickness}px`,
          borderColor: colors.stepper.connector.inactive,
          '&.Mui-active': {
            borderColor: colors.stepper.connector.completed,
          },
          '&.Mui-completed': {
            borderColor: colors.stepper.connector.completed,
          },
        },
      },
    },

    // MobileStepper component customization
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          padding: `${stepperSizes.mobileStepper.padding}px`,
          gap: `${stepperSizes.spacing.stepGap}px`,
        },
        dots: {
          gap: `${stepperSizes.mobileStepper.dotGap}px`,
        },
        dot: {
          width: `${stepperSizes.mobileStepper.dotSize}px`,
          height: `${stepperSizes.mobileStepper.dotSize}px`,
          backgroundColor: colors.stepper.mobileStepper.dotInactive,
        },
        dotActive: {
          backgroundColor: colors.stepper.mobileStepper.dotActive,
        },
        progress: {
          minWidth: `${stepperSizes.mobileStepper.progressMinWidth}px`,
          height: `${stepperSizes.mobileStepper.progressHeight}px`,
          '& .MuiLinearProgress-bar': {
            backgroundColor: colors.stepper.mobileStepper.progressColor,
          },
          '& .MuiLinearProgress-root': {
            backgroundColor: colors.stepper.mobileStepper.progressBackground,
          },
        },
      },
    },
  },
});

export default theme;

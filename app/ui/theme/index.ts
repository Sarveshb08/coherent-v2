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
    stepper: {
      connector: colors.stepper.connector,
      activeConnector: colors.stepper.activeConnector,
      numberBackground: colors.stepper.numberBackground,
      activeNumberBackground: colors.stepper.activeNumberBackground,
      completedNumberBackground: colors.stepper.completedNumberBackground,
      numberText: colors.stepper.numberText,
      completedText: colors.stepper.completedText,
      activeText: colors.stepper.activeText,
      inactiveText: colors.stepper.inactiveText,
      optionalText: colors.stepper.optionalText,
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
          '& .MuiStepConnector-line': {
            borderColor: colors.stepper.connector,
            borderTopWidth: 1,
          },
          '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
            borderColor: colors.stepper.activeConnector,
          },
          '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
            borderColor: colors.stepper.activeConnector,
          },
        },
        vertical: {
          '& .MuiStepConnector-line': {
            borderLeftWidth: 1,
            borderTopWidth: 0,
            minHeight: 24,
          },
        },
      },
    },

    MuiStepIcon: {
      styleOverrides: {
        root: {
          width: stepperSizes.stepIcon.size,
          height: stepperSizes.stepIcon.size,
          borderRadius: stepperSizes.stepIcon.borderRadius,
          backgroundColor: colors.stepper.numberBackground,
          color: colors.stepper.numberText,
          fontFamily: stepperTypography.stepNumber.fontFamily,
          fontWeight: stepperTypography.stepNumber.fontWeight,
          fontSize: stepperTypography.stepNumber.fontSize,
          '&.Mui-active': {
            backgroundColor: colors.stepper.activeNumberBackground,
          },
          '&.Mui-completed': {
            backgroundColor: colors.stepper.completedNumberBackground,
          },
        },
      },
    },

    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontFamily: stepperTypography.stepLabel.fontFamily,
          fontWeight: stepperTypography.stepLabel.fontWeight,
          fontSize: stepperTypography.stepLabel.fontSize,
          lineHeight: stepperTypography.stepLabel.lineHeight,
          letterSpacing: stepperTypography.stepLabel.letterSpacing,
          '&.Mui-active': {
            color: colors.stepper.activeText,
          },
          '&.Mui-completed': {
            color: colors.stepper.completedText,
          },
          '&.Mui-disabled': {
            color: colors.stepper.inactiveText,
          },
        },
      },
    },

    MuiMobileStepper: {
      styleOverrides: {
        root: {
          padding: stepperSizes.mobileStepper.padding,
          backgroundColor: 'transparent',
        },
        dot: {
          width: stepperSizes.mobileStepper.dotSize,
          height: stepperSizes.mobileStepper.dotSize,
          margin: `0 ${parseInt(stepperSizes.mobileStepper.dotGap) / 2}px`,
        },
        dotActive: {
          backgroundColor: colors.stepper.activeConnector,
        },
        progress: {
          width: stepperSizes.mobileStepper.progressMinWidth,
          minWidth: stepperSizes.mobileStepper.progressMinWidth,
        },
      },
    },
  },
});

export default theme;

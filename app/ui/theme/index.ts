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
    // Add stepper colors to palette for easy access
    stepper: {
      completed: {
        background: colors.stepper.completed.background,
        icon: colors.stepper.completed.icon,
        text: colors.stepper.completed.text,
      },
      active: {
        background: colors.stepper.active.background,
        text: colors.stepper.active.text,
        stepText: colors.stepper.active.stepText,
      },
      inactive: {
        background: colors.stepper.inactive.background,
        text: colors.stepper.inactive.text,
        stepText: colors.stepper.inactive.stepText,
      },
      connector: {
        completed: colors.stepper.connector.completed,
        inactive: colors.stepper.connector.inactive,
      },
      mobileStepper: {
        dotActive: colors.stepper.mobileStepper.dotActive,
        dotInactive: colors.stepper.mobileStepper.dotInactive,
        progressColor: colors.stepper.mobileStepper.progressColor,
        progressBackground: colors.stepper.mobileStepper.progressBackground,
        text: colors.stepper.mobileStepper.text,
      },
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
        root: ({ theme }) => ({
          '&.MuiStepper-horizontal': {
            gap: `${stepperSizes.spacing.stepGap}px`,
          },
          '&.MuiStepper-vertical': {
            gap: `${stepperSizes.spacing.stepGap}px`,
          },
        }),
      },
    },

    // StepIcon component customization
    MuiStepIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: `${stepperSizes.stepIcon.size}px`,
          height: `${stepperSizes.stepIcon.size}px`,
          borderRadius: `${stepperSizes.stepIcon.borderRadius}px`,
          fontSize: `${stepperSizes.stepIcon.fontSize}px`,
          fontFamily: stepperTypography.stepNumber.fontFamily,
          fontWeight: stepperTypography.stepNumber.fontWeight,
          '&.Mui-active': {
            backgroundColor: theme.palette.stepper?.active.background,
            color: theme.palette.stepper?.active.text,
          },
          '&.Mui-completed': {
            backgroundColor: theme.palette.stepper?.completed.background,
            color: theme.palette.stepper?.completed.icon,
          },
          '&:not(.Mui-active):not(.Mui-completed)': {
            backgroundColor: theme.palette.stepper?.inactive.background,
            color: theme.palette.stepper?.inactive.text,
          },
        }),
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
        root: ({ theme }) => ({
          '&[data-text-alignment="center"]': {
            alignItems: 'center',
            textAlign: 'center',
          },
        }),
        label: ({ theme }) => ({
          fontFamily: stepperTypography.stepTitle.fontFamily,
          fontWeight: stepperTypography.stepTitle.fontWeight,
          fontSize: stepperTypography.stepTitle.fontSize,
          lineHeight: stepperTypography.stepTitle.lineHeight,
          letterSpacing: stepperTypography.stepTitle.letterSpacing,
          '&.Mui-active': {
            color: theme.palette.stepper?.active.stepText,
          },
          '&.Mui-completed': {
            color: theme.palette.stepper?.completed.text,
          },
          '&:not(.Mui-active):not(.Mui-completed)': {
            color: theme.palette.stepper?.inactive.stepText,
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
        }),
        alternativeLabel: ({ theme }) => ({
          '& .MuiStepLabel-labelContainer': {
            textAlign: 'center',
          },
        }),
      },
    },

    // StepConnector component customization
    MuiStepConnector: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.Mui-active .MuiStepConnector-line': {
            borderColor: theme.palette.stepper?.connector.completed,
          },
          '&.Mui-completed .MuiStepConnector-line': {
            borderColor: theme.palette.stepper?.connector.completed,
          },
        }),
        line: ({ theme }) => ({
          borderWidth: `${stepperSizes.connector.thickness}px`,
          borderColor: theme.palette.stepper?.connector.inactive,
          '&.Mui-active': {
            borderColor: theme.palette.stepper?.connector.completed,
          },
          '&.Mui-completed': {
            borderColor: theme.palette.stepper?.connector.completed,
          },
        }),
      },
    },

    // MobileStepper component customization
    MuiMobileStepper: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: `${stepperSizes.mobileStepper.padding}px`,
          gap: `${stepperSizes.spacing.stepGap}px`,
          backgroundColor: 'transparent',
        }),
        dots: {
          gap: `${stepperSizes.mobileStepper.dotGap}px`,
        },
        dot: ({ theme }) => ({
          width: `${stepperSizes.mobileStepper.dotSize}px`,
          height: `${stepperSizes.mobileStepper.dotSize}px`,
          backgroundColor: theme.palette.stepper?.mobileStepper.dotInactive,
        }),
        dotActive: ({ theme }) => ({
          backgroundColor: theme.palette.stepper?.mobileStepper.dotActive,
        }),
        progress: ({ theme }) => ({
          minWidth: `${stepperSizes.mobileStepper.progressMinWidth}px`,
          height: `${stepperSizes.mobileStepper.progressHeight}px`,
          '& .MuiLinearProgress-bar': {
            backgroundColor: theme.palette.stepper?.mobileStepper.progressColor,
          },
          '& .MuiLinearProgress-root': {
            backgroundColor: theme.palette.stepper?.mobileStepper.progressBackground,
          },
        }),
      },
    },

    // LinearProgress component customization for stepper progress variant
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.MuiLinearProgress-colorPrimary': {
            backgroundColor: theme.palette.stepper?.mobileStepper.progressBackground,
          },
        }),
        bar: ({ theme }) => ({
          '&.MuiLinearProgress-barColorPrimary': {
            backgroundColor: theme.palette.stepper?.mobileStepper.progressColor,
          },
        }),
      },
    },
  },
});

export default theme;

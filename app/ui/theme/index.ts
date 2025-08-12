import { createTheme } from '@mui/material/styles';
import { colors, sizes, borderRadius, strokeWeights, textFieldSizes, notificationSizes, speedDialSizes } from '../design-tokens';


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

    // SpeedDial component customization
    MuiSpeedDial: {
      styleOverrides: {
        root: {
          '& .MuiSpeedDial-fab': {
            width: speedDialSizes.main.size,
            height: speedDialSizes.main.size,
            backgroundColor: colors.primary.main,
            color: '#fff',
            '&:hover': {
              backgroundColor: colors.primary.main,
              filter: 'brightness(1.1)',
            },
          },
        },
      },
    },

    MuiSpeedDialAction: {
      styleOverrides: {
        fab: {
          width: speedDialSizes.action.size,
          height: speedDialSizes.action.size,
          backgroundColor: colors.background.white,
          color: colors.text.primary,
          boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
          '&:hover': {
            backgroundColor: colors.background.white,
            filter: 'brightness(0.95)',
          },
        },
      },
    },
  },
});

export default theme;

import { Components } from '@mui/material/styles';
import { borderRadius, strokeWeights, textFieldSizes } from '../../design-tokens';

export const TextFieldOverrides: Components['MuiTextField'] = {
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
};

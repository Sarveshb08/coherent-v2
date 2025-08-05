import React from 'react';
import { 
  RadioGroup as MuiRadioGroup, 
  RadioGroupProps as MuiRadioGroupProps,
  FormControl,
  FormLabel,
  FormHelperText,
  FormControlLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { Radio, RadioProps } from './Radio';
import { ColorVariant, RadioSizeVariant } from '../../design-tokens';

// Custom styled FormControl for consistent spacing
const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiFormLabel-root': {
    fontSize: '14px',
    fontWeight: 600,
    color: 'rgba(0, 0, 0, 0.87)',
    marginBottom: '8px',
    
    '&.Mui-focused': {
      color: 'rgba(0, 0, 0, 0.87)',
    },
    
    '&.Mui-error': {
      color: '#D32F2F',
    },
    
    '&.Mui-disabled': {
      color: 'rgba(0, 0, 0, 0.38)',
    },
  },
  
  '& .MuiFormHelperText-root': {
    fontSize: '12px',
    marginTop: '8px',
    marginLeft: 0,
    
    '&.Mui-error': {
      color: '#D32F2F',
    },
  },
}));

// Custom styled RadioGroup for consistent spacing
const StyledRadioGroup = styled(MuiRadioGroup)(({ theme }) => ({
  '& .MuiFormControlLabel-root': {
    marginLeft: 0,
    marginRight: '16px',
    
    '& .MuiFormControlLabel-label': {
      fontSize: '14px',
      color: 'rgba(0, 0, 0, 0.87)',
      
      '&.Mui-disabled': {
        color: 'rgba(0, 0, 0, 0.38)',
      },
    },
  },
}));

export interface RadioOption {
  /**
   * The value of the radio option
   */
  value: string;
  
  /**
   * The label to display for this option
   */
  label: string;
  
  /**
   * Whether this option is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Additional props to pass to the Radio component
   */
  radioProps?: Partial<RadioProps>;
}

export interface RadioGroupProps extends Omit<MuiRadioGroupProps, 'color' | 'size'> {
  /**
   * Array of radio options
   */
  options: RadioOption[];

  /**
   * The color variant for all radios in the group
   * @default 'primary'
   */
  color?: ColorVariant;

  /**
   * The size variant for all radios in the group
   * @default 'medium'
   */
  size?: RadioSizeVariant;

  /**
   * The label for the radio group
   */
  label?: string;

  /**
   * Helper text to display below the radio group
   */
  helperText?: string;

  /**
   * Whether the radio group is in an error state
   * @default false
   */
  error?: boolean;

  /**
   * Whether the radio group is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the radio group is required
   * @default false
   */
  required?: boolean;

  /**
   * The direction to layout the radio options
   * @default 'column'
   */
  direction?: 'row' | 'column';

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Callback fired when the value changes
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}

/**
 * RadioGroup component based on Figma design system
 * Provides a group of radio buttons with single selection behavior
 * Supports all color variants, sizes, and states from the design system
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  color = 'primary',
  size = 'medium',
  label,
  helperText,
  error = false,
  disabled = false,
  required = false,
  direction = 'column',
  className,
  onChange,
  value,
  defaultValue,
  ...props
}) => {
  return (
    <StyledFormControl
      className={clsx(className)}
      error={error}
      disabled={disabled}
      required={required}
    >
      {label && (
        <FormLabel component="legend">
          {label}
          {required && ' *'}
        </FormLabel>
      )}
      
      <StyledRadioGroup
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        row={direction === 'row'}
        {...props}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            label={option.label}
            disabled={disabled || option.disabled}
            control={
              <Radio
                color={color}
                size={size}
                {...option.radioProps}
              />
            }
          />
        ))}
      </StyledRadioGroup>
      
      {helperText && (
        <FormHelperText>
          {helperText}
        </FormHelperText>
      )}
    </StyledFormControl>
  );
};

export default RadioGroup;
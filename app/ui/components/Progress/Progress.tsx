import React from 'react';
import { LinearProgress, LinearProgressProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { colors } from '../../design-tokens';

// Progress type variants
export type ProgressType = 'determinate' | 'indeterminate' | 'buffer';

// Progress color variants
export type ProgressColorVariant = 'primary' | 'secondary' | 'inherit';

// Custom styled progress using MUI's styled API
const StyledLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => !['colorVariant'].includes(prop as string),
})<{
  colorVariant: ProgressColorVariant;
}>(({ theme, colorVariant }) => {
  const progressColor = colors.progress[colorVariant];
  
  return {
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.12)', // Background track color
    
    '& .MuiLinearProgress-bar': {
      backgroundColor: progressColor,
      borderRadius: 2,
    },
    
    // Buffer variant specific styling
    '& .MuiLinearProgress-bar1Buffer': {
      backgroundColor: progressColor,
    },
    
    '& .MuiLinearProgress-bar2Buffer': {
      backgroundColor: `${progressColor}40`, // 25% opacity for buffer bar
    },
    
    // Indeterminate animation
    '& .MuiLinearProgress-bar1Indeterminate': {
      backgroundColor: progressColor,
    },
    
    '& .MuiLinearProgress-bar2Indeterminate': {
      backgroundColor: progressColor,
    },
  };
});

// Container for progress with optional label
const ProgressContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
  maxWidth: '200px', // Default width from Figma design
});

const LabelContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export interface ProgressProps extends Omit<LinearProgressProps, 'color' | 'variant'> {
  /**
   * The type of progress indicator
   * @default 'determinate'
   */
  type?: ProgressType;
  
  /**
   * The color variant of the progress indicator
   * @default 'primary'
   */
  color?: ProgressColorVariant;
  
  /**
   * The value of the progress indicator for determinate type.
   * Value between 0 and 100.
   */
  value?: number;
  
  /**
   * The value for the buffer progress.
   * Value between 0 and 100.
   */
  valueBuffer?: number;
  
  /**
   * Whether to show a label with the progress percentage
   * @default false
   */
  showLabel?: boolean;
  
  /**
   * Custom label text. If not provided and showLabel is true, 
   * displays the percentage value
   */
  label?: string;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Custom width for the progress bar
   * @default '200px'
   */
  width?: string | number;
}

/**
 * Progress component based on Figma design system
 * Supports determinate, indeterminate, and buffer progress types
 * with primary, secondary, and inherit color variants
 */
export const Progress: React.FC<ProgressProps> = ({
  type = 'determinate',
  color = 'primary',
  value = 0,
  valueBuffer,
  showLabel = false,
  label,
  className,
  width = '200px',
  ...props
}) => {
  // Convert our type prop to MUI's variant prop
  const muiVariant = type === 'buffer' ? 'buffer' : type;
  
  // Format the label text
  const getLabelText = () => {
    if (label) return label;
    if (showLabel && type === 'determinate') {
      return `${Math.round(value)}%`;
    }
    return '';
  };

  const labelText = getLabelText();

  return (
    <ProgressContainer 
      className={clsx(className)}
      style={{ maxWidth: width }}
    >
      {showLabel && labelText && (
        <LabelContainer>
          <Typography variant="body2" color="textSecondary">
            {labelText}
          </Typography>
        </LabelContainer>
      )}
      
      <StyledLinearProgress
        colorVariant={color}
        variant={muiVariant}
        value={value}
        valueBuffer={valueBuffer}
        {...props}
      />
    </ProgressContainer>
  );
};

export default Progress;
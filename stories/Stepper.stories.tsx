import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { 
  Stepper, 
  MobileStepper, 
  DesktopStepper,
  type StepConfig,
  type StepperProps,
  type MobileStepperProps,
  type DesktopStepperProps
} from '../app/ui/components/Stepper';
import { ThemeProvider } from '../app/ui/theme/ThemeProvider';
import { Box, Typography, Button } from '@mui/material';

// Sample step configurations
const sampleSteps: StepConfig[] = [
  { label: 'Step title', completed: true },
  { label: 'Step title', optional: 'Optional' },
  { label: 'Step title' },
];

const sampleStepsWithOptional: StepConfig[] = [
  { label: 'Step title', optional: 'Optional', completed: true },
  { label: 'Step title', optional: 'Optional' },
  { label: 'Step title', optional: 'Optional' },
];

// Interactive wrapper component for stories
const InteractiveStepper = (props: StepperProps) => {
  const [activeStep, setActiveStep] = useState(1);
  return <Stepper {...props} activeStep={activeStep} />;
};

const InteractiveMobileStepper = (props: Omit<MobileStepperProps, 'activeStep' | 'onBack' | 'onNext'>) => {
  const [activeStep, setActiveStep] = useState(1);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, props.steps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <MobileStepper 
      {...props} 
      activeStep={activeStep} 
      onNext={handleNext} 
      onBack={handleBack} 
    />
  );
};

const InteractiveDesktopStepper = (props: Omit<DesktopStepperProps, 'activeStep' | 'onBack' | 'onNext'>) => {
  const [activeStep, setActiveStep] = useState(1);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, props.steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <DesktopStepper 
      {...props} 
      activeStep={activeStep} 
      onNext={handleNext} 
      onBack={handleBack} 
    >
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body1" color="text.secondary">
          Content for step {activeStep + 1}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {props.steps[activeStep]?.label}
        </Typography>
      </Box>
    </DesktopStepper>
  );
};

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive stepper component collection including Stepper, MobileStepper, and DesktopStepper. Built with Material UI and design tokens from Figma. Supports horizontal/vertical orientations, step states, and various mobile variants.',
      },
    },
  },
  argTypes: {
    activeStep: {
      control: { type: 'number', min: 0, max: 2 },
      description: 'The currently active step (0-indexed)',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the stepper',
    },
    showOptional: {
      control: 'boolean',
      description: 'Whether to show optional text for steps',
    },
    alignment: {
      control: 'select',
      options: ['left', 'center'],
      description: 'Alignment of step content',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Main Stepper Stories
export const Default: Story = {
  args: {
    steps: sampleSteps,
    activeStep: 1,
    orientation: 'horizontal',
    showOptional: false,
    alignment: 'left',
  },
};

export const HorizontalWithOptional: Story = {
  args: {
    steps: sampleStepsWithOptional,
    activeStep: 1,
    orientation: 'horizontal',
    showOptional: true,
    alignment: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Horizontal stepper showing optional text for each step',
      },
    },
  },
};

export const VerticalAlignment: Story = {
  render: () => (
    <Box sx={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Left Aligned</Typography>
        <Stepper 
          steps={sampleSteps} 
          activeStep={1} 
          orientation="vertical" 
          alignment="left"
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Center Aligned</Typography>
        <Stepper 
          steps={sampleSteps} 
          activeStep={1} 
          orientation="vertical" 
          alignment="center"
        />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical stepper with left and center alignment options',
      },
    },
  },
};

export const HorizontalAlignment: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Left Aligned (Default)</Typography>
        <Stepper 
          steps={sampleStepsWithOptional} 
          activeStep={1} 
          orientation="horizontal" 
          alignment="left"
          showOptional={true}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Center Aligned</Typography>
        <Stepper 
          steps={sampleStepsWithOptional} 
          activeStep={1} 
          orientation="horizontal" 
          alignment="center"
          showOptional={true}
        />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Horizontal stepper with left and center alignment, showing optional text',
      },
    },
  },
};

export const AllStates: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Step 1 Active</Typography>
        <Stepper steps={sampleSteps} activeStep={0} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Step 2 Active</Typography>
        <Stepper steps={sampleSteps} activeStep={1} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Step 3 Active</Typography>
        <Stepper steps={sampleSteps} activeStep={2} />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All possible step states showing progression through the stepper',
      },
    },
  },
};

// MobileStepper Stories
export const MobileStepperText: Story = {
  render: () => (
    <InteractiveMobileStepper 
      steps={5} 
      variant="text"
      sx={{ maxWidth: 400, backgroundColor: 'background.paper', border: 1, borderColor: 'divider' }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Mobile stepper with text variant showing "1/5" format',
      },
    },
  },
};

export const MobileStepperDots: Story = {
  render: () => (
    <InteractiveMobileStepper 
      steps={6} 
      variant="dots"
      sx={{ maxWidth: 400, backgroundColor: 'background.paper', border: 1, borderColor: 'divider' }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Mobile stepper with dots variant showing progress dots',
      },
    },
  },
};

export const MobileStepperProgress: Story = {
  render: () => (
    <InteractiveMobileStepper 
      steps={5} 
      variant="progress"
      sx={{ maxWidth: 400, backgroundColor: 'background.paper', border: 1, borderColor: 'divider' }}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Mobile stepper with progress variant showing linear progress bar',
      },
    },
  },
};

export const MobileStepperVariants: Story = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Text Variant</Typography>
        <InteractiveMobileStepper 
          steps={5} 
          variant="text"
          sx={{ backgroundColor: 'background.paper', border: 1, borderColor: 'divider' }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Dots Variant</Typography>
        <InteractiveMobileStepper 
          steps={6} 
          variant="dots"
          sx={{ backgroundColor: 'background.paper', border: 1, borderColor: 'divider' }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Progress Variant</Typography>
        <InteractiveMobileStepper 
          steps={5} 
          variant="progress"
          sx={{ backgroundColor: 'background.paper', border: 1, borderColor: 'divider' }}
        />
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All MobileStepper variants: text, dots, and progress',
      },
    },
  },
};

// DesktopStepper Stories
export const DesktopStepperDefault: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <InteractiveDesktopStepper steps={sampleSteps} />
    </Box>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Desktop stepper with integrated content area and action buttons',
      },
    },
  },
};

export const DesktopStepperWithOptional: Story = {
  render: () => (
    <Box sx={{ width: '100%', maxWidth: 600 }}>
      <InteractiveDesktopStepper steps={sampleStepsWithOptional} showOptional={true} />
    </Box>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Desktop stepper showing optional text for steps',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>Interactive Examples</Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Horizontal Stepper</Typography>
          <InteractiveStepper steps={sampleSteps} orientation="horizontal" />
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Vertical Stepper</Typography>
          <InteractiveStepper steps={sampleSteps} orientation="vertical" />
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Mobile Steppers</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <InteractiveMobileStepper steps={5} variant="dots" />
            <InteractiveMobileStepper steps={5} variant="progress" />
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 600 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Desktop Stepper</Typography>
          <InteractiveDesktopStepper steps={sampleSteps} />
        </Box>
      </Box>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Interactive examples of all stepper variants - click the buttons to navigate through steps',
      },
    },
  },
};
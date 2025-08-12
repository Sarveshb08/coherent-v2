import type { Meta, StoryObj } from '@storybook/react';
import { Stepper, MobileStepper, ResponsiveStepper } from '../../app/ui/components/Stepper';
import { StepData } from '../../app/ui/components/Stepper/types';
import { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive stepper component system for multi-step processes. Supports desktop/tablet layouts with horizontal and vertical orientations, plus mobile-optimized variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    activeStep: {
      control: { type: 'number', min: 0, max: 4 },
      description: 'The currently active step (0-indexed)',
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the stepper',
    },
    textAlignment: {
      control: { type: 'radio' },
      options: ['left', 'center'],
      description: 'Text alignment for step labels',
    },
    smallScreen: {
      control: { type: 'boolean' },
      description: 'Whether this is displayed on a small screen',
    },
    steps: {
      control: { type: 'object' },
      description: 'Array of step data objects',
    },
    onStepClick: {
      action: 'step clicked',
      description: 'Callback when a step is clicked',
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample step data
const basicSteps: StepData[] = [
  { label: 'Select campaign settings', completed: true },
  { label: 'Create an ad group' },
  { label: 'Create an ad' },
];

const optionalSteps: StepData[] = [
  { label: 'Account Information', completed: true },
  { label: 'Personal Details', optional: 'Optional' },
  { label: 'Verification' },
  { label: 'Confirmation' },
];

const complexSteps: StepData[] = [
  { label: 'Registration', completed: true },
  { label: 'Profile Setup', completed: true },
  { label: 'Email Verification', optional: 'Optional' },
  { label: 'Payment Method', error: true },
  { label: 'Final Review', disabled: true },
];

// Template for interactive stories
const InteractiveTemplate = (args: any) => {
  const [activeStep, setActiveStep] = useState(args.activeStep || 0);
  
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Stepper 
        {...args}
        activeStep={activeStep}
        onStepClick={(stepIndex) => {
          setActiveStep(stepIndex);
          args.onStepClick?.(stepIndex);
        }}
      />
      <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
        Current Step: {activeStep + 1} of {args.steps.length}
      </Typography>
    </Box>
  );
};

// Default horizontal stepper
export const Default: Story = {
  args: {
    activeStep: 1,
    orientation: 'horizontal',
    textAlignment: 'left',
    steps: basicSteps,
    smallScreen: false,
  },
};

// Interactive horizontal stepper
export const Interactive: Story = {
  render: InteractiveTemplate,
  args: {
    activeStep: 1,
    orientation: 'horizontal',
    textAlignment: 'left',
    steps: basicSteps,
    smallScreen: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on step icons to navigate between steps.',
      },
    },
  },
};

// Vertical orientation
export const Vertical: Story = {
  args: {
    activeStep: 1,
    orientation: 'vertical',
    textAlignment: 'left',
    steps: basicSteps,
    smallScreen: false,
  },
  decorators: [
    (Story) => (
      <Box sx={{ height: '400px', display: 'flex', alignItems: 'flex-start' }}>
        <Story />
      </Box>
    ),
  ],
};

// Center-aligned text
export const CenterAligned: Story = {
  args: {
    activeStep: 1,
    orientation: 'horizontal',
    textAlignment: 'center',
    steps: basicSteps,
    smallScreen: false,
  },
};

// With optional steps
export const WithOptionalSteps: Story = {
  args: {
    activeStep: 2,
    orientation: 'horizontal',
    textAlignment: 'left',
    steps: optionalSteps,
    smallScreen: false,
  },
};

// Complex example with all states
export const AllStates: Story = {
  args: {
    activeStep: 3,
    orientation: 'horizontal',
    textAlignment: 'left',
    steps: complexSteps,
    smallScreen: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates completed, active, optional, error, and disabled step states.',
      },
    },
  },
};

// Vertical with optional steps
export const VerticalWithOptional: Story = {
  args: {
    activeStep: 2,
    orientation: 'vertical',
    textAlignment: 'left',
    steps: optionalSteps,
    smallScreen: false,
  },
  decorators: [
    (Story) => (
      <Box sx={{ height: '500px', display: 'flex', alignItems: 'flex-start' }}>
        <Story />
      </Box>
    ),
  ],
};

// Small screen layout
export const SmallScreen: Story = {
  args: {
    activeStep: 1,
    orientation: 'horizontal',
    textAlignment: 'left',
    steps: basicSteps,
    smallScreen: true,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '400px' }}>
        <Story />
      </Box>
    ),
  ],
};

// Mobile Stepper Stories
const MobileStepperTemplate = (args: any) => {
  const [activeStep, setActiveStep] = useState(args.activeStep || 0);
  
  const handleNext = () => {
    setActiveStep((prev: number) => Math.min(prev + 1, args.steps - 1));
  };
  
  const handleBack = () => {
    setActiveStep((prev: number) => Math.max(prev - 1, 0));
  };
  
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <MobileStepper 
        {...args}
        activeStep={activeStep}
        onNext={handleNext}
        onBack={handleBack}
        backDisabled={activeStep === 0}
        nextDisabled={activeStep === args.steps - 1}
      />
      <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
        Current Step: {activeStep + 1} of {args.steps}
      </Typography>
    </Box>
  );
};

// Mobile Stepper - Dots variant
export const MobileStepperDots: Story = {
  render: MobileStepperTemplate as any,
  args: {
    activeStep: 1,
    steps: 5,
    variant: 'dots',
    backButtonText: 'Back',
    nextButtonText: 'Next',
  } as any,
  parameters: {
    docs: {
      description: {
        story: 'Mobile stepper with dots indicator. Use navigation buttons to move between steps.',
      },
    },
  },
};

// Mobile Stepper - Text variant
export const MobileStepperText: Story = {
  render: MobileStepperTemplate as any,
  args: {
    activeStep: 2,
    steps: 5,
    variant: 'text',
    backButtonText: 'Previous',
    nextButtonText: 'Continue',
  } as any,
};

// Mobile Stepper - Progress variant
export const MobileStepperProgress: Story = {
  render: MobileStepperTemplate as any,
  args: {
    activeStep: 1,
    steps: 4,
    variant: 'progress',
    backButtonText: 'Back',
    nextButtonText: 'Next',
  } as any,
};

// Responsive Stepper
const ResponsiveTemplate = (args: any) => {
  const [activeStep, setActiveStep] = useState(args.activeStep || 0);
  
  const handleNext = () => {
    setActiveStep((prev: number) => Math.min(prev + 1, args.steps.length - 1));
  };
  
  const handleBack = () => {
    setActiveStep((prev: number) => Math.max(prev - 1, 0));
  };
  
  return (
    <Paper sx={{ width: '100%', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Responsive Stepper Demo
      </Typography>
      <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
        Resize your browser window to see the mobile/desktop switch
      </Typography>
      <ResponsiveStepper 
        {...args}
        activeStep={activeStep}
        onNext={handleNext}
        onBack={handleBack}
        onStepClick={setActiveStep}
      />
      <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
        Current Step: {activeStep + 1} of {args.steps.length}
      </Typography>
    </Paper>
  );
};

export const Responsive: Story = {
  render: ResponsiveTemplate as any,
  args: {
    activeStep: 1,
    steps: basicSteps,
    mobileVariant: 'dots',
    orientation: 'horizontal',
    textAlignment: 'left',
    nextButtonText: 'Continue',
    backButtonText: 'Back',
  } as any,
  parameters: {
    docs: {
      description: {
        story: 'Automatically switches between desktop and mobile variants based on screen size.',
      },
    },
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Stepper, StepData } from '../app/ui/components';
import { ThemeProvider } from '../app/ui/theme/ThemeProvider';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A stepper component that displays progress through a sequence of logical and numbered steps. Supports horizontal and vertical orientations with customizable label alignment.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    steps: {
      description: 'Array of step data objects',
      control: 'object',
    },
    activeStep: {
      description: 'Index of the currently active step (0-based)',
      control: { type: 'number', min: 0, max: 5 },
    },
    orientation: {
      description: 'Layout orientation of the stepper',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    alignment: {
      description: 'Alignment of step labels relative to icons',
      control: 'select',
      options: ['left', 'center'],
    },
    showOptional: {
      description: 'Whether to show optional text below labels',
      control: 'boolean',
    },
    smallScreen: {
      description: 'Enable small screen responsive layout',
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample step data
const basicSteps: StepData[] = [
  { label: 'Step title', completed: true },
  { label: 'Step title' },
  { label: 'Step title' },
];

const stepsWithOptional: StepData[] = [
  { label: 'Step title', optional: 'Optional', completed: true },
  { label: 'Step title', optional: 'Optional' },
  { label: 'Step title', optional: 'Optional' },
];

// Basic Stories
export const Default: Story = {
  args: {
    steps: basicSteps,
    activeStep: 1,
  },
};

export const Vertical: Story = {
  args: {
    steps: basicSteps,
    activeStep: 1,
    orientation: 'vertical',
  },
};

export const CenterAligned: Story = {
  args: {
    steps: basicSteps,
    activeStep: 1,
    alignment: 'center',
  },
};

export const WithOptionalText: Story = {
  args: {
    steps: stepsWithOptional,
    activeStep: 1,
    showOptional: true,
  },
};

export const SmallScreen: Story = {
  args: {
    steps: basicSteps,
    activeStep: 1,
    smallScreen: true,
  },
};

// Interactive Example
export const Interactive: Story = {
  args: {
    steps: basicSteps,
    activeStep: 1,
    onStepClick: (step: number) => {
      console.log('Clicked step:', step);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on steps to see the interaction. Check the console for click events.',
      },
    },
  },
};

// Complete Showcase (matching Figma design)
export const CompleteShowcase: Story = {
  render: () => (
    <ThemeProvider>
      <div className="space-y-12 p-6">
        <h2 className="text-2xl font-bold mb-8">Stepper Component Showcase</h2>
        
        {/* Horizontal Steppers - Left Aligned */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-700">Horizontal - Left Aligned</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Without Optional Text</p>
              <Stepper
                steps={basicSteps}
                activeStep={1}
                orientation="horizontal"
                alignment="left"
                showOptional={false}
              />
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">With Optional Text</p>
              <Stepper
                steps={stepsWithOptional}
                activeStep={1}
                orientation="horizontal"
                alignment="left"
                showOptional={true}
              />
            </div>
          </div>
        </div>

        {/* Horizontal Steppers - Center Aligned */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-700">Horizontal - Center Aligned</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Without Optional Text</p>
              <Stepper
                steps={basicSteps}
                activeStep={1}
                orientation="horizontal"
                alignment="center"
                showOptional={false}
              />
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">With Optional Text</p>
              <Stepper
                steps={stepsWithOptional}
                activeStep={1}
                orientation="horizontal"
                alignment="center"
                showOptional={true}
              />
            </div>
          </div>
        </div>

        {/* Vertical Steppers - Left Aligned */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-700">Vertical - Left Aligned</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">Without Optional Text</p>
              <Stepper
                steps={basicSteps}
                activeStep={1}
                orientation="vertical"
                alignment="left"
                showOptional={false}
              />
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">With Optional Text</p>
              <Stepper
                steps={stepsWithOptional}
                activeStep={1}
                orientation="vertical"
                alignment="left"
                showOptional={true}
              />
            </div>
          </div>
        </div>

        {/* Vertical Steppers - Center Aligned */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-700">Vertical - Center Aligned</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">Without Optional Text</p>
              <Stepper
                steps={basicSteps}
                activeStep={1}
                orientation="vertical"
                alignment="center"
                showOptional={false}
              />
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">With Optional Text</p>
              <Stepper
                steps={stepsWithOptional}
                activeStep={1}
                orientation="vertical"
                alignment="center"
                showOptional={true}
              />
            </div>
          </div>
        </div>

        {/* Step States */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-700">Step States</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">All Completed</p>
              <Stepper
                steps={[
                  { label: 'Step title', completed: true },
                  { label: 'Step title', completed: true },
                  { label: 'Step title', completed: true },
                ]}
                activeStep={2}
              />
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-2">With Disabled Step</p>
              <Stepper
                steps={[
                  { label: 'Step title', completed: true },
                  { label: 'Step title' },
                  { label: 'Step title', disabled: true },
                ]}
                activeStep={1}
              />
            </div>
          </div>
        </div>

        {/* Small Screen */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-700">Small Screen Layout</h3>
          
          <div>
            <p className="text-sm text-gray-500 mb-2">Responsive Layout</p>
            <Stepper
              steps={basicSteps}
              activeStep={1}
              smallScreen={true}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all stepper variants matching the Figma design specifications.',
      },
    },
  },
};

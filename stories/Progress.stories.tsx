import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progress } from '../app/ui/components/Progress';
import { ProgressType, ProgressColorVariant } from '../app/ui/components/Progress/Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable progress indicator component based on Material UI LinearProgress with design tokens from Figma. Supports determinate, indeterminate, and buffer progress types with multiple color variants.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['determinate', 'indeterminate', 'buffer'] as ProgressType[],
      description: 'The type of progress indicator',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'inherit'] as ProgressColorVariant[],
      description: 'The color variant of the progress indicator',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100) for determinate type',
    },
    valueBuffer: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Buffer progress value (0-100) for buffer type',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show progress label',
    },
    label: {
      control: 'text',
      description: 'Custom label text',
    },
    width: {
      control: 'text',
      description: 'Custom width for progress bar',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    type: 'determinate',
    color: 'primary',
    value: 50,
    showLabel: false,
    width: '200px',
  },
};

// With label showing percentage
export const WithLabel: Story = {
  args: {
    ...Default.args,
    showLabel: true,
    value: 75,
  },
};

// Custom label
export const CustomLabel: Story = {
  args: {
    ...Default.args,
    showLabel: true,
    label: 'Loading assets...',
    value: 45,
  },
};

// Indeterminate progress
export const Indeterminate: Story = {
  args: {
    type: 'indeterminate',
    color: 'primary',
    showLabel: false,
  },
};

// Buffer progress
export const Buffer: Story = {
  args: {
    type: 'buffer',
    color: 'primary',
    value: 60,
    valueBuffer: 80,
    showLabel: true,
  },
};

// All color variants
export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {(['primary', 'secondary', 'inherit'] as ProgressColorVariant[]).map((color) => (
        <div key={color} className="flex flex-col gap-2">
          <h3 className="text-sm font-medium text-gray-700 capitalize">{color}</h3>
          <Progress type="determinate" color={color} value={65} showLabel />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color variants: Primary (#1976D2), Secondary (#9C27B0), and Inherit (current text color)',
      },
    },
  },
};

// All progress types
export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">Determinate</h3>
        <Progress type="determinate" value={70} showLabel />
        <p className="text-xs text-gray-500">Shows specific progress with a value</p>
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">Indeterminate</h3>
        <Progress type="indeterminate" />
        <p className="text-xs text-gray-500">Continuous animation for unknown duration</p>
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">Buffer</h3>
        <Progress type="buffer" value={60} valueBuffer={80} showLabel />
        <p className="text-xs text-gray-500">Shows buffering progress with two bars</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three types of progress indicators: Determinate for specific progress, Indeterminate for unknown duration, and Buffer for buffering scenarios',
      },
    },
  },
};

// Different sizes/widths
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">Small (100px)</h3>
        <Progress type="determinate" value={60} width="100px" showLabel />
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">Default (200px)</h3>
        <Progress type="determinate" value={60} showLabel />
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">Large (300px)</h3>
        <Progress type="determinate" value={60} width="300px" showLabel />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Progress bars can be customized to different widths while maintaining the 4px height from the design specification',
      },
    },
  },
};

// Loading states showcase
export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">File Upload</h3>
        <Progress type="determinate" value={35} showLabel label="Uploading file..." color="primary" />
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">Processing</h3>
        <Progress type="indeterminate" color="secondary" />
        <p className="text-xs text-gray-500">Processing your request...</p>
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">Video Buffering</h3>
        <Progress type="buffer" value={45} valueBuffer={70} color="primary" />
        <p className="text-xs text-gray-500">Buffering video content</p>
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-700">Download Complete</h3>
        <Progress type="determinate" value={100} showLabel color="primary" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world usage examples showing different loading and progress scenarios',
      },
    },
  },
};

// Interactive progress
export const Interactive: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);
    
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-medium text-gray-700">Animated Progress</h3>
        <Progress 
          type="determinate" 
          value={progress} 
          showLabel 
          color="primary" 
        />
        <p className="text-xs text-gray-500">
          Progress value: {Math.round(progress)}%
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing animated progress updates',
      },
    },
  },
};
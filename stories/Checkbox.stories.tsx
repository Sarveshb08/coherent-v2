import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from '../app/ui/components/Checkbox';
import { ColorVariant, SizeVariant } from '../app/ui/design-tokens';
import { ThemeProvider } from '../app/ui/theme/ThemeProvider';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
        component: 'A customizable checkbox component based on Material UI with design tokens from Figma. Supports multiple sizes, colors, and states including indeterminate.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'] as ColorVariant[],
      description: 'The color variant of the checkbox',
    },
    size: {
      control: 'select', 
      options: ['small', 'medium', 'large'] as SizeVariant[],
      description: 'The size variant of the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in an indeterminate state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    label: {
      control: 'text',
      description: 'Optional label text for the checkbox',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    checked: false,
    indeterminate: false,
    disabled: false,
  },
};

// With label
export const WithLabel: Story = {
  args: {
    ...Default.args,
    label: 'Accept terms and conditions',
  },
};

// Checked state
export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true,
  },
};

// Indeterminate state
export const Indeterminate: Story = {
  args: {
    ...Default.args,
    indeterminate: true,
  },
};

// Disabled states
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    ...Default.args,
    checked: true,
    disabled: true,
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Checkbox size="small" checked />
        <span className="text-xs text-gray-500">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Checkbox size="medium" checked />
        <span className="text-xs text-gray-500">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Checkbox size="large" checked />
        <span className="text-xs text-gray-500">Large</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Available checkbox sizes: small (20px), medium (24px), and large (28px)',
      },
    },
  },
};

// All colors
export const Colors: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'] as ColorVariant[]).map((color) => (
        <div key={color} className="flex flex-col items-center gap-2">
          <Checkbox color={color} checked />
          <span className="text-xs text-gray-500 capitalize">{color}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color variants for the checkbox component',
      },
    },
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-sm text-gray-700">Unchecked</h3>
        <Checkbox color="primary" />
        <Checkbox color="secondary" />
        <Checkbox color="error" />
        <Checkbox color="warning" />
        <Checkbox color="info" />
        <Checkbox color="success" />
        <Checkbox color="default" />
      </div>
      
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-sm text-gray-700">Checked</h3>
        <Checkbox color="primary" checked />
        <Checkbox color="secondary" checked />
        <Checkbox color="error" checked />
        <Checkbox color="warning" checked />
        <Checkbox color="info" checked />
        <Checkbox color="success" checked />
        <Checkbox color="default" checked />
      </div>
      
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-sm text-gray-700">Indeterminate</h3>
        <Checkbox color="primary" indeterminate />
        <Checkbox color="secondary" indeterminate />
        <Checkbox color="error" indeterminate />
        <Checkbox color="warning" indeterminate />
        <Checkbox color="info" indeterminate />
        <Checkbox color="success" indeterminate />
        <Checkbox color="default" indeterminate />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comprehensive showcase of all checkbox states and color combinations',
      },
    },
  },
};
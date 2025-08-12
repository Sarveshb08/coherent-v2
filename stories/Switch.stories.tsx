import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../app/ui/components';
import { useState } from 'react';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toggle switch component with multiple variants, sizes, and states based on the Figma design system.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'],
      description: 'Color variant of the switch',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      description: 'Size variant of the switch',
    },
    checked: {
      control: { type: 'boolean' },
      description: 'Whether the switch is checked',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the switch is disabled',
    },
    label: {
      control: { type: 'text' },
      description: 'Optional label for the switch',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic switch
export const Default: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    checked: false,
    disabled: false,
  },
};

// With label
export const WithLabel: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    checked: false,
    label: 'Enable notifications',
  },
};

// Checked state
export const Checked: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    checked: true,
    label: 'Feature enabled',
  },
};

// Disabled states
export const Disabled: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    checked: false,
    disabled: true,
    label: 'Disabled switch',
  },
};

export const DisabledChecked: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    checked: true,
    disabled: true,
    label: 'Disabled checked',
  },
};

// Controlled switch with state
export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="space-y-4">
        <Switch
          {...args}
          checked={checked}
          onChange={(event, newChecked) => setChecked(newChecked)}
          label={`Switch is ${checked ? 'ON' : 'OFF'}`}
        />
        <div className="text-sm text-gray-600">
          Current state: {checked ? 'Enabled' : 'Disabled'}
        </div>
      </div>
    );
  },
  args: {
    color: 'primary',
    size: 'medium',
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-4">
        <Switch size="small" label="Small switch" />
        <Switch size="medium" label="Medium switch" />
      </div>
      <div className="flex items-center space-x-4">
        <Switch size="small" checked label="Small checked" />
        <Switch size="medium" checked label="Medium checked" />
      </div>
    </div>
  ),
};

// Color variants - Unchecked
export const ColorVariantsUnchecked: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Unchecked States</h3>
      <div className="grid grid-cols-2 gap-4">
        <Switch color="primary" label="Primary" />
        <Switch color="secondary" label="Secondary" />
        <Switch color="error" label="Error" />
        <Switch color="warning" label="Warning" />
        <Switch color="info" label="Info" />
        <Switch color="success" label="Success" />
        <Switch color="default" label="Default" />
      </div>
    </div>
  ),
};

// Color variants - Checked
export const ColorVariantsChecked: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Checked States</h3>
      <div className="grid grid-cols-2 gap-4">
        <Switch color="primary" checked label="Primary" />
        <Switch color="secondary" checked label="Secondary" />
        <Switch color="error" checked label="Error" />
        <Switch color="warning" checked label="Warning" />
        <Switch color="info" checked label="Info" />
        <Switch color="success" checked label="Success" />
        <Switch color="default" checked label="Default" />
      </div>
    </div>
  ),
};

// Complete showcase (replicating Figma design)
export const CompleteShowcase: Story = {
  render: () => (
    <div className="space-y-8">
      <h2 className="text-xl font-bold mb-6">Switch Component Showcase</h2>
      
      {/* Medium size variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Medium Size</h3>
        <div className="grid grid-cols-4 gap-6">
          {/* Enabled states */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Enabled</h4>
            <Switch color="primary" size="medium" />
            <Switch color="primary" size="medium" checked />
          </div>
          
          {/* Hover states - Note: Visual representation only */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Hover</h4>
            <Switch color="primary" size="medium" className="hover" />
            <Switch color="primary" size="medium" checked className="hover" />
          </div>
          
          {/* Disabled states */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Disabled</h4>
            <Switch color="primary" size="medium" disabled />
            <Switch color="primary" size="medium" checked disabled />
          </div>
          
          {/* Focused states */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Focused</h4>
            <Switch color="primary" size="medium" className="Mui-focusVisible" />
            <Switch color="primary" size="medium" checked className="Mui-focusVisible" />
          </div>
        </div>
      </div>
      
      {/* Small size variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Small Size</h3>
        <div className="grid grid-cols-4 gap-6">
          {/* Enabled states */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Enabled</h4>
            <Switch color="primary" size="small" />
            <Switch color="primary" size="small" checked />
          </div>
          
          {/* Hover states */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Hover</h4>
            <Switch color="primary" size="small" className="hover" />
            <Switch color="primary" size="small" checked className="hover" />
          </div>
          
          {/* Disabled states */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Disabled</h4>
            <Switch color="primary" size="small" disabled />
            <Switch color="primary" size="small" checked disabled />
          </div>
          
          {/* Focused states */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-600">Focused</h4>
            <Switch color="primary" size="small" className="Mui-focusVisible" />
            <Switch color="primary" size="small" checked className="Mui-focusVisible" />
          </div>
        </div>
      </div>
      
      {/* All color variants */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">All Color Variants</h3>
        <div className="grid grid-cols-7 gap-4">
          {(['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'] as const).map((color) => (
            <div key={color} className="space-y-2">
              <h4 className="text-xs font-medium text-gray-600 capitalize">{color}</h4>
              <Switch color={color} />
              <Switch color={color} checked />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
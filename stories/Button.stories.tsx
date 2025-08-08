import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../app/ui/components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable Button component that supports multiple variants, sizes, colors, and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'],
      description: 'The color variant of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size variant of the button',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'The style variant of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The type of the button',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
  },
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default button
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

// Primary variants
export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const PrimarySecondary: Story = {
  args: {
    color: 'primary',
    variant: 'secondary',
    children: 'Primary Secondary',
  },
};

// All colors - Primary variant
export const AllColorsPrimary: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button color="primary" variant="primary">Primary</Button>
      <Button color="secondary" variant="primary">Secondary</Button>
      <Button color="error" variant="primary">Error</Button>
      <Button color="warning" variant="primary">Warning</Button>
      <Button color="info" variant="primary">Info</Button>
      <Button color="success" variant="primary">Success</Button>
      <Button color="default" variant="primary">Default</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color variants with primary style.',
      },
    },
  },
};

// All colors - Secondary variant
export const AllColorsSecondary: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button color="primary" variant="secondary">Primary</Button>
      <Button color="secondary" variant="secondary">Secondary</Button>
      <Button color="error" variant="secondary">Error</Button>
      <Button color="warning" variant="secondary">Warning</Button>
      <Button color="info" variant="secondary">Info</Button>
      <Button color="success" variant="secondary">Success</Button>
      <Button color="default" variant="secondary">Default</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available color variants with secondary style.',
      },
    },
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different size variants of the button.',
      },
    },
  },
};

// Disabled states
export const DisabledStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button disabled variant="primary" color="primary">Primary Disabled</Button>
      <Button disabled variant="secondary" color="primary">Secondary Disabled</Button>
      <Button disabled color="error">Error Disabled</Button>
      <Button disabled color="success">Success Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled state examples for different variants and colors.',
      },
    },
  },
};

// Interactive states demonstration
export const InteractiveStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button color="primary">Normal State</Button>
        <Button color="primary" style={{ backgroundColor: '#461E96dd' }}>Hover State</Button>
        <Button color="primary" style={{ outline: '2px solid rgba(70, 30, 150, 0.3)', outlineOffset: '2px' }}>Focus State</Button>
      </div>
      <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
        Note: Hover and focus states are automatically handled. This story shows visual approximations.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Visual representation of different interactive states. Actual hover and focus states are handled automatically.',
      },
    },
  },
};

// Button types
export const ButtonTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button type="button">Button Type</Button>
      <Button type="submit" color="success">Submit Type</Button>
      <Button type="reset" color="error" variant="secondary">Reset Type</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different button types for form usage.',
      },
    },
  },
};

// Accessibility
export const WithAriaLabel: Story = {
  args: {
    children: '🔍',
    'aria-label': 'Search for items',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with aria-label for accessibility when the content is not descriptive.',
      },
    },
  },
};

// Long text
export const LongText: Story = {
  args: {
    children: 'This is a button with very long text content',
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with longer text content to test text wrapping and layout.',
      },
    },
  },
};
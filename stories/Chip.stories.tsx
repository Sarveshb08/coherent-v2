import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chip } from '../app/ui/components/Chip';
import { ThemeProvider } from '../app/ui/theme/ThemeProvider';
import { 
  Person, 
  Close,
  Home,
  Star,
  Favorite,
  CheckCircle,
  Error,
  Warning,
  Info
} from '@mui/icons-material';
import { Avatar } from '@mui/material';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A customizable Chip component built with Material-UI and design tokens from Figma. Supports filled and outlined variants, multiple colors, avatars, icons, and delete functionality.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The content of the chip label',
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
      description: 'The variant to use',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'],
      description: 'The color of the chip',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
      description: 'The size of the chip',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'If true, the chip will be disabled',
    },
    clickable: {
      control: { type: 'boolean' },
      description: 'If true, the chip will appear clickable',
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    label: 'Chip',
    variant: 'filled',
    color: 'secondary',
    size: 'medium',
  },
};

// Variants showcase
export const Variants: Story = {
  args: {
    label: 'Chip',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Chip label="Filled" variant="filled" />
      <Chip label="Outlined" variant="outlined" />
    </div>
  ),
};

// Colors showcase
export const Colors: Story = {
  args: {
    label: 'Chip',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
      <Chip label="Success" color="success" />
      <Chip label="Default" color="default" />
    </div>
  ),
};

// Colors outlined
export const ColorsOutlined: Story = {
  args: {
    label: 'Chip',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Chip label="Primary" color="primary" variant="outlined" />
      <Chip label="Secondary" color="secondary" variant="outlined" />
      <Chip label="Error" color="error" variant="outlined" />
      <Chip label="Warning" color="warning" variant="outlined" />
      <Chip label="Info" color="info" variant="outlined" />
      <Chip label="Success" color="success" variant="outlined" />
      <Chip label="Default" color="default" variant="outlined" />
    </div>
  ),
};

// Sizes showcase
export const Sizes: Story = {
  args: {
    label: 'Chip',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  args: {
    label: 'Chip',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Chip label="Home" icon={<Home />} />
      <Chip label="Favorite" icon={<Favorite />} />
      <Chip label="Person" icon={<Person />} />
      <Chip label="Star" icon={<Star />} />
    </div>
  ),
};

// With avatars
export const WithAvatars: Story = {
  args: {
    label: 'Chip',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Chip 
        label="John Doe" 
        avatar={<Avatar>J</Avatar>} 
      />
      <Chip 
        label="Jane Smith" 
        avatar={<Avatar>JS</Avatar>} 
        size="small"
      />
      <Chip 
        label="Alex Johnson" 
        avatar={<Avatar src="https://mui.com/static/images/avatar/1.jpg" />} 
        variant="outlined"
      />
    </div>
  ),
};

// Deletable chips
export const Deletable: Story = {
  args: {
    label: 'Chip',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Chip 
        label="Deletable Chip" 
        onDelete={() => alert('Delete clicked!')} 
      />
      <Chip 
        label="Custom Delete Icon" 
        onDelete={() => alert('Custom delete clicked!')} 
        deleteIcon={<Close />}
      />
      <Chip 
        label="With Avatar & Delete" 
        avatar={<Avatar>A</Avatar>}
        onDelete={() => alert('Delete clicked!')} 
        variant="outlined"
      />
    </div>
  ),
};

// Clickable chips
export const Clickable: Story = {
  args: {
    label: 'Chip',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Chip 
        label="Clickable" 
        clickable 
        onClick={() => alert('Chip clicked!')} 
      />
      <Chip 
        label="Clickable with Icon" 
        icon={<Star />}
        clickable 
        onClick={() => alert('Chip with icon clicked!')} 
        variant="outlined"
      />
    </div>
  ),
};

// States showcase
export const States: Story = {
  args: {
    label: 'Chip',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Chip label="Default" />
      <Chip label="Disabled" disabled />
      <Chip label="Clickable" clickable onClick={() => {}} />
      <Chip label="Deletable" onDelete={() => {}} />
    </div>
  ),
};

// Complete showcase (matching Figma design)
export const CompleteShowcase: Story = {
  args: {
    label: 'Chip',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Filled variants */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 500 }}>
          Filled Variants
        </h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Chip label="Chip" variant="filled" />
          <Chip label="Chip" variant="filled" icon={<Person />} />
          <Chip label="Chip" variant="filled" onDelete={() => {}} />
          <Chip label="Chip" variant="filled" avatar={<Avatar>A</Avatar>} onDelete={() => {}} />
        </div>
      </div>

      {/* Outlined variants */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 500 }}>
          Outlined Variants
        </h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Chip label="Chip" variant="outlined" />
          <Chip label="Chip" variant="outlined" icon={<Person />} />
          <Chip label="Chip" variant="outlined" onDelete={() => {}} />
          <Chip label="Chip" variant="outlined" avatar={<Avatar>A</Avatar>} onDelete={() => {}} />
        </div>
      </div>

      {/* Small size */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 500 }}>
          Small Size
        </h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Chip label="Small" size="small" variant="filled" />
          <Chip label="Small" size="small" variant="outlined" />
          <Chip label="Small" size="small" variant="filled" avatar={<Avatar>S</Avatar>} />
          <Chip label="Small" size="small" variant="outlined" onDelete={() => {}} />
        </div>
      </div>

      {/* Different states */}
      <div>
        <h3 style={{ marginBottom: '16px', fontFamily: 'Roboto', fontSize: '16px', fontWeight: 500 }}>
          States
        </h3>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Chip label="Default" />
          <Chip label="Clickable" clickable onClick={() => alert('Clicked!')} />
          <Chip label="Disabled" disabled />
          <Chip label="Disabled Deletable" disabled onDelete={() => {}} />
        </div>
      </div>
    </div>
  ),
};
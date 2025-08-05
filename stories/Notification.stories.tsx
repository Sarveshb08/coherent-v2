import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '../app/ui/components/Notification';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A notification component for displaying alerts and messages with multiple severity types and variants.',
      },
    },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      description: 'The severity type of the notification',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
      description: 'The variant style of the notification',
    },
    title: {
      control: 'text',
      description: 'The main title/message of the notification',
    },
    description: {
      control: 'text',
      description: 'Optional description text for additional details',
    },
    closable: {
      control: 'boolean',
      description: 'Whether to show a close button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default notification
export const Default: Story = {
  args: {
    severity: 'info',
    variant: 'filled',
    title: 'Information',
    description: 'This is an informational message',
  },
};

// Error notifications
export const Error: Story = {
  args: {
    severity: 'error',
    variant: 'filled',
    title: 'Error',
    description: 'Something went wrong. Please try again.',
  },
};

export const ErrorOutlined: Story = {
  args: {
    severity: 'error',
    variant: 'outlined',
    title: 'Error',
    description: 'Something went wrong. Please try again.',
  },
};

export const ErrorStandard: Story = {
  args: {
    severity: 'error',
    variant: 'standard',
    title: 'Error',
    description: 'Something went wrong. Please try again.',
  },
};

// Warning notifications
export const Warning: Story = {
  args: {
    severity: 'warning',
    variant: 'filled',
    title: 'Warning',
    description: 'This action cannot be undone.',
  },
};

export const WarningOutlined: Story = {
  args: {
    severity: 'warning',
    variant: 'outlined',
    title: 'Warning',
    description: 'This action cannot be undone.',
  },
};

export const WarningStandard: Story = {
  args: {
    severity: 'warning',
    variant: 'standard',
    title: 'Warning',
    description: 'This action cannot be undone.',
  },
};

// Info notifications
export const Info: Story = {
  args: {
    severity: 'info',
    variant: 'filled',
    title: 'Information',
    description: 'New features are available.',
  },
};

export const InfoOutlined: Story = {
  args: {
    severity: 'info',
    variant: 'outlined',
    title: 'Information',
    description: 'New features are available.',
  },
};

export const InfoStandard: Story = {
  args: {
    severity: 'info',
    variant: 'standard',
    title: 'Information',
    description: 'New features are available.',
  },
};

// Success notifications
export const Success: Story = {
  args: {
    severity: 'success',
    variant: 'filled',
    title: 'Success',
    description: 'Your changes have been saved successfully.',
  },
};

export const SuccessOutlined: Story = {
  args: {
    severity: 'success',
    variant: 'outlined',
    title: 'Success',
    description: 'Your changes have been saved successfully.',
  },
};

export const SuccessStandard: Story = {
  args: {
    severity: 'success',
    variant: 'standard',
    title: 'Success',
    description: 'Your changes have been saved successfully.',
  },
};

// Title only notification
export const TitleOnly: Story = {
  args: {
    severity: 'info',
    variant: 'filled',
    title: 'Simple notification without description',
  },
};

// Closable notification
export const Closable: Story = {
  args: {
    severity: 'warning',
    variant: 'filled',
    title: 'Closable Notification',
    description: 'This notification can be closed',
    closable: true,
    onClose: () => console.log('Notification closed'),
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Error Notifications</h3>
        <Notification
          severity="error"
          variant="filled"
          title="Error Filled"
          description="This is an error notification with filled variant"
        />
        <Notification
          severity="error"
          variant="outlined"
          title="Error Outlined"
          description="This is an error notification with outlined variant"
        />
        <Notification
          severity="error"
          variant="standard"
          title="Error Standard"
          description="This is an error notification with standard variant"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Warning Notifications</h3>
        <Notification
          severity="warning"
          variant="filled"
          title="Warning Filled"
          description="This is a warning notification with filled variant"
        />
        <Notification
          severity="warning"
          variant="outlined"
          title="Warning Outlined"
          description="This is a warning notification with outlined variant"
        />
        <Notification
          severity="warning"
          variant="standard"
          title="Warning Standard"
          description="This is a warning notification with standard variant"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Info Notifications</h3>
        <Notification
          severity="info"
          variant="filled"
          title="Info Filled"
          description="This is an info notification with filled variant"
        />
        <Notification
          severity="info"
          variant="outlined"
          title="Info Outlined"
          description="This is an info notification with outlined variant"
        />
        <Notification
          severity="info"
          variant="standard"
          title="Info Standard"
          description="This is an info notification with standard variant"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Success Notifications</h3>
        <Notification
          severity="success"
          variant="filled"
          title="Success Filled"
          description="This is a success notification with filled variant"
        />
        <Notification
          severity="success"
          variant="outlined"
          title="Success Outlined"
          description="This is a success notification with outlined variant"
        />
        <Notification
          severity="success"
          variant="standard"
          title="Success Standard"
          description="This is a success notification with standard variant"
        />
      </div>
    </div>
  ),
};
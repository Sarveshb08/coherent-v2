import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SpeedDial } from '../app/ui/components/SpeedDial';
import { SpeedDialDirection } from '../app/ui/design-tokens';
import { ThemeProvider } from '../app/ui/theme/ThemeProvider';
import { 
  ContentCopy, 
  Save, 
  Print, 
  Share, 
  Edit,
  Delete,
  Add,
  Close,
  Favorite,
  Download,
  Upload,
  Settings
} from '@mui/icons-material';

const meta: Meta<typeof SpeedDial> = {
  title: 'Components/SpeedDial',
  component: SpeedDial,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ 
          position: 'relative', 
          height: '400px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '40px'
        }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A SpeedDial component that displays a floating action button with expandable actions. Supports all Material Design directions and is fully customizable with icons and tooltips.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right'] as SpeedDialDirection[],
      description: 'Direction for the speed dial to open',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    open: {
      control: 'boolean',
      description: 'Whether the speed dial is open (controlled mode)',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample actions for stories
const basicActions = [
  {
    icon: <ContentCopy />,
    name: 'Copy',
    onClick: () => console.log('Copy clicked'),
  },
  {
    icon: <Save />,
    name: 'Save',
    onClick: () => console.log('Save clicked'),
  },
  {
    icon: <Print />,
    name: 'Print',
    onClick: () => console.log('Print clicked'),
  },
  {
    icon: <Share />,
    name: 'Share',
    onClick: () => console.log('Share clicked'),
  },
];

const moreActions = [
  {
    icon: <Edit />,
    name: 'Edit',
    onClick: () => console.log('Edit clicked'),
  },
  {
    icon: <Delete />,
    name: 'Delete',
    onClick: () => console.log('Delete clicked'),
  },
  {
    icon: <Favorite />,
    name: 'Favorite',
    onClick: () => console.log('Favorite clicked'),
  },
  {
    icon: <Download />,
    name: 'Download',
    onClick: () => console.log('Download clicked'),
  },
  {
    icon: <Upload />,
    name: 'Upload',
    onClick: () => console.log('Upload clicked'),
  },
  {
    icon: <Settings />,
    name: 'Settings',
    onClick: () => console.log('Settings clicked'),
  },
];

// Default story
export const Default: Story = {
  args: {
    ariaLabel: 'SpeedDial basic example',
    direction: 'up',
    actions: basicActions,
  },
};

// Direction variants
export const DirectionUp: Story = {
  args: {
    ariaLabel: 'SpeedDial up direction',
    direction: 'up',
    actions: basicActions,
  },
  parameters: {
    docs: {
      description: {
        story: 'SpeedDial opening upward direction - most common placement for bottom-right positioned FABs.',
      },
    },
  },
};

export const DirectionDown: Story = {
  args: {
    ariaLabel: 'SpeedDial down direction',
    direction: 'down',
    actions: basicActions,
  },
  parameters: {
    docs: {
      description: {
        story: 'SpeedDial opening downward direction - useful for top-positioned FABs.',
      },
    },
  },
};

export const DirectionLeft: Story = {
  args: {
    ariaLabel: 'SpeedDial left direction',
    direction: 'left',
    actions: basicActions,
  },
  parameters: {
    docs: {
      description: {
        story: 'SpeedDial opening leftward direction - useful for right-side positioned FABs.',
      },
    },
  },
};

export const DirectionRight: Story = {
  args: {
    ariaLabel: 'SpeedDial right direction',
    direction: 'right',
    actions: basicActions,
  },
  parameters: {
    docs: {
      description: {
        story: 'SpeedDial opening rightward direction - useful for left-side positioned FABs.',
      },
    },
  },
};

// Custom icons
export const CustomIcons: Story = {
  args: {
    ariaLabel: 'SpeedDial with custom icons',
    direction: 'up',
    icon: <Settings />,
    openIcon: <Close />,
    actions: basicActions,
  },
  parameters: {
    docs: {
      description: {
        story: 'SpeedDial with custom main icon and open icon. The icon changes when the speed dial opens.',
      },
    },
  },
};

// Many actions
export const ManyActions: Story = {
  args: {
    ariaLabel: 'SpeedDial with many actions',
    direction: 'up',
    actions: moreActions,
  },
  parameters: {
    docs: {
      description: {
        story: 'SpeedDial with multiple actions. Shows how the component handles more action items.',
      },
    },
  },
};

// Controlled state
export const ControlledOpen: Story = {
  args: {
    ariaLabel: 'SpeedDial controlled open',
    direction: 'up',
    actions: basicActions,
    open: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'SpeedDial in controlled mode, always open. Useful for demonstrations or when you need to control the open state programmatically.',
      },
    },
  },
};

// All directions showcase
export const AllDirections: Story = {
  render: () => (
    <div style={{ 
      position: 'relative', 
      height: '600px', 
      width: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Up */}
      <div style={{ position: 'absolute', bottom: '80px', right: '80px' }}>
        <SpeedDial
          ariaLabel="Up direction"
          direction="up"
          actions={basicActions.slice(0, 3)}
        />
      </div>
      
      {/* Down */}
      <div style={{ position: 'absolute', top: '80px', left: '80px' }}>
        <SpeedDial
          ariaLabel="Down direction"
          direction="down"
          actions={basicActions.slice(0, 3)}
        />
      </div>
      
      {/* Left */}
      <div style={{ position: 'absolute', top: '50%', right: '80px', transform: 'translateY(-50%)' }}>
        <SpeedDial
          ariaLabel="Left direction"
          direction="left"
          actions={basicActions.slice(0, 3)}
        />
      </div>
      
      {/* Right */}
      <div style={{ position: 'absolute', top: '50%', left: '80px', transform: 'translateY(-50%)' }}>
        <SpeedDial
          ariaLabel="Right direction"
          direction="right"
          actions={basicActions.slice(0, 3)}
        />
      </div>
      
      {/* Center label */}
      <div style={{ 
        textAlign: 'center', 
        color: '#666',
        fontSize: '14px',
        maxWidth: '200px'
      }}>
        All four directions demonstrated. Click any FAB to see the actions expand.
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstration of all four SpeedDial directions in different positions. Shows typical usage patterns for each direction.',
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    
    const handleActionClick = (actionName: string) => {
      alert(`${actionName} action clicked!`);
      setOpen(false);
    };

    const interactiveActions = [
      {
        icon: <ContentCopy />,
        name: 'Copy',
        onClick: () => handleActionClick('Copy'),
      },
      {
        icon: <Save />,
        name: 'Save',
        onClick: () => handleActionClick('Save'),
      },
      {
        icon: <Print />,
        name: 'Print',
        onClick: () => handleActionClick('Print'),
      },
      {
        icon: <Share />,
        name: 'Share',
        onClick: () => handleActionClick('Share'),
      },
    ];

    return (
      <SpeedDial
        ariaLabel="Interactive SpeedDial"
        direction="up"
        actions={interactiveActions}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive SpeedDial with click handlers. Try clicking on the actions to see the alerts.',
      },
    },
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Tabs } from '../app/ui/components/Tabs';
import { TabsData } from '../app/ui/components/Tabs/types';
import { ThemeProvider } from '../app/ui/theme/ThemeProvider';
import { 
  Home, 
  Favorite, 
  Person, 
  Settings, 
  Phone,
  Email,
  LocationOn,
  Work
} from '@mui/icons-material';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A customizable Tabs component built with Material-UI and design tokens from Figma. Supports multiple orientations, variants, and states.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['standard', 'scrollable', 'fullWidth'],
      description: 'The visual variant of the tabs',
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
    },
    centered: {
      control: { type: 'boolean' },
      description: 'Whether to center the tabs (horizontal only)',
    },
    scrollButtons: {
      control: { type: 'select' },
      options: ['auto', true, false],
      description: 'Scroll buttons configuration for scrollable variant',
    },
    allowScrollButtonsMobile: {
      control: { type: 'boolean' },
      description: 'Show scroll buttons on mobile',
    },
    showPanels: {
      control: { type: 'boolean' },
      description: 'Whether to render tab panels',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content components
const SampleContent = ({ title }: { title: string }) => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h3>{title} Content</h3>
    <p>This is the content for the {title} tab. You can put any React component or HTML here.</p>
  </div>
);

// Basic tabs data
const basicTabs: TabsData[] = [
  { 
    label: 'Overview', 
    value: 'overview', 
    content: <SampleContent title="Overview" /> 
  },
  { 
    label: 'Details', 
    value: 'details', 
    content: <SampleContent title="Details" /> 
  },
  { 
    label: 'Settings', 
    value: 'settings', 
    content: <SampleContent title="Settings" /> 
  },
];

// Tabs with icons
const iconTabs: TabsData[] = [
  { 
    label: 'Home', 
    value: 'home', 
    icon: <Home />, 
    content: <SampleContent title="Home" /> 
  },
  { 
    label: 'Favorites', 
    value: 'favorites', 
    icon: <Favorite />, 
    content: <SampleContent title="Favorites" /> 
  },
  { 
    label: 'Profile', 
    value: 'profile', 
    icon: <Person />, 
    content: <SampleContent title="Profile" /> 
  },
  { 
    label: 'Settings', 
    value: 'settings', 
    icon: <Settings />, 
    content: <SampleContent title="Settings" /> 
  },
];

// Many tabs for scrollable demo
const manyTabs: TabsData[] = [
  { label: 'Dashboard', value: 'dashboard', icon: <Home />, content: <SampleContent title="Dashboard" /> },
  { label: 'Analytics', value: 'analytics', content: <SampleContent title="Analytics" /> },
  { label: 'Reports', value: 'reports', content: <SampleContent title="Reports" /> },
  { label: 'Users', value: 'users', icon: <Person />, content: <SampleContent title="Users" /> },
  { label: 'Settings', value: 'settings', icon: <Settings />, content: <SampleContent title="Settings" /> },
  { label: 'Notifications', value: 'notifications', content: <SampleContent title="Notifications" /> },
  { label: 'Security', value: 'security', content: <SampleContent title="Security" /> },
  { label: 'Billing', value: 'billing', content: <SampleContent title="Billing" /> },
  { label: 'Support', value: 'support', content: <SampleContent title="Support" /> },
];

// Tabs with disabled state
const tabsWithDisabled: TabsData[] = [
  { label: 'Active Tab', value: 'active', content: <SampleContent title="Active Tab" /> },
  { label: 'Disabled Tab', value: 'disabled', disabled: true, content: <SampleContent title="Disabled Tab" /> },
  { label: 'Another Active', value: 'active2', content: <SampleContent title="Another Active" /> },
];

// Contact tabs for vertical demo
const contactTabs: TabsData[] = [
  { label: 'Phone', value: 'phone', icon: <Phone />, content: <SampleContent title="Phone" /> },
  { label: 'Email', value: 'email', icon: <Email />, content: <SampleContent title="Email" /> },
  { label: 'Address', value: 'address', icon: <LocationOn />, content: <SampleContent title="Address" /> },
  { label: 'Work', value: 'work', icon: <Work />, content: <SampleContent title="Work" /> },
];

// Interactive wrapper component
const InteractiveTabs = ({ tabs, ...props }: any) => {
  const [value, setValue] = useState(tabs[0]?.value || '');
  
  const handleChange = (event: React.SyntheticEvent, newValue: string | number) => {
    setValue(newValue);
  };

  return (
    <Tabs 
      tabs={tabs} 
      value={value} 
      onChange={handleChange} 
      {...props} 
    />
  );
};

// Standard variant (default)
export const Standard: Story = {
  args: {
    tabs: basicTabs,
  },
  render: (args) => <InteractiveTabs {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'The default tabs variant with standard spacing and behavior.',
      },
    },
  },
};

// With Icons
export const WithIcons: Story = {
  args: {
    tabs: iconTabs,
  },
  render: (args) => <InteractiveTabs {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with icons next to the labels for better visual hierarchy.',
      },
    },
  },
};

// Scrollable variant
export const Scrollable: Story = {
  args: {
    tabs: manyTabs,
    variant: 'scrollable',
    scrollButtons: 'auto',
  },
  render: (args) => (
    <div style={{ maxWidth: '500px' }}>
      <InteractiveTabs {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Scrollable tabs with automatic scroll buttons when tabs exceed container width.',
      },
    },
  },
};

// Scrollable with forced buttons
export const ScrollableForced: Story = {
  args: {
    tabs: manyTabs,
    variant: 'scrollable',
    scrollButtons: true,
    allowScrollButtonsMobile: true,
  },
  render: (args) => (
    <div style={{ maxWidth: '500px' }}>
      <InteractiveTabs {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Scrollable tabs with forced scroll buttons visible on all screen sizes.',
      },
    },
  },
};

// Full Width variant
export const FullWidth: Story = {
  args: {
    tabs: basicTabs,
    variant: 'fullWidth',
  },
  render: (args) => <InteractiveTabs {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Full width tabs that expand to fill the container width. Useful for mobile layouts.',
      },
    },
  },
};

// Centered variant
export const Centered: Story = {
  args: {
    tabs: basicTabs,
    centered: true,
  },
  render: (args) => <InteractiveTabs {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Centered tabs for better visual balance in wide containers.',
      },
    },
  },
};

// Vertical orientation
export const Vertical: Story = {
  args: {
    tabs: contactTabs,
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ height: '400px' }}>
      <InteractiveTabs {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical tabs layout with side navigation pattern.',
      },
    },
  },
};

// Vertical scrollable
export const VerticalScrollable: Story = {
  args: {
    tabs: manyTabs,
    orientation: 'vertical',
    variant: 'scrollable',
    scrollButtons: 'auto',
  },
  render: (args) => (
    <div style={{ height: '300px' }}>
      <InteractiveTabs {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical scrollable tabs when content exceeds container height.',
      },
    },
  },
};

// With disabled tabs
export const WithDisabled: Story = {
  args: {
    tabs: tabsWithDisabled,
  },
  render: (args) => <InteractiveTabs {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Tabs with some items disabled to prevent interaction.',
      },
    },
  },
};

// Without panels
export const WithoutPanels: Story = {
  args: {
    tabs: basicTabs,
    showPanels: false,
  },
  render: (args) => (
    <InteractiveTabs 
      {...args}
      onChange={(event: any, value: any) => console.log('Tab changed to:', value)}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'Navigation-only tabs without content panels, useful for routing scenarios.',
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  args: {
    tabs: basicTabs,
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3>Standard</h3>
        <InteractiveTabs tabs={basicTabs} />
      </div>
      
      <div>
        <h3>Full Width</h3>
        <InteractiveTabs tabs={basicTabs} variant="fullWidth" />
      </div>
      
      <div style={{ maxWidth: '500px' }}>
        <h3>Scrollable</h3>
        <InteractiveTabs tabs={manyTabs} variant="scrollable" scrollButtons="auto" />
      </div>
      
      <div>
        <h3>Centered</h3>
        <InteractiveTabs tabs={basicTabs} centered />
      </div>
      
      <div style={{ height: '300px' }}>
        <h3>Vertical</h3>
        <InteractiveTabs tabs={contactTabs} orientation="vertical" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all tabs variants and configurations.',
      },
    },
  },
};

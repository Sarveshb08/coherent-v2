import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup, Radio } from './index';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive radio button group component built with Material-UI and styled to match the Figma design system specifications.',
      },
    },
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'],
      description: 'The color variant of the radio group',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'The size variant of the radio group',
    },
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
      description: 'The layout direction of the radio options',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the radio group is disabled',
    },
    error: {
      control: { type: 'boolean' },
      description: 'Whether the radio group is in an error state',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the radio group is required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// Sample options for stories
const basicOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const optionsWithDisabled = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2 (Disabled)', disabled: true },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

// Controlled RadioGroup wrapper
const ControlledRadioGroup = (args: any) => {
  const [value, setValue] = useState(args.defaultValue || '');
  
  return (
    <RadioGroup
      {...args}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
    />
  );
};

export const Default: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    options: basicOptions,
    label: 'Default Radio Group',
    defaultValue: 'option1',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Small</h3>
        <ControlledRadioGroup
          options={basicOptions}
          size="small"
          defaultValue="option1"
          label="Small Radio Group"
        />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Medium (Default)</h3>
        <ControlledRadioGroup
          options={basicOptions}
          size="medium"
          defaultValue="option1"
          label="Medium Radio Group"
        />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Large</h3>
        <ControlledRadioGroup
          options={basicOptions}
          size="large"
          defaultValue="option1"
          label="Large Radio Group"
        />
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Primary</h3>
        <ControlledRadioGroup
          options={basicOptions}
          color="primary"
          defaultValue="option1"
        />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Secondary</h3>
        <ControlledRadioGroup
          options={basicOptions}
          color="secondary"
          defaultValue="option1"
        />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Error</h3>
        <ControlledRadioGroup
          options={basicOptions}
          color="error"
          defaultValue="option1"
        />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Warning</h3>
        <ControlledRadioGroup
          options={basicOptions}
          color="warning"
          defaultValue="option1"
        />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Info</h3>
        <ControlledRadioGroup
          options={basicOptions}
          color="info"
          defaultValue="option1"
        />
      </div>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Success</h3>
        <ControlledRadioGroup
          options={basicOptions}
          color="success"
          defaultValue="option1"
        />
      </div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    options: basicOptions,
    direction: 'row',
    label: 'Horizontal Radio Group',
    defaultValue: 'option1',
  },
};

export const WithDisabledOptions: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    options: optionsWithDisabled,
    label: 'Radio Group with Disabled Option',
    defaultValue: 'option1',
  },
};

export const DisabledGroup: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    options: basicOptions,
    disabled: true,
    label: 'Disabled Radio Group',
    defaultValue: 'option1',
  },
};

export const ErrorState: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    options: basicOptions,
    error: true,
    required: true,
    label: 'Required Radio Group',
    helperText: 'Please select an option',
  },
};

export const WithHelperText: Story = {
  render: (args) => <ControlledRadioGroup {...args} />,
  args: {
    options: basicOptions,
    label: 'Radio Group with Helper Text',
    helperText: 'Select your preferred option from the list above',
    defaultValue: 'option1',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-lg font-semibold">All Colors - Medium Size</h3>
        <div className="grid grid-cols-3 gap-8">
          {['primary', 'secondary', 'error', 'warning', 'info', 'success'].map((color) => (
            <div key={color}>
              <h4 className="mb-2 text-sm font-medium capitalize">{color}</h4>
              <ControlledRadioGroup
                options={basicOptions.slice(0, 2)}
                color={color as any}
                defaultValue="option1"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-semibold">All Sizes - Primary Color</h3>
        <div className="grid grid-cols-3 gap-8">
          {['small', 'medium', 'large'].map((size) => (
            <div key={size}>
              <h4 className="mb-2 text-sm font-medium capitalize">{size}</h4>
              <ControlledRadioGroup
                options={basicOptions.slice(0, 2)}
                size={size as any}
                defaultValue="option1"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Individual Radio Component Stories
const RadioMeta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
};

export const IndividualRadio: StoryObj<typeof Radio> = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <Radio
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Individual Radio Button"
      />
    );
  },
};

export const RadioStates: StoryObj<typeof Radio> = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Radio checked={false} />
        <span>Unchecked</span>
      </div>
      <div className="flex items-center space-x-4">
        <Radio checked={true} />
        <span>Checked</span>
      </div>
      <div className="flex items-center space-x-4">
        <Radio checked={false} disabled />
        <span>Disabled Unchecked</span>
      </div>
      <div className="flex items-center space-x-4">
        <Radio checked={true} disabled />
        <span>Disabled Checked</span>
      </div>
    </div>
  ),
};
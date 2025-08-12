import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextField } from '../app/ui/components/TextField';
import { ColorVariant, TextFieldSizeVariant, TextFieldVariantType } from '../app/ui/design-tokens';
import { ThemeProvider } from '../app/ui/theme/ThemeProvider';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
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
        component: 'A customizable TextField component based on Material UI with design tokens from Figma. Supports Standard, Filled, and Outlined variants with multiple sizes and states.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'] as ColorVariant[],
      description: 'The color variant of the TextField',
    },
    size: {
      control: 'select', 
      options: ['small', 'medium'] as TextFieldSizeVariant[],
      description: 'The size variant of the TextField',
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'] as TextFieldVariantType[],
      description: 'The variant style of the TextField',
    },
    label: {
      control: 'text',
      description: 'Label text for the TextField',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the TextField',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the TextField',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the TextField is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the TextField is in error state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the TextField should take full width',
    },
    className: {
      control: 'text',
      description: 'CSS classes for the root container',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
    color: 'primary',
    size: 'medium',
    variant: 'outlined',
    disabled: false,
    error: false,
    fullWidth: false,
  },
};

// With value
export const WithValue: Story = {
  args: {
    ...Default.args,
    value: 'Sample input value',
  },
};

// With custom styling
export const WithCustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">Container with padding and border</p>
        <TextField
          label="Container Styled"
          placeholder="This has container styling"
          className="p-2 border-2 border-dashed border-blue-300 rounded-lg"
        />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Container with background</p>
        <TextField
          label="Background Container"
          placeholder="This has background styling"
          className="bg-gray-100 p-3 rounded-md"
        />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Custom margin and width</p>
        <TextField
          label="Custom Layout"
          placeholder="This has custom layout"
          className="my-4 w-full max-w-xs"
        />
      </div>
      
      <div>
        <p className="text-sm font-medium mb-2">Combined styling</p>
        <TextField
          label="All Custom"
          placeholder="Everything is styled"
          className="p-3 bg-blue-50 border border-info-200 rounded-lg shadow-sm"
          helperText="This field has custom container styles"
        />
      </div>
    </div>
  ),
};

// Error state
export const ErrorState: Story = {
  args: {
    ...Default.args,
    error: true,
    helperText: 'This field is required',
  },
};

// Error state with value
export const ErrorStateWithValue: Story = {
  args: {
    ...Default.args,
    error: true,
    value: 'Invalid input',
    helperText: 'Please enter a valid value',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

// Disabled with value
export const DisabledWithValue: Story = {
  args: {
    ...Default.args,
    disabled: true,
    value: 'Disabled input value',
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-gray-700">Standard</h3>
        <TextField
          variant="standard"
          label="Standard"
          placeholder="Placeholder"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-gray-700">Filled</h3>
        <TextField
          variant="filled"
          label="Filled"
          placeholder="Placeholder"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-gray-700">Outlined</h3>
        <TextField
          variant="outlined"
          label="Outlined"
          placeholder="Placeholder"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Available TextField variants: Standard, Filled, and Outlined',
      },
    },
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-gray-700">Small</h3>
        <TextField
          size="small"
          label="Small TextField"
          placeholder="Small size"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-sm text-gray-700">Medium</h3>
        <TextField
          size="medium"
          label="Medium TextField"
          placeholder="Medium size"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Available TextField sizes: Small and Medium',
      },
    },
  },
};

// All states for Standard variant
export const StandardStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-gray-700 col-span-2">Standard - Without Value</h3>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Enabled</p>
          <TextField variant="standard" label="Label" />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Focused (hover to see)</p>
          <TextField variant="standard" label="Label" autoFocus />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Error</p>
          <TextField variant="standard" label="Label" error />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Disabled</p>
          <TextField variant="standard" label="Label" disabled />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-gray-700">Standard - With Value</h3>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Enabled</p>
          <TextField variant="standard" label="Label" value="Value" />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Focused</p>
          <TextField variant="standard" label="Label" value="Value" autoFocus />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Error</p>
          <TextField variant="standard" label="Label" value="Value" error />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Disabled</p>
          <TextField variant="standard" label="Label" value="Value" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All states for the Standard TextField variant',
      },
    },
  },
};

// All states for Filled variant
export const FilledStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-gray-700">Filled - Without Value</h3>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Enabled</p>
          <TextField variant="filled" label="Label" />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Focused</p>
          <TextField variant="filled" label="Label" autoFocus />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Error</p>
          <TextField variant="filled" label="Label" error />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Disabled</p>
          <TextField variant="filled" label="Label" disabled />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-gray-700">Filled - With Value</h3>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Enabled</p>
          <TextField variant="filled" label="Label" value="Value" />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Focused</p>
          <TextField variant="filled" label="Label" value="Value" autoFocus />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Error</p>
          <TextField variant="filled" label="Label" value="Value" error />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Disabled</p>
          <TextField variant="filled" label="Label" value="Value" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All states for the Filled TextField variant',
      },
    },
  },
};

// All states for Outlined variant
export const OutlinedStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-gray-700">Outlined - Without Value</h3>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Enabled</p>
          <TextField variant="outlined" label="Label" />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Focused</p>
          <TextField variant="outlined" label="Label" autoFocus />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Error</p>
          <TextField variant="outlined" label="Label" error />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Disabled</p>
          <TextField variant="outlined" label="Label" disabled />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-sm text-gray-700">Outlined - With Value</h3>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Enabled</p>
          <TextField variant="outlined" label="Label" value="Value" />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Focused</p>
          <TextField variant="outlined" label="Label" value="Value" autoFocus />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Error</p>
          <TextField variant="outlined" label="Label" value="Value" error />
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Disabled</p>
          <TextField variant="outlined" label="Label" value="Value" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All states for the Outlined TextField variant',
      },
    },
  },
};

// Size comparisons
export const SizeComparisons: Story = {
  render: () => (
    <div className="space-y-8 w-80">
      {(['standard', 'filled', 'outlined'] as TextFieldVariantType[]).map((variant) => (
        <div key={variant} className="space-y-4">
          <h3 className="font-semibold text-sm text-gray-700 capitalize">{variant}</h3>
          
          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 mb-1">Small</p>
              <TextField
                variant={variant}
                size="small"
                label="Small"
                placeholder="Small placeholder"
              />
            </div>
            
            <div>
              <p className="text-xs text-gray-500 mb-1">Medium</p>
              <TextField
                variant={variant}
                size="medium"
                label="Medium"
                placeholder="Medium placeholder"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Size comparison across all TextField variants',
      },
    },
  },
};

// Complete showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
      {(['standard', 'filled', 'outlined'] as TextFieldVariantType[]).map((variant) => (
        <div key={variant} className="space-y-4">
          <h3 className="font-semibold text-lg text-gray-800 capitalize text-center">{variant}</h3>
          
          {(['small', 'medium'] as TextFieldSizeVariant[]).map((size) => (
            <div key={size} className="space-y-3">
              <h4 className="font-medium text-sm text-gray-600 capitalize">{size}</h4>
              
              <div className="space-y-2">
                <TextField
                  variant={variant}
                  size={size}
                  label="Enabled"
                  placeholder="Placeholder"
                />
                
                <TextField
                  variant={variant}
                  size={size}
                  label="With Value"
                  value="Sample value"
                />
                
                <TextField
                  variant={variant}
                  size={size}
                  label="Error"
                  error
                  helperText="Error message"
                />
                
                <TextField
                  variant={variant}
                  size={size}
                  label="Disabled"
                  disabled
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all TextField variants, sizes, and states',
      },
    },
  },
};
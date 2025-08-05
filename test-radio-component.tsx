// Simple test file to verify RadioGroup component
// This demonstrates the component usage without needing a full build

import React, { useState } from 'react';
import { RadioGroup, Radio } from './app/ui/components/RadioGroup';

// Test data
const testOptions = [
  { value: 'option1', label: 'First Option' },
  { value: 'option2', label: 'Second Option' },
  { value: 'option3', label: 'Third Option' },
];

const optionsWithDisabled = [
  { value: 'enabled1', label: 'Enabled Option' },
  { value: 'disabled', label: 'Disabled Option', disabled: true },
  { value: 'enabled2', label: 'Another Enabled Option' },
];

// Test component demonstrating all features
function RadioGroupTests() {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [colorValue, setColorValue] = useState('primary');
  const [sizeValue, setSizeValue] = useState('medium');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>RadioGroup Component Tests</h1>
      
      {/* Basic usage */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Basic RadioGroup</h2>
        <RadioGroup
          options={testOptions}
          label="Select an option"
          value={selectedValue}
          onChange={(event, value) => setSelectedValue(value)}
        />
        <p>Selected: {selectedValue}</p>
      </section>

      {/* Different colors */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Color Variants</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {['primary', 'secondary', 'error', 'warning', 'info', 'success'].map(color => (
            <div key={color}>
              <h3 style={{ textTransform: 'capitalize' }}>{color}</h3>
              <RadioGroup
                options={testOptions.slice(0, 2)}
                color={color as any}
                value="option1"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Different sizes */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Size Variants</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {['small', 'medium', 'large'].map(size => (
            <div key={size}>
              <h3 style={{ textTransform: 'capitalize' }}>{size}</h3>
              <RadioGroup
                options={testOptions.slice(0, 2)}
                size={size as any}
                value="option1"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Horizontal layout */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Horizontal Layout</h2>
        <RadioGroup
          options={testOptions}
          direction="row"
          label="Horizontal options"
          value={selectedValue}
          onChange={(event, value) => setSelectedValue(value)}
        />
      </section>

      {/* Error state */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Error State</h2>
        <RadioGroup
          options={testOptions}
          label="Required field"
          required
          error={true}
          helperText="Please select an option"
        />
      </section>

      {/* Disabled states */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Disabled States</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div>
            <h3>Entire group disabled</h3>
            <RadioGroup
              options={testOptions}
              disabled
              value="option1"
              label="Disabled group"
            />
          </div>
          <div>
            <h3>Individual options disabled</h3>
            <RadioGroup
              options={optionsWithDisabled}
              value="enabled1"
              label="Mixed enabled/disabled"
            />
          </div>
        </div>
      </section>

      {/* Individual Radio components */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Individual Radio Components</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Radio checked={false} label="Unchecked" />
          <Radio checked={true} label="Checked" />
          <Radio checked={false} disabled label="Disabled unchecked" />
          <Radio checked={true} disabled label="Disabled checked" />
        </div>
      </section>

      {/* All combinations showcase */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Complete Showcase</h2>
        <p>This demonstrates all combinations of colors and sizes as specified in Figma</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px' }}>
          {['primary', 'secondary', 'error', 'warning', 'info', 'success'].map(color => (
            <div key={color} style={{ textAlign: 'center' }}>
              <h4 style={{ textTransform: 'capitalize', margin: '0 0 10px 0' }}>{color}</h4>
              {['small', 'medium', 'large'].map(size => (
                <div key={size} style={{ marginBottom: '10px' }}>
                  <div style={{ fontSize: '12px', marginBottom: '5px' }}>{size}</div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                    <Radio color={color as any} size={size as any} checked={false} />
                    <Radio color={color as any} size={size as any} checked={true} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RadioGroupTests;

// Export for potential testing
export { testOptions, optionsWithDisabled };
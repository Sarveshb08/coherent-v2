# Stepper Component

A customizable stepper component built with TypeScript, Material UI, and following the Figma design system specifications. Displays progress through a sequence of logical and numbered steps.

## Features

- **Multiple Orientations**: Horizontal and vertical layouts
- **Label Alignment**: Left-aligned and center-aligned label variants
- **Step States**: Active, completed, inactive, and disabled states
- **Custom Icons**: Check mark for completed steps, numbered circles for others
- **Optional Text**: Secondary text below main step labels
- **Responsive**: Small screen support for mobile layouts
- **Design Token Integration**: Uses centralized design tokens for colors and typography
- **TypeScript Support**: Fully typed with proper interfaces
- **Accessibility**: Built on Material-UI foundation with proper ARIA support

## Usage

### Basic Usage

```tsx
import { Stepper } from '@/app/ui/components';

const steps = [
  { label: 'Select campaign settings', completed: true },
  { label: 'Create an ad group' },
  { label: 'Create an ad' },
];

// Basic horizontal stepper
<Stepper
  steps={steps}
  activeStep={1}
/>

// Vertical stepper with center alignment
<Stepper
  steps={steps}
  activeStep={1}
  orientation="vertical"
  alignment="center"
/>
```

### Advanced Usage

```tsx
import { Stepper, StepData } from '@/app/ui/components';

const stepsWithOptional: StepData[] = [
  { 
    label: 'Step title', 
    optional: 'Optional',
    completed: true 
  },
  { 
    label: 'Step title', 
    optional: 'Optional' 
  },
  { 
    label: 'Step title',
    disabled: true 
  },
];

// Interactive stepper with click handlers
<Stepper
  steps={stepsWithOptional}
  activeStep={1}
  orientation="horizontal"
  alignment="left"
  showOptional={true}
  onStepClick={(step) => console.log('Clicked step:', step)}
/>

// Small screen responsive layout
<Stepper
  steps={steps}
  activeStep={1}
  smallScreen={true}
  showOptional={false}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `StepData[]` | - | Array of step data objects |
| `activeStep` | `number` | `0` | Index of the currently active step (0-based) |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout orientation |
| `alignment` | `'left' \| 'center'` | `'left'` | Label alignment relative to step icons |
| `showOptional` | `boolean` | `true` | Whether to display optional text below labels |
| `smallScreen` | `boolean` | `false` | Enable small screen responsive layout |
| `className` | `string` | - | Additional CSS classes |
| `onStepClick` | `(step: number) => void` | - | Callback for step click events |

## StepData Interface

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | - | Primary text for the step |
| `optional` | `string` | - | Optional secondary text below the label |
| `completed` | `boolean` | `false` | Whether the step is completed |
| `disabled` | `boolean` | `false` | Whether the step is disabled |

## Design Variants

### Orientations
- **Horizontal**: Steps arranged in a row with connectors
- **Vertical**: Steps arranged in a column with vertical connectors

### Label Alignments
- **Left**: Labels positioned to the right of step icons
- **Center**: Labels positioned below step icons (works best with horizontal orientation)

### Step States
- **Active**: Current step with primary color (#6930CA)
- **Completed**: Finished step with check icon and primary color
- **Inactive**: Future step with gray color (#a6a7b0)  
- **Disabled**: Unavailable step with disabled styling

## Design Tokens

The component uses the following design tokens from the Figma design system:

- **Colors**: 
  - Active: `#6930ca` (secondary.main)
  - Completed: `#00a331` (success.light) 
  - Inactive: `#a6a7b0` 
  - Text: `rgba(0, 0, 0, 0.87)` for active/completed, `rgba(0, 0, 0, 0.6)` for inactive
- **Typography**: 
  - Step numbers: Proxima Nova Bold, 18px (handled by MUI theme overrides)
  - Labels: Roboto Medium/Regular, 14px
  - Optional text: Roboto Regular, 12px
- **Sizing**: 24px step circles (handled by MUI theme overrides)

## Implementation Approach

This component follows the **MUI-First Development Rules**:

1. **Leverages MUI's built-in capabilities**: Uses `alternativeLabel`, `orientation`, and standard Step components
2. **Theme-based customization**: All visual styling handled through theme overrides in `/app/ui/theme/overrides/Stepper.override.ts`
3. **Minimal component logic**: Only handles data transformation and prop mapping
4. **Exact Figma compliance**: Colors, typography, and spacing match design specifications exactly

## Accessibility

- Full keyboard navigation support
- Screen reader compatible with proper ARIA labels
- High contrast color ratios
- Focus indicators for interactive steps
- Semantic HTML structure

## Storybook

View all component variants and states in Storybook:

```bash
npm run storybook
```

The component includes comprehensive stories showing all orientations, alignments, and step states to help with development and testing.

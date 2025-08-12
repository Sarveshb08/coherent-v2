# Stepper Component

A comprehensive stepper component system that follows the Material-UI design guidelines and supports both desktop and mobile layouts. The component provides visual feedback for multi-step processes and workflows.

## Features

- **Three Component Types**: 
  - `Stepper` - Main desktop/tablet stepper with horizontal and vertical layouts
  - `MobileStepper` - Mobile-optimized stepper with text, dots, and progress variants
  - `ResponsiveStepper` - Automatically switches between desktop and mobile variants

- **Multiple Orientations**: Horizontal and vertical layouts for desktop steppers
- **Text Alignment**: Left-aligned or center-aligned step labels
- **Step States**: Default, active, completed, error, and disabled states
- **Mobile Variants**: Text counter, dots indicator, or linear progress bar
- **Optional Steps**: Support for optional step indicators
- **Clickable Steps**: Navigate between steps by clicking step icons
- **Theme Integration**: Fully integrated with the design system theme

## Usage

### Basic Desktop Stepper

```tsx
import { Stepper } from '@/app/ui/components';

const steps = [
  { label: 'Select campaign settings', completed: true },
  { label: 'Create an ad group', optional: 'Optional' },
  { label: 'Create an ad' },
];

<Stepper
  activeStep={1}
  steps={steps}
  orientation="horizontal"
  textAlignment="left"
  onStepClick={(stepIndex) => console.log('Step clicked:', stepIndex)}
/>
```

### Mobile Stepper

```tsx
import { MobileStepper } from '@/app/ui/components';

<MobileStepper
  variant="dots"
  steps={3}
  activeStep={1}
  onNext={handleNext}
  onBack={handleBack}
  backDisabled={activeStep === 0}
  nextDisabled={activeStep === 2}
/>
```

### Responsive Stepper

```tsx
import { ResponsiveStepper } from '@/app/ui/components';

<ResponsiveStepper
  steps={steps}
  activeStep={activeStep}
  mobileVariant="progress"
  onNext={handleNext}
  onBack={handleBack}
/>
```

## Props

### StepperProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `activeStep` | `number` | `0` | The active step (0-indexed) |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the stepper |
| `textAlignment` | `'left' \| 'center'` | `'left'` | Text alignment for step labels |
| `smallScreen` | `boolean` | `false` | Whether this is displayed on a small screen |
| `steps` | `StepData[]` | - | The steps to display |
| `onStepClick` | `(stepIndex: number) => void` | - | Callback fired when a step is clicked |
| `className` | `string` | - | Additional CSS classes |

### MobileStepperProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `activeStep` | `number` | - | The active step (0-indexed) |
| `steps` | `number` | - | Total number of steps |
| `variant` | `'text' \| 'dots' \| 'progress'` | `'dots'` | The variant of the mobile stepper |
| `onBack` | `() => void` | - | Callback for the back button |
| `onNext` | `() => void` | - | Callback for the next button |
| `backButtonText` | `string` | `'Back'` | Text for the back button |
| `nextButtonText` | `string` | `'Next'` | Text for the next button |
| `backDisabled` | `boolean` | `false` | Whether the back button is disabled |
| `nextDisabled` | `boolean` | `false` | Whether the next button is disabled |

### StepData

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | The step label/title |
| `optional` | `string` | - | Optional text for the step |
| `completed` | `boolean` | `false` | Whether this step is completed |
| `disabled` | `boolean` | `false` | Whether this step is disabled |
| `error` | `boolean` | `false` | Whether this step has an error |
| `icon` | `ReactNode` | - | Custom icon for the step |

## Design Tokens

The component uses design tokens from the theme system for consistent styling:

### Colors
- **Completed**: Green background with white checkmark
- **Active**: Primary purple background with white text
- **Inactive**: Gray background with white text
- **Connector**: Purple for completed/active, gray for inactive

### Typography
- **Step Title**: Roboto 500, 14px for labels
- **Optional Text**: Roboto 400, 12px for optional indicators
- **Step Numbers**: Proxima Nova 700, 18px for step numbers

### Spacing
- **Step Gap**: 8px between steps
- **Content Gap**: 16px between step icon and content (vertical layout)
- **Optional Gap**: 4px between step title and optional text

## Examples

### Horizontal Stepper with Optional Steps

```tsx
const steps = [
  { label: 'Account Information', completed: true },
  { label: 'Personal Details', optional: 'Optional' },
  { label: 'Verification', error: true },
  { label: 'Confirmation' },
];

<Stepper
  activeStep={2}
  steps={steps}
  orientation="horizontal"
  textAlignment="left"
/>
```

### Vertical Stepper

```tsx
<Stepper
  activeStep={1}
  steps={steps}
  orientation="vertical"
  textAlignment="left"
/>
```

### Mobile Stepper with Progress Bar

```tsx
<MobileStepper
  variant="progress"
  steps={5}
  activeStep={2}
  onNext={() => setActiveStep(prev => prev + 1)}
  onBack={() => setActiveStep(prev => prev - 1)}
  nextButtonText="Continue"
  backButtonText="Previous"
/>
```

## Accessibility

- Supports keyboard navigation between clickable steps
- Proper ARIA labels and roles for screen readers
- High contrast colors for better visibility
- Focus management for interactive elements

## Best Practices

1. **Use appropriate variants**: Use desktop stepper for larger screens and mobile stepper for mobile devices
2. **Provide clear labels**: Use descriptive step labels that clearly indicate the step's purpose
3. **Handle state properly**: Update the `activeStep` and step completion states appropriately
4. **Optional steps**: Mark non-essential steps as optional to guide user expectations
5. **Error handling**: Use error states to indicate validation issues or failures
6. **Navigation**: Implement proper navigation logic when allowing step clicking
# Stepper Component

A comprehensive stepper component collection for the Coherent-v2 design system, implementing the Material UI stepper components with custom design tokens from Figma.

## Components

### Stepper
Main stepper component supporting both horizontal and vertical orientations.

### MobileStepper  
Mobile-optimized stepper with three variants: text, dots, and progress.

### DesktopStepper
Desktop stepper with integrated content area and action buttons.

## Features

- **Multiple Orientations**: Horizontal and vertical layouts
- **Step States**: Active, completed, and disabled states with visual indicators
- **Mobile Variants**: Text counter (1/5), progress dots, and linear progress bar
- **Alignment Options**: Left and center alignment for step content
- **Optional Text**: Support for optional step descriptions
- **Interactive Navigation**: Built-in back/next button support
- **Theme Integration**: Uses design tokens from Figma specifications
- **TypeScript Support**: Full type definitions included

## Usage

### Basic Stepper

```tsx
import { Stepper } from '@/ui/components/Stepper';

const steps = [
  { label: 'Step 1', completed: true },
  { label: 'Step 2' },
  { label: 'Step 3' },
];

<Stepper 
  steps={steps}
  activeStep={1}
  orientation="horizontal"
/>
```

### MobileStepper

```tsx
import { MobileStepper } from '@/ui/components/Stepper';

<MobileStepper
  steps={5}
  activeStep={2}
  variant="dots"
  onNext={handleNext}
  onBack={handleBack}
/>
```

### DesktopStepper

```tsx
import { DesktopStepper } from '@/ui/components/Stepper';

<DesktopStepper
  steps={steps}
  activeStep={1}
  onNext={handleNext}
  onBack={handleBack}
>
  <div>Content for current step</div>
</DesktopStepper>
```

## Props

### StepperProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `StepConfig[]` | - | Array of step configurations |
| `activeStep` | `number` | - | Currently active step (0-indexed) |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Stepper orientation |
| `showOptional` | `boolean` | `false` | Show optional text for steps |
| `alignment` | `'left' \| 'center'` | `'left'` | Step content alignment |

### MobileStepperProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `number` | - | Total number of steps |
| `activeStep` | `number` | - | Currently active step (0-indexed) |
| `variant` | `'text' \| 'dots' \| 'progress'` | `'dots'` | Display variant |
| `onNext` | `() => void` | - | Next button click handler |
| `onBack` | `() => void` | - | Back button click handler |
| `backButtonText` | `string` | `'Back'` | Text for back button |
| `nextButtonText` | `string` | `'Next'` | Text for next button |

### DesktopStepperProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `StepConfig[]` | - | Array of step configurations |
| `activeStep` | `number` | - | Currently active step (0-indexed) |
| `children` | `ReactNode` | - | Content to display in the content area |
| `onNext` | `() => void` | - | Next button click handler |
| `onBack` | `() => void` | - | Back button click handler |
| `showActions` | `boolean` | `true` | Whether to show action buttons |

## Step Configuration

```tsx
interface StepConfig {
  label: string;           // Step label text
  optional?: string;       // Optional descriptive text
  completed?: boolean;     // Whether step is completed
  disabled?: boolean;      // Whether step is disabled
  content?: ReactNode;     // Custom content for the step
}
```

## Design Tokens

The component uses the following design tokens:

### Colors
- `stepper.connector`: Inactive connector color (#A6A7B0)
- `stepper.activeConnector`: Active connector color (#6930CA)
- `stepper.numberBackground`: Inactive step background (#A6A7B0)
- `stepper.activeNumberBackground`: Active step background (#6930CA)
- `stepper.completedNumberBackground`: Completed step background (#6930CA)

### Typography
- Step labels: Roboto Medium 14px
- Optional text: Roboto Regular 12px
- Step numbers: Proxima Nova Bold 18px

### Sizing
- Step icon: 24x24px circular
- Connector: 1px height/width
- Mobile dots: 8x8px
- Progress bar: 4px height, 200px min-width

## Accessibility

- Proper ARIA labels for step states
- Keyboard navigation support
- Screen reader friendly step descriptions
- High contrast color ratios

## Examples

See the Storybook documentation for interactive examples of all variants and configurations.

## Migration from MUI

This component is a drop-in replacement for MUI Stepper components with enhanced theming and additional features. Most MUI Stepper props are supported through prop forwarding.
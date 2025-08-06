# Notification Component

A notification/alert component based on the Figma design system that displays important messages to users.

## Features

- **Multiple Severity Types**: Error, Warning, Info, Success
- **Multiple Variants**: Filled, Outlined, Standard
- **Customizable Content**: Title and optional description
- **Material-UI Integration**: Built on MUI Alert component
- **Accessibility**: Proper ARIA labels and semantic structure
- **TypeScript Support**: Full type safety

## Usage

```tsx
import { Notification } from '@/app/ui/components';

// Basic usage
<Notification
  severity="error"
  title="Something went wrong"
  description="Please try again later"
/>

// Different variants
<Notification
  severity="success"
  variant="filled"
  title="Success!"
  description="Your changes have been saved"
/>

<Notification
  severity="warning"
  variant="outlined"
  title="Warning"
  description="This action cannot be undone"
/>

<Notification
  severity="info"
  variant="standard"
  title="Information"
  description="New features are available"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `severity` | `'error' \| 'warning' \| 'info' \| 'success'` | - | The severity type of the notification |
| `variant` | `'filled' \| 'outlined' \| 'standard'` | `'filled'` | The variant style of the notification |
| `title` | `string` | - | The main title/message of the notification |
| `description` | `string` | - | Optional description text for additional details |
| `className` | `string` | - | Additional CSS classes |
| `closable` | `boolean` | `false` | Whether to show a close button |
| `onClose` | `() => void` | - | Callback when notification is closed |

## Design Tokens

The component uses the following design tokens from the Figma design:

### Colors
- **Error**: `#DF5555` (filled), `#D32F2F` (outlined/standard), `#5F2120` (text)
- **Warning**: `#D68309` (filled/outlined), `#FFF8E1` (standard), `#663C00` (text)
- **Info**: `#D68309` (filled/outlined), `#FFF8E1` (standard), `#663C00` (text)
- **Success**: `#00A331` (filled/outlined), `rgba(0, 163, 49, 0.1)` (standard), `#1E4620` (text)

### Typography
- **Title**: Roboto Medium 16px, line-height 1.5em
- **Description**: Roboto Regular 14px, line-height 1.43em

### Layout
- **Padding**: 6px 16px
- **Border Radius**: 6px
- **Icon Size**: 22px
- **Gap**: 4px between title and description

## Accessibility

- Uses semantic HTML structure
- Proper ARIA labels from MUI Alert
- Color contrast compliant with WCAG guidelines
- Keyboard navigation support (when closable)
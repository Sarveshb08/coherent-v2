'use client'

import { EnhancedButton } from '@/app/ui/enhanced-button';
import { 
  PlusIcon, 
  PencilIcon, 
  TrashIcon, 
  CheckIcon, 
  ExclamationTriangleIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

export default function ButtonDemo() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Enhanced Button Component</h1>
        <p className="text-lg text-gray-600">Comprehensive button system with design tokens</p>
      </div>

      {/* Button Variants */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <EnhancedButton variant="primary">Primary</EnhancedButton>
          <EnhancedButton variant="secondary">Secondary</EnhancedButton>
          <EnhancedButton variant="outline">Outline</EnhancedButton>
          <EnhancedButton variant="ghost">Ghost</EnhancedButton>
          <EnhancedButton variant="success">Success</EnhancedButton>
          <EnhancedButton variant="warning">Warning</EnhancedButton>
          <EnhancedButton variant="danger">Danger</EnhancedButton>
        </div>
      </section>

      {/* Button Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <EnhancedButton size="xs" variant="primary">Extra Small</EnhancedButton>
          <EnhancedButton size="sm" variant="primary">Small</EnhancedButton>
          <EnhancedButton size="md" variant="primary">Medium</EnhancedButton>
          <EnhancedButton size="lg" variant="primary">Large</EnhancedButton>
          <EnhancedButton size="xl" variant="primary">Extra Large</EnhancedButton>
        </div>
      </section>

      {/* Buttons with Icons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Buttons with Icons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Left Icon</h3>
            <div className="flex flex-wrap gap-3">
              <EnhancedButton icon={<PlusIcon />} variant="primary">Create</EnhancedButton>
              <EnhancedButton icon={<PencilIcon />} variant="secondary">Edit</EnhancedButton>
              <EnhancedButton icon={<TrashIcon />} variant="danger" size="sm">Delete</EnhancedButton>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Right Icon</h3>
            <div className="flex flex-wrap gap-3">
              <EnhancedButton icon={<ArrowRightIcon />} iconPosition="right" variant="primary">Continue</EnhancedButton>
              <EnhancedButton icon={<CheckIcon />} iconPosition="right" variant="success">Confirm</EnhancedButton>
              <EnhancedButton icon={<ExclamationTriangleIcon />} iconPosition="right" variant="warning" size="sm">Warning</EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Only Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Icon Only Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <EnhancedButton icon={<PlusIcon />} variant="primary" size="sm" rounded />
          <EnhancedButton icon={<PencilIcon />} variant="outline" size="md" rounded />
          <EnhancedButton icon={<TrashIcon />} variant="danger" size="lg" rounded />
          <EnhancedButton icon={<CheckIcon />} variant="success" size="xs" rounded />
        </div>
      </section>

      {/* Button States */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Button States</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Default</h3>
            <div className="space-y-2">
              <EnhancedButton variant="primary">Normal Button</EnhancedButton>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Loading</h3>
            <div className="space-y-2">
              <EnhancedButton variant="primary" state="loading">Loading...</EnhancedButton>
              <EnhancedButton variant="secondary" state="loading" icon={<PlusIcon />}>Creating...</EnhancedButton>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Disabled</h3>
            <div className="space-y-2">
              <EnhancedButton variant="primary" disabled>Disabled Button</EnhancedButton>
              <EnhancedButton variant="outline" state="disabled">Disabled State</EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Special Styles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Special Styles</h2>
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Full Width</h3>
            <EnhancedButton variant="primary" fullWidth>Full Width Button</EnhancedButton>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">Rounded & Shadow</h3>
            <div className="flex flex-wrap gap-3">
              <EnhancedButton variant="primary" rounded>Rounded Button</EnhancedButton>
              <EnhancedButton variant="secondary" shadow>Shadow Button</EnhancedButton>
              <EnhancedButton variant="success" rounded shadow>Rounded + Shadow</EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Interactive Demo</h2>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <p className="text-gray-600 mb-4">Try clicking these buttons to see hover and active states:</p>
          <div className="flex flex-wrap gap-3">
            <EnhancedButton 
              variant="primary" 
              icon={<PlusIcon />}
              onClick={() => alert('Primary button clicked!')}
            >
              Click Me
            </EnhancedButton>
            <EnhancedButton 
              variant="outline" 
              icon={<CheckIcon />}
              iconPosition="right"
              onClick={() => alert('Outline button clicked!')}
            >
              Confirm Action
            </EnhancedButton>
            <EnhancedButton 
              variant="danger" 
              icon={<TrashIcon />}
              size="sm"
              onClick={() => confirm('Are you sure you want to delete?')}
            >
              Delete Item
            </EnhancedButton>
          </div>
        </div>
      </section>
    </div>
  );
}
import { EnhancedButton } from '@/app/ui/enhanced-button';
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

// Example usage of EnhancedButton for invoice actions
// This demonstrates how to migrate existing button styles to the new component

export function EnhancedCreateInvoice() {
  return (
    <EnhancedButton
      variant="primary"
      size="md"
      icon={<PlusIcon />}
      href="/dashboard/invoices/create"
      as="a"
    >
      <span className="hidden md:block">Create Invoice</span>
    </EnhancedButton>
  );
}

export function EnhancedUpdateInvoice({ id }: { id: string }) {
  return (
    <EnhancedButton
      variant="outline"
      size="sm"
      icon={<PencilIcon />}
      href="/dashboard/invoices"
      as="a"
      rounded
    />
  );
}

export function EnhancedDeleteInvoice({ id }: { id: string }) {
  return (
    <EnhancedButton
      variant="ghost"
      size="sm"
      icon={<TrashIcon />}
      rounded
      type="submit"
    >
      <span className="sr-only">Delete</span>
    </EnhancedButton>
  );
}
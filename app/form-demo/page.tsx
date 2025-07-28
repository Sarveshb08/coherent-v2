'use client';

import BankForm from '@/app/ui/bank-form';

export default function FormDemoPage() {
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    alert('Form submitted! Check console for data.');
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Bank Account Form
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Form component created from Figma design using Material UI design system principles
          </p>
          
          {/* Form Component */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <BankForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </main>
  );
}
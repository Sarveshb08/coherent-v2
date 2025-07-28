'use client';

import React, { useState } from 'react';
import { tailwindClasses } from './design-tokens';

interface FormData {
  name: string;
  accountNumber: string;
  bankName: string;
  ifsc: string;
  address: string;
  accountType: 'savings' | 'current';
}

interface BankFormProps {
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export function BankForm({ onSubmit, className = '' }: BankFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    accountNumber: '',
    bankName: '',
    ifsc: '',
    address: '',
    accountType: 'savings',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      accountType: e.target.value as 'savings' | 'current',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <div className={`${tailwindClasses.formContainer} ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div className={tailwindClasses.fieldGroup}>
          <label htmlFor="name" className={tailwindClasses.label}>
            Name (as per Aadhar)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="First name and Last name"
            className={tailwindClasses.input}
          />
        </div>

        {/* Account Number Field */}
        <div className={tailwindClasses.fieldGroup}>
          <label htmlFor="accountNumber" className={tailwindClasses.label}>
            Account number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            placeholder="123456789"
            className={tailwindClasses.input}
          />
        </div>

        {/* Bank Name Field */}
        <div className={tailwindClasses.fieldGroup}>
          <label htmlFor="bankName" className={tailwindClasses.label}>
            Bank name
          </label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            value={formData.bankName}
            onChange={handleInputChange}
            placeholder="XYZ"
            className={tailwindClasses.input}
          />
        </div>

        {/* IFSC Field */}
        <div className={tailwindClasses.fieldGroup}>
          <label htmlFor="ifsc" className={tailwindClasses.label}>
            IFSC
          </label>
          <input
            type="text"
            id="ifsc"
            name="ifsc"
            value={formData.ifsc}
            onChange={handleInputChange}
            placeholder="XYZ123456"
            className={tailwindClasses.input}
          />
        </div>

        {/* Account Type Radio Buttons */}
        <div className={tailwindClasses.fieldGroup}>
          <label className={tailwindClasses.label}>
            Account type
          </label>
          <div className={tailwindClasses.radioGroup}>
            <div className={tailwindClasses.radioItem}>
              <input
                type="radio"
                id="savings"
                name="accountType"
                value="savings"
                checked={formData.accountType === 'savings'}
                onChange={handleRadioChange}
                className={tailwindClasses.radioInput}
              />
              <label htmlFor="savings" className={tailwindClasses.radioLabel}>
                Savings account
              </label>
            </div>
            <div className={tailwindClasses.radioItem}>
              <input
                type="radio"
                id="current"
                name="accountType"
                value="current"
                checked={formData.accountType === 'current'}
                onChange={handleRadioChange}
                className={tailwindClasses.radioInput}
              />
              <label htmlFor="current" className={tailwindClasses.radioLabel}>
                Current account
              </label>
            </div>
          </div>
        </div>

        {/* Address Field */}
        <div className={tailwindClasses.fieldGroup}>
          <label htmlFor="address" className={tailwindClasses.label}>
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Your permanent address"
            rows={4}
            className={tailwindClasses.textarea}
          />
        </div>
      </form>
    </div>
  );
}

export default BankForm;
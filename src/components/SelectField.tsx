import React from 'react';
import { FormOption } from '../types';
import FormField from './FormField';

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: FormOption[];
  required?: boolean;
}

export default function SelectField({ 
  label, 
  name, 
  value, 
  onChange, 
  options,
  required = false 
}: SelectFieldProps) {
  return (
    <FormField label={label}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
        required={required}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
}
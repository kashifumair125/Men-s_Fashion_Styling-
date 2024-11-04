import React, { useState } from 'react';
import { UserPreferences } from '../types';
import FormSection from './FormSection';
import FormField from './FormField';
import SelectField from './SelectField';
import { bodyTypes, skinTones, hairColors, occasions, seasons } from '../data/formOptions';

interface StyleFormProps {
  onSubmit: (preferences: UserPreferences) => void;
}

export default function StyleForm({ onSubmit }: StyleFormProps) {
  const [formData, setFormData] = useState({
    age: '',
    bodyType: '',
    skinTone: '',
    hairColor: '',
    hairStyle: '',
    occasion: '',
    season: '',
    budget: '',
    existingColors: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as UserPreferences);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Find Your Perfect Style</h2>
        <p className="text-gray-600">Tell us about yourself for personalized recommendations</p>
      </div>

      <FormSection title="Personal Details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Age">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              required
            />
          </FormField>

          <SelectField
            label="Body Type"
            name="bodyType"
            value={formData.bodyType}
            onChange={handleChange}
            options={bodyTypes}
            required
          />

          <SelectField
            label="Skin Tone"
            name="skinTone"
            value={formData.skinTone}
            onChange={handleChange}
            options={skinTones}
            required
          />
        </div>
      </FormSection>

      <FormSection title="Hair Details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField
            label="Hair Color"
            name="hairColor"
            value={formData.hairColor}
            onChange={handleChange}
            options={hairColors}
            required
          />

          <FormField label="Hair Style">
            <input
              type="text"
              name="hairStyle"
              value={formData.hairStyle}
              onChange={handleChange}
              placeholder="e.g., Short crop, Medium length, etc."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </FormField>
        </div>
      </FormSection>

      <FormSection title="Style Preferences">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField
            label="Occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            options={occasions}
            required
          />

          <SelectField
            label="Season"
            name="season"
            value={formData.season}
            onChange={handleChange}
            options={seasons}
            required
          />

          <FormField label="Budget Range (₹)">
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Enter your budget"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              required
            />
          </FormField>

          <FormField label="Colors You Already Own">
            <input
              type="text"
              name="existingColors"
              value={formData.existingColors}
              onChange={handleChange}
              placeholder="e.g., blue, black, white"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </FormField>
        </div>
      </FormSection>

      <div className="text-center">
        <button
          type="submit"
          className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors"
        >
          Get Recommendations
        </button>
      </div>
    </form>
  );
}
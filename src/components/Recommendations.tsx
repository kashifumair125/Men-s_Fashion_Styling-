import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OutfitCard from './OutfitCard';
import { UserPreferences } from '../types';

interface RecommendationsProps {
  preferences: UserPreferences;
}

const outfitSuggestions = {
  wedding: [
    {
      title: 'Modern Ethnic',
      image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&q=80&w=600',
      items: ['Navy Blue Bandhgala', 'White Churidar', 'Tan Leather Mojaris'],
      price: '15000',
      description: 'Perfect for wedding ceremonies, this ensemble combines traditional elements with contemporary styling.'
    },
    {
      title: 'Contemporary Fusion',
      image: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?auto=format&fit=crop&q=80&w=600',
      items: ['Black Sherwani', 'Gold Dhoti Pants', 'Traditional Jutis'],
      price: '25000',
      description: 'A modern take on traditional wear, ideal for making a statement at weddings.'
    }
  ],
  casual: [
    {
      title: 'Street Smart',
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=600',
      items: ['White Linen Shirt', 'Beige Chinos', 'Brown Loafers'],
      price: '5000',
      description: 'A versatile casual look that works for both day and evening occasions.'
    },
    {
      title: 'Weekend Casual',
      image: 'https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?auto=format&fit=crop&q=80&w=600',
      items: ['Denim Shirt', 'Black Jeans', 'White Sneakers'],
      price: '4500',
      description: 'Perfect for weekend outings, this combination offers both style and comfort.'
    }
  ]
} as const;

export default function Recommendations({ preferences }: RecommendationsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const suggestions = outfitSuggestions[preferences.occasion as keyof typeof outfitSuggestions] || [];
  const itemsPerPage = 4;
  const totalPages = Math.ceil(suggestions.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Your Personalized Recommendations</h2>
        <p className="text-gray-600">Based on your preferences and style profile</p>
      </div>

      <div className="relative">
        {suggestions.length > itemsPerPage && (
          <>
            <button
              onClick={prevPage}
              className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors md:flex hidden items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPage}
              className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors md:flex hidden items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x md:snap-none">
          {suggestions.map((outfit, index) => (
            <div
              key={index}
              className="snap-center shrink-0 first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0"
            >
              <OutfitCard
                outfit={outfit}
                onSave={() => console.log('Saved:', outfit.title)}
                onShare={() => console.log('Shared:', outfit.title)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-xl">
        <h3 className="text-xl font-bold mb-6">Personalized Styling Tips</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold">Based on Your Features</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                <p>Choose colors that complement your {preferences.skinTone.toLowerCase()} skin tone</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                <p>For your {preferences.bodyType.toLowerCase()} body type, focus on well-fitted silhouettes</p>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Seasonal & Style Tips</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                <p>Consider layering options for {preferences.season.toLowerCase()} weather</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                <p>Your {preferences.hairColor.toLowerCase()} hair color works well with {getColorSuggestions(preferences.hairColor)}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function getColorSuggestions(hairColor: string): string {
  const suggestions = {
    black: 'jewel tones and bright colors',
    darkBrown: 'earth tones and warm colors',
    brown: 'neutral colors and pastels',
    lightBrown: 'cool tones and muted colors'
  };
  return suggestions[hairColor as keyof typeof suggestions] || 'a variety of colors';
}
import React from 'react';
import { ShoppingBag, Heart, Share2 } from 'lucide-react';

interface OutfitCardProps {
  outfit: {
    title: string;
    image: string;
    items: string[];
    price: string;
    description: string;
  };
  onSave?: () => void;
  onShare?: () => void;
}

export default function OutfitCard({ outfit, onSave, onShare }: OutfitCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[3/4]">
        <img
          src={outfit.image}
          alt={outfit.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button 
            onClick={onSave}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
          >
            <Heart className="w-5 h-5" />
          </button>
          <button 
            onClick={onShare}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{outfit.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{outfit.description}</p>
        <ul className="space-y-2 mb-4">
          {outfit.items.map((item, i) => (
            <li key={i} className="text-gray-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-lg font-bold">₹{outfit.price}</span>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors">
            <ShoppingBag className="w-4 h-4" />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
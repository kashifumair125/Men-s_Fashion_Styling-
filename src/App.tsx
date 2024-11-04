import React, { useState } from 'react';
import { Sparkles, User, ShoppingBag, Palette, Calendar, Scissors } from 'lucide-react';
import StyleForm from './components/StyleForm';
import Recommendations from './components/Recommendations';
import { UserPreferences } from './types';

function App() {
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <header className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=1920"
          alt="Stylish man in traditional Indian wear"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Your Style
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Personalized fashion recommendations for the modern Indian man
            </p>
            <button
              onClick={() => document.getElementById('style-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <User className="w-8 h-8" />,
                title: "Personal Profile",
                description: "Share your preferences and body type"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Style Analysis",
                description: "Get recommendations based on your features"
              },
              {
                icon: <ShoppingBag className="w-8 h-8" />,
                title: "Shop The Look",
                description: "Find and purchase recommended items"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Form Section */}
      <section id="style-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <StyleForm onSubmit={setUserPreferences} />
        </div>
      </section>

      {/* Recommendations Section */}
      {userPreferences && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <Recommendations preferences={userPreferences} />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">StyleSage</h4>
              <p className="text-gray-400">
                Personalized fashion recommendations for the modern Indian man
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Style Guide</li>
                <li>Size Guide</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Instagram</li>
                <li>Pinterest</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
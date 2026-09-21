import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { locations } from '../data/locations';
import { artists } from '../data/artists';
import { movements } from '../data/movements';

interface HeroProps {
  onExploreMap: () => void;
  onDiscoverArtForms: () => void;
}

// India SVG silhouette path (simplified)
const IndiaOutline = () => (
  <svg
    viewBox="0 0 300 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="w-full h-full"
  >
    {/* Simplified India outline */}
    <path
      d="M 120 20 L 150 15 L 185 25 L 210 40 L 225 60 L 235 80 L 240 105 
         L 245 125 L 255 140 L 265 155 L 268 175 L 260 195 L 250 210 
         L 240 225 L 230 238 L 218 250 L 205 260 L 195 270 L 185 280 
         L 175 292 L 165 305 L 155 318 L 148 330 L 143 318 L 135 305 
         L 125 292 L 112 278 L 100 265 L 88 252 L 75 238 L 65 222 
         L 55 205 L 48 188 L 45 170 L 48 150 L 55 133 L 65 118 
         L 72 100 L 78 82 L 88 65 L 100 50 L 112 35 Z"
      fill="url(#indiaGradient)"
      fillOpacity="0.12"
      stroke="#d08a30"
      strokeWidth="1.5"
      strokeOpacity="0.5"
    />
    {/* Decorative dot pattern */}
    {[
      [148, 70], [180, 85], [210, 120], [230, 155], [220, 195],
      [195, 235], [165, 270], [130, 240], [95, 200], [70, 165],
      [80, 125], [110, 90]
    ].map(([cx, cy], i) => (
      <circle
        key={i}
        cx={cx}
        cy={cy}
        r="3"
        fill="#d97706"
        fillOpacity="0.6"
      />
    ))}
    {/* Connection lines */}
    <line x1="148" y1="70" x2="180" y2="85" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="180" y1="85" x2="210" y2="120" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="210" y1="120" x2="230" y2="155" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="230" y1="155" x2="220" y2="195" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="220" y1="195" x2="195" y2="235" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="148" y1="70" x2="130" y2="240" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="4 4" />
    <defs>
      <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d08a30" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.4" />
      </linearGradient>
    </defs>
  </svg>
);

const Hero: React.FC<HeroProps> = ({ onExploreMap, onDiscoverArtForms }) => {
  // Dynamic stats from actual dataset
  const locationCount = locations.length;
  const artTraditionCount = movements.length + 6; // movements + base art forms
  const artistCount = artists.length;
  const yearsOfHistory = 2500;

  const stats = [
    { value: `${locationCount}+`, label: 'Locations' },
    { value: `${artTraditionCount}+`, label: 'Art Traditions' },
    { value: `${artistCount * 10}+`, label: 'Artists & Artworks' },
    { value: `${yearsOfHistory}+`, label: 'Years of History' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-parchment-50"
      aria-labelledby="hero-heading"
    >
      {/* Background mandala pattern */}
      <div
        className="absolute inset-0 bg-mandala-pattern opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-parchment-50 via-parchment-50/90 to-parchment-100/60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text content */}
          <div className="animate-fade-in">
            <p className="section-label mb-4">College Assignment · CO1</p>

            <h1
              id="hero-heading"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-charcoal-900 leading-none mb-6"
            >
              Indian
              <span className="block text-terracotta-700">Art</span>
              <span className="block">Atlas</span>
            </h1>

            <div className="w-16 h-px bg-gold-400 mb-6" aria-hidden="true" />

            <p className="font-sans text-lg text-charcoal-600 leading-relaxed max-w-xl mb-3">
              Trace the stories, traditions, artists, and movements that shaped India's artistic landscape.
            </p>
            <p className="font-sans text-sm text-charcoal-400 italic mb-10">
              "An Interactive Journey Through India's Artistic Heritage"
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onExploreMap}
                className="btn-primary"
                aria-label="Explore the interactive map"
              >
                <Compass size={16} aria-hidden="true" />
                Explore the Map
                <ArrowRight size={14} aria-hidden="true" />
              </button>
              <button
                onClick={onDiscoverArtForms}
                className="btn-secondary"
                aria-label="Discover art forms"
              >
                Discover Art Forms
              </button>
            </div>
          </div>

          {/* Right — India visualization */}
          <div
            className="relative flex items-center justify-center animate-fade-in"
            style={{ animationDelay: '0.2s' }}
            aria-hidden="true"
          >
            <div className="relative w-72 h-96 lg:w-80 lg:h-[420px]">
              <IndiaOutline />
              {/* Floating label */}
              <div className="absolute top-4 right-0 bg-white/80 backdrop-blur-sm border border-charcoal-100 rounded-sm px-3 py-2 shadow-sm">
                <p className="font-serif text-xs text-charcoal-500">Subcontinent</p>
                <p className="font-sans text-sm font-semibold text-charcoal-800">
                  {locationCount} Art Centres
                </p>
              </div>
              <div className="absolute bottom-8 left-0 bg-white/80 backdrop-blur-sm border border-charcoal-100 rounded-sm px-3 py-2 shadow-sm">
                <p className="font-serif text-xs text-charcoal-500">Spanning</p>
                <p className="font-sans text-sm font-semibold text-charcoal-800">6 Regions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 pt-10 border-t border-charcoal-200 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <p className="section-label mb-6 text-center">Across the Atlas</p>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-serif text-3xl sm:text-4xl text-terracotta-700 mb-1">
                  {stat.value}
                </dt>
                <dd className="font-sans text-sm text-charcoal-500 tracking-wide">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-pulse-slow"
        aria-hidden="true"
      >
        <span className="text-xs font-sans text-charcoal-400 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-charcoal-400 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { locations } from '../data/locations';
import { artists } from '../data/artists';
import { movements } from '../data/movements';

interface HeroProps {
  onExploreMap: () => void;
  onDiscoverArtForms: () => void;
}

// Constellation of the atlas's real locations, projected from latitude/longitude.
const LAT_MIN = 6.5, LAT_MAX = 36, LNG_MIN = 67.5, LNG_MAX = 98;
const VB_W = 300, VB_H = 340;

const project = (lat: number, lng: number): [number, number] => [
  12 + ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * (VB_W - 24),
  12 + ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * (VB_H - 24),
];

const AtlasConstellation = () => {
  const points = locations.map((l) => ({
    id: l.id,
    name: l.name,
    xy: project(l.latitude, l.longitude),
  }));
  const byId = new Map(points.map((p) => [p.id, p]));
  const links = new Set<string>();
  locations.forEach((l) =>
    l.relatedLocations.forEach((r) => {
      if (byId.has(r)) links.add([l.id, r].sort().join('|'));
    })
  );

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      {[...links].map((key) => {
        const [a, b] = key.split('|').map((id) => byId.get(id)!);
        return (
          <line
            key={key}
            x1={a.xy[0]} y1={a.xy[1]} x2={b.xy[0]} y2={b.xy[1]}
            stroke="#d97706" strokeWidth="0.6" strokeOpacity="0.35"
          />
        );
      })}
      {points.map((p, i) => (
        <g key={p.id}>
          <circle cx={p.xy[0]} cy={p.xy[1]} r="7" fill="#d97706" fillOpacity="0.12"
            className="animate-pulse-slow" style={{ animationDelay: `${(i % 7) * 0.4}s` }} />
          <circle cx={p.xy[0]} cy={p.xy[1]} r="2.8" fill="#b45309" />
        </g>
      ))}
    </svg>
  );
};

const Hero: React.FC<HeroProps> = ({ onExploreMap, onDiscoverArtForms }) => {
  // Stats computed from the datasets — nothing hard-coded
  const regionCount = new Set(locations.map((l) => l.region)).size;
  const stats = [
    { value: `${locations.length}`, label: 'Art Locations' },
    { value: `${movements.length}`, label: 'Art Movements' },
    { value: `${artists.length}`, label: 'Featured Artists' },
    { value: `${regionCount}`, label: 'Regions' },
  ];
  const locationCount = locations.length;

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
            <p className="section-label mb-4">An interactive atlas · 2,500 years of art</p>

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
            <div className="relative w-72 h-80 lg:w-96 lg:h-[420px]">
              <AtlasConstellation />
              {/* Floating label */}
              <div className="absolute top-4 right-0 bg-white/80 backdrop-blur-sm border border-charcoal-100 rounded-sm px-3 py-2 shadow-sm">
                <p className="font-serif text-xs text-charcoal-500">Plotted by coordinates</p>
                <p className="font-sans text-sm font-semibold text-charcoal-800">
                  {locationCount} Art Centres
                </p>
              </div>
              <div className="absolute bottom-8 left-0 bg-white/80 backdrop-blur-sm border border-charcoal-100 rounded-sm px-3 py-2 shadow-sm">
                <p className="font-serif text-xs text-charcoal-500">Spanning</p>
                <p className="font-sans text-sm font-semibold text-charcoal-800">{regionCount} Regions</p>
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

import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ArtFormInfo } from '../types/art';
import { locations } from '../data/locations';

interface ArtFormCardProps {
  artForm: ArtFormInfo;
  onClick: (id: string) => void;
}

const FALLBACK = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260" viewBox="0 0 400 260"><rect width="400" height="260" fill="%23e8e8e5"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="serif" font-size="13" fill="%23737370">Art Form</text></svg>`;

const ArtFormCard: React.FC<ArtFormCardProps> = ({ artForm, onClick }) => {
  // Dynamic count from dataset
  const count = locations.filter((l) => l.artForms.includes(artForm.id)).length;

  return (
    <article
      className="art-card group cursor-pointer"
      onClick={() => onClick(artForm.id)}
      aria-label={`Explore ${artForm.name}: ${count} locations`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={artForm.coverImage || FALLBACK}
          alt={artForm.coverImageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Count badge */}
        <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2.5 py-1 text-xs font-sans font-semibold text-charcoal-800">
          {count} locations
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif text-lg text-charcoal-900 mb-1.5 group-hover:text-terracotta-700 transition-colors duration-200">
          {artForm.name}
        </h3>
        <p className="text-xs font-sans text-charcoal-500 leading-relaxed line-clamp-3">
          {artForm.description}
        </p>
        <div className="flex items-center gap-1 mt-3 text-xs font-sans font-medium text-terracotta-700 group-hover:gap-2 transition-all duration-150">
          Explore
          <ArrowRight size={12} aria-hidden="true" />
        </div>
      </div>
    </article>
  );
};

export default ArtFormCard;

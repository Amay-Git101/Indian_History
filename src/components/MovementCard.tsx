import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import type { Movement } from '../types/art';
import { locations } from '../data/locations';
import { artists as allArtists } from '../data/artists';

interface MovementCardProps {
  movement: Movement;
  onClick: (movementId: string) => void;
}

const FALLBACK = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="220" viewBox="0 0 400 220"><rect width="400" height="220" fill="%23e8e8e5"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="serif" font-size="13" fill="%23737370">Movement</text></svg>`;

const MovementCard: React.FC<MovementCardProps> = ({ movement, onClick }) => {
  const locCount = locations.filter((l) => l.movements.includes(movement.id)).length;
  const associatedArtists = allArtists.filter((a) => movement.artistIds.includes(a.id));

  return (
    <article
      className="art-card group cursor-pointer flex flex-col h-full"
      onClick={() => onClick(movement.id)}
      aria-label={`Explore movement: ${movement.name}`}
    >
      {/* Cover image */}
      {movement.coverImage && (
        <div className="relative overflow-hidden aspect-[16/9] flex-shrink-0">
          <img
            src={movement.coverImage}
            alt={movement.coverImageAlt ?? movement.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-4">
        <h3 className="font-serif text-lg text-charcoal-900 leading-tight mb-1 group-hover:text-terracotta-700 transition-colors duration-200">
          {movement.name}
        </h3>
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1 text-xs text-charcoal-400 font-sans">
            <Clock size={10} aria-hidden="true" />
            {movement.period}
          </span>
          <span className="flex items-center gap-1 text-xs text-charcoal-400 font-sans">
            <MapPin size={10} aria-hidden="true" />
            {movement.region}
          </span>
        </div>
        <p className="text-xs font-sans text-charcoal-600 leading-relaxed line-clamp-3 mb-3">
          {movement.description}
        </p>

        {/* Characteristics */}
        <div className="flex flex-wrap gap-1 mb-3">
          {movement.characteristics.slice(0, 3).map((c) => (
            <span
              key={c}
              className="px-2 py-0.5 text-[10px] font-sans font-medium border border-charcoal-200 rounded-full text-charcoal-600"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between pt-3 border-t border-charcoal-100">
          <span className="text-xs font-sans text-charcoal-400">
            {locCount} location{locCount !== 1 ? 's' : ''}
            {associatedArtists.length > 0 && ` · ${associatedArtists.length} artist${associatedArtists.length !== 1 ? 's' : ''}`}
          </span>
          <span className="text-xs font-sans font-medium text-terracotta-700 group-hover:underline">
            Explore →
          </span>
        </div>
      </div>
    </article>
  );
};

export default MovementCard;

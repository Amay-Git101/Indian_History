import React from 'react';
import { MapPin } from 'lucide-react';
import type { Artist } from '../types/art';
import { locations as allLocations } from '../data/locations';

interface ArtistCardProps {
  artist: Artist;
  onClick: (artistId: string) => void;
}

const FALLBACK = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" fill="%23e8e8e5" rx="80"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="serif" font-size="13" fill="%23737370">Portrait</text></svg>`;

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => {
  const primaryLocation = artist.primaryLocationId
    ? allLocations.find((l) => l.id === artist.primaryLocationId)
    : null;

  return (
    <article
      className="art-card group cursor-pointer p-4 flex gap-4 items-start"
      onClick={() => onClick(artist.id)}
      aria-label={`View artist: ${artist.name}`}
    >
      {/* Portrait */}
      <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-full border border-charcoal-200">
        <img
          src={artist.portraitUrl || FALLBACK}
          alt={artist.portraitAlt ?? `Portrait of ${artist.name}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK; }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-serif text-base text-charcoal-900 leading-tight mb-0.5 group-hover:text-terracotta-700 transition-colors duration-200">
          {artist.name}
        </h3>
        {artist.lifespan && (
          <p className="text-xs font-sans text-charcoal-400">{artist.lifespan}</p>
        )}
        {artist.movement && (
          <p className="text-xs font-sans font-medium text-indigo-700 mt-0.5 truncate">
            {artist.movement}
          </p>
        )}
        {primaryLocation && (
          <p className="flex items-center gap-1 text-xs font-sans text-charcoal-500 mt-1">
            <MapPin size={10} className="text-terracotta-500 flex-shrink-0" aria-hidden="true" />
            {primaryLocation.name}, {primaryLocation.state}
          </p>
        )}
        {artist.notableWorks && artist.notableWorks.length > 0 && (
          <p className="text-xs font-sans text-charcoal-400 mt-1 truncate">
            {artist.notableWorks[0]}
          </p>
        )}
      </div>
    </article>
  );
};

export default ArtistCard;

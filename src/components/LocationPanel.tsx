import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Palette, Users, Building2, ExternalLink } from 'lucide-react';
import type { ArtLocation } from '../types/art';
import { artists as allArtists } from '../data/artists';
import { movements as allMovements } from '../data/movements';
import { locations as allLocations } from '../data/locations';
import ImageGallery from './ImageGallery';

interface LocationPanelProps {
  location: ArtLocation | null;
  onClose: () => void;
  onRelatedSelect: (locationId: string) => void;
}

const periodColors: Record<string, string> = {
  Ancient: 'bg-gold-100 text-gold-600',
  Medieval: 'bg-blue-100 text-blue-700',
  'Early Modern': 'bg-art-green-100 text-art-green-700',
  Colonial: 'bg-red-100 text-red-700',
  Modern: 'bg-indigo-100 text-indigo-700',
  Contemporary: 'bg-purple-100 text-purple-700',
};

const LocationPanel: React.FC<LocationPanelProps> = ({ location, onClose, onRelatedSelect }) => {
  // Keyboard close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!location) return null;

  const locationArtists = allArtists.filter((a) => location.artists.includes(a.id));
  const locationMovements = allMovements.filter((m) => location.movements.includes(m.id));
  const relatedLocs = allLocations.filter(
    (l) => location.relatedLocations.includes(l.id) && l.id !== location.id
  );

  return (
    <>
      {/* Backdrop (mobile) */}
      <div
        className="fixed inset-0 z-[1050] bg-black/30 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className="panel-enter fixed top-16 right-0 bottom-0 z-[1100] w-full sm:w-[420px] lg:w-[460px] bg-white shadow-2xl overflow-y-auto scrollbar-thin flex flex-col"
        role="complementary"
        aria-label={`Details for ${location.name}`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-charcoal-100 px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <p className="section-label text-[10px] mb-1">{location.region} India</p>
            <h2 className="font-serif text-2xl text-charcoal-900 leading-tight">{location.name}</h2>
            <div className="flex items-center gap-1.5 mt-1">
              <MapPin size={12} className="text-charcoal-400" aria-hidden="true" />
              <span className="text-xs font-sans text-charcoal-500">
                {location.city}, {location.state}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2 rounded text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            aria-label="Close location panel"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 px-6 py-5 space-y-6">

          {/* Periods */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={14} className="text-charcoal-400" aria-hidden="true" />
              <span className="section-label text-[10px]">Historical Periods</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {location.periods.map((p) => (
                <span
                  key={p}
                  className={`px-2 py-0.5 text-xs font-sans font-medium rounded-full ${periodColors[p] ?? 'bg-charcoal-100 text-charcoal-600'}`}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Art forms */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Palette size={14} className="text-charcoal-400" aria-hidden="true" />
              <span className="section-label text-[10px]">Art Traditions</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {location.artForms.map((af) => (
                <span
                  key={af}
                  className="px-2 py-0.5 text-xs font-sans font-medium border border-charcoal-200 rounded-full text-charcoal-700 bg-parchment-50"
                >
                  {af}
                </span>
              ))}
            </div>
          </div>

          {/* Image gallery */}
          {location.images.length > 0 && (
            <div>
              <span className="section-label text-[10px] block mb-2">Image Gallery</span>
              <ImageGallery images={location.images} locationName={location.name} />
            </div>
          )}

          {/* Historical context */}
          <div>
            <span className="section-label text-[10px] block mb-2">Historical Context</span>
            <p className="text-sm font-sans text-charcoal-700 leading-relaxed">
              {location.historicalContext}
            </p>
          </div>

          {/* Why it matters */}
          <div className="bg-parchment-50 border border-parchment-200 rounded-sm p-4">
            <span className="section-label text-[10px] block mb-2 text-gold-500">Why This Place Matters</span>
            <p className="text-sm font-sans text-charcoal-700 leading-relaxed italic">
              "{location.significance}"
            </p>
          </div>

          {/* Movements */}
          {locationMovements.length > 0 && (
            <div>
              <span className="section-label text-[10px] block mb-3">Art Movements</span>
              <div className="space-y-3">
                {locationMovements.map((m) => (
                  <div key={m.id} className="border-l-2 border-gold-300 pl-3">
                    <p className="text-sm font-sans font-semibold text-charcoal-800">{m.name}</p>
                    <p className="text-xs text-charcoal-500">{m.period}</p>
                    <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                      {m.description.slice(0, 140)}…
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Artists */}
          {locationArtists.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users size={14} className="text-charcoal-400" aria-hidden="true" />
                <span className="section-label text-[10px]">Key Artists</span>
              </div>
              <div className="space-y-3">
                {locationArtists.map((artist) => (
                  <div key={artist.id} className="flex items-start gap-3">
                    {artist.portraitUrl ? (
                      <img
                        src={artist.portraitUrl}
                        alt={artist.portraitAlt ?? artist.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0 border border-charcoal-100"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-charcoal-100 flex items-center justify-center flex-shrink-0">
                        <Users size={14} className="text-charcoal-400" />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-sans font-semibold text-charcoal-800">{artist.name}</p>
                      {artist.lifespan && (
                        <p className="text-xs text-charcoal-500">{artist.lifespan}</p>
                      )}
                      {artist.movement && (
                        <p className="text-xs text-terracotta-700 font-medium">{artist.movement}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notable artworks */}
          {location.artworks.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={14} className="text-charcoal-400" aria-hidden="true" />
                <span className="section-label text-[10px]">Notable Works</span>
              </div>
              <div className="space-y-2">
                {location.artworks.map((aw) => (
                  <div key={aw.id} className="bg-charcoal-50 rounded-sm p-3">
                    <p className="text-sm font-sans font-semibold text-charcoal-800">{aw.title}</p>
                    {aw.approximateDate && (
                      <p className="text-xs text-charcoal-500 mt-0.5">{aw.approximateDate}</p>
                    )}
                    {aw.medium && (
                      <p className="text-xs text-charcoal-500">{aw.medium}</p>
                    )}
                    {aw.description && (
                      <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">{aw.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Coordinates */}
          <div className="text-xs font-sans text-charcoal-400 pt-2 border-t border-charcoal-100">
            <span>Coordinates: {location.latitude.toFixed(4)}°N, {location.longitude.toFixed(4)}°E</span>
          </div>

          {/* Related locations */}
          {relatedLocs.length > 0 && (
            <div>
              <span className="section-label text-[10px] block mb-3">Related Locations</span>
              <div className="flex flex-wrap gap-2">
                {relatedLocs.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onRelatedSelect(rel.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium border border-charcoal-200 rounded-sm hover:border-charcoal-800 hover:bg-charcoal-50 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                    aria-label={`View location: ${rel.name}`}
                  >
                    <MapPin size={10} className="text-terracotta-600" aria-hidden="true" />
                    {rel.name}
                    <ExternalLink size={10} className="text-charcoal-400" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default LocationPanel;

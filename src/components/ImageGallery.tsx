import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import type { ArtImage } from '../types/art';

interface ImageGalleryProps {
  images: ArtImage[];
  locationName: string;
}

const FALLBACK_IMG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280" viewBox="0 0 400 280"><rect width="400" height="280" fill="%23e8e8e5"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="serif" font-size="14" fill="%23737370">Image unavailable</text></svg>`;

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, locationName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  if (images.length === 0) {
    return (
      <div className="bg-charcoal-50 rounded-sm flex items-center justify-center h-40 text-charcoal-400 text-sm font-sans">
        No images available
      </div>
    );
  }

  const selected = images[selectedIndex];

  const handleImageError = (id: string) => {
    setFailedImages((prev) => new Set(prev).add(id));
  };

  const imgSrc = (img: ArtImage) =>
    failedImages.has(img.id) ? FALLBACK_IMG : img.url;

  const thumbSrc = (img: ArtImage) =>
    failedImages.has(img.id) ? FALLBACK_IMG : (img.thumbnailUrl ?? img.url);

  return (
    <div className="space-y-2">
      {/* Primary image */}
      <div className="relative group cursor-pointer overflow-hidden rounded-sm bg-charcoal-100 aspect-[4/3]">
        <img
          src={imgSrc(selected)}
          alt={selected.altText}
          onError={() => handleImageError(selected.id)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center"
          aria-label={`View full size: ${selected.title}`}
        >
          <div className="opacity-0 group-hover:opacity-100 bg-white/90 rounded-full p-2 transition-opacity duration-200">
            <ZoomIn size={18} className="text-charcoal-800" aria-hidden="true" />
          </div>
        </button>
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <p className="text-white text-xs font-sans font-medium leading-tight">{selected.title}</p>
          {selected.creator && (
            <p className="text-white/70 text-xs mt-0.5">{selected.creator}</p>
          )}
          {selected.approximateDate && (
            <p className="text-white/60 text-xs">{selected.approximateDate}</p>
          )}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {images.map((img, i) => (
            <button
              key={img.id}
              onClick={() => setSelectedIndex(i)}
              className={`flex-shrink-0 w-16 h-12 overflow-hidden rounded-sm border-2 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                i === selectedIndex
                  ? 'border-terracotta-600 opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
              aria-label={`View: ${img.title}`}
              aria-pressed={i === selectedIndex}
            >
              <img
                src={thumbSrc(img)}
                alt={img.altText}
                onError={() => handleImageError(img.id)}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Attribution */}
      <p className="text-[11px] text-charcoal-400 font-sans">
        Source: {selected.source} · {selected.license}
      </p>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="lightbox-overlay fixed inset-0 z-[2000] bg-black/92 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Full size image: ${selected.title}`}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            <X size={24} aria-hidden="true" />
          </button>
          <div
            className="max-w-5xl max-h-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imgSrc(selected)}
              alt={selected.altText}
              className="max-w-full max-h-[85vh] object-contain"
              loading="lazy"
            />
            <div className="mt-3 text-center">
              <p className="text-white/90 text-sm font-sans">{selected.title}</p>
              {selected.creator && (
                <p className="text-white/60 text-xs mt-1">{selected.creator} · {selected.approximateDate}</p>
              )}
              <p className="text-white/40 text-xs mt-1">{selected.source} · {selected.license}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

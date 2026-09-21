import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import type { ArtLocation } from '../types/art';
import { INDIA_CENTER, INDIA_ZOOM, artFormColor } from '../utils/map';
import { RefreshCw, Link2, Link2Off } from 'lucide-react';

// Fix leaflet default marker icon issue with bundlers
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// ── Custom marker icon factory ──────────────────────────────────
function createCustomIcon(artForm: string, isSelected: boolean): L.DivIcon {
  const color = artFormColor(artForm);
  const size = isSelected ? 38 : 32;
  const border = isSelected ? '3px solid #d97706' : '2px solid white';
  return L.divIcon({
    className: '',
    html: `
      <div role="img" aria-label="${artForm} location" style="
        width:${size}px;height:${size}px;
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        background:${color};
        border:${border};
        box-shadow:${isSelected ? '0 0 0 2px #d97706, 0 4px 16px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.25)'};
        display:flex;align-items:center;justify-content:center;
        transition:all 0.2s ease;
        cursor:pointer;
      ">
        <div style="transform:rotate(45deg);font-size:11px;color:white;font-weight:600;line-height:1;">
          ${artForm.charAt(0)}
        </div>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
}

// ── Map controller component ────────────────────────────────────
interface MapControllerProps {
  flyToLocation: { lat: number; lng: number; zoom?: number } | null;
  onFlyDone: () => void;
}

const MapController: React.FC<MapControllerProps> = ({ flyToLocation, onFlyDone }) => {
  const map = useMap();
  useEffect(() => {
    if (flyToLocation) {
      map.flyTo([flyToLocation.lat, flyToLocation.lng], flyToLocation.zoom ?? 9, {
        animate: true,
        duration: 1.2,
      });
      onFlyDone();
    }
  }, [flyToLocation, map, onFlyDone]);
  return null;
};

// ── Reset view button ───────────────────────────────────────────
const ResetViewButton: React.FC = () => {
  const map = useMap();
  return (
    <button
      onClick={() => map.flyTo(INDIA_CENTER, INDIA_ZOOM, { animate: true, duration: 1.2 })}
      className="absolute bottom-6 left-4 z-[900] flex items-center gap-1.5 px-3 py-2 bg-white border border-charcoal-200 rounded-sm shadow text-xs font-sans font-medium text-charcoal-700 hover:border-charcoal-800 hover:text-charcoal-900 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
      aria-label="Reset map to India view"
    >
      <RefreshCw size={12} aria-hidden="true" />
      Reset India View
    </button>
  );
};

// ── Main MapView ────────────────────────────────────────────────
interface MapViewProps {
  locations: ArtLocation[];
  selectedLocation: ArtLocation | null;
  onLocationSelect: (location: ArtLocation) => void;
  flyToLocation: { lat: number; lng: number; zoom?: number } | null;
  onFlyDone: () => void;
  showConnections: boolean;
}

const MapView: React.FC<MapViewProps> = ({
  locations,
  selectedLocation,
  onLocationSelect,
  flyToLocation,
  onFlyDone,
  showConnections,
}) => {
  const [connectionsEnabled, setConnectionsEnabled] = useState(showConnections);

  useEffect(() => {
    setConnectionsEnabled(showConnections);
  }, [showConnections]);

  // Build connection lines: link each location to its first related location
  const connectionLines: Array<[[number, number], [number, number]]> = [];
  if (connectionsEnabled) {
    const locMap = new Map(locations.map((l) => [l.id, l]));
    const seen = new Set<string>();
    for (const loc of locations) {
      for (const relId of loc.relatedLocations) {
        const rel = locMap.get(relId);
        if (!rel) continue;
        const key = [loc.id, relId].sort().join('--');
        if (seen.has(key)) continue;
        seen.add(key);
        connectionLines.push([
          [loc.latitude, loc.longitude],
          [rel.latitude, rel.longitude],
        ]);
      }
    }
  }

  const legendForms = Array.from(new Set(locations.map((l) => l.artForms[0] ?? 'Painting')));

  return (
    <div className="relative w-full h-full map-wrapper" id="map-section">
      <MapContainer
        center={INDIA_CENTER}
        zoom={INDIA_ZOOM}
        className="w-full h-full"
        zoomControl={false}
        aria-label="Interactive map of Indian art locations"
      >
        {/* Map tiles — OpenStreetMap standard (no API key required) */}
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={18}
        />

        {/* Custom zoom control */}
        <ZoomControl position="bottomright" />

        {/* Map controller */}
        <MapController flyToLocation={flyToLocation} onFlyDone={onFlyDone} />

        {/* Connection lines */}
        {connectionLines.map((positions, i) => (
          <Polyline
            key={i}
            positions={positions}
            pathOptions={{
              color: '#d97706',
              weight: 1.5,
              opacity: 0.4,
              dashArray: '6 4',
            }}
          />
        ))}

        {/* Markers */}
        {locations.map((loc) => {
          const primaryArtForm = loc.artForms[0] ?? 'Painting';
          const isSelected = selectedLocation?.id === loc.id;
          const icon = createCustomIcon(primaryArtForm, isSelected);

          return (
            <Marker
              key={loc.id}
              position={[loc.latitude, loc.longitude]}
              icon={icon}
              eventHandlers={{
                click: () => onLocationSelect(loc),
              }}
            >
              {/* Hover tooltip / Popup */}
              <Popup
                closeButton={false}
                autoPan={false}
                offset={[0, -28]}
              >
                <div className="p-0">
                  <div className="p-3 min-w-[180px] max-w-[240px]">
                    <p className="font-serif text-sm font-semibold text-charcoal-900 leading-tight mb-0.5">
                      {loc.name}
                    </p>
                    <p className="text-xs text-charcoal-500 font-sans mb-1.5">
                      {loc.state} · {loc.region} India
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {loc.artForms.slice(0, 2).map((af) => (
                        <span
                          key={af}
                          className="text-[10px] px-1.5 py-0.5 rounded-full font-sans font-medium text-white"
                          style={{ backgroundColor: artFormColor(af) }}
                        >
                          {af}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => onLocationSelect(loc)}
                      className="text-xs font-sans font-medium text-terracotta-700 hover:underline focus:outline-none"
                    >
                      Explore location →
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* Reset button */}
        <div className="leaflet-bottom leaflet-left" style={{ zIndex: 900 }}>
          <div className="leaflet-control">
            <ResetViewButton />
          </div>
        </div>
      </MapContainer>

      {/* Connections toggle */}
      <div className="absolute top-4 left-4 z-[900]">
        <button
          onClick={() => setConnectionsEnabled((v) => !v)}
          className={`flex items-center gap-2 px-3 py-2 rounded-sm border shadow text-xs font-sans font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
            connectionsEnabled
              ? 'bg-gold-400 border-gold-400 text-charcoal-900'
              : 'bg-white border-charcoal-200 text-charcoal-700 hover:border-charcoal-800'
          }`}
          aria-pressed={connectionsEnabled}
          aria-label={connectionsEnabled ? 'Hide artistic connections' : 'Show artistic connections'}
        >
          {connectionsEnabled ? <Link2 size={12} aria-hidden="true" /> : <Link2Off size={12} aria-hidden="true" />}
          {connectionsEnabled ? 'Hide Connections' : 'Show Connections'}
        </button>
      </div>

      {/* Legend — art forms present in the current view */}
      {legendForms.length > 0 && (
        <div
          className="absolute top-4 right-4 z-[900] hidden sm:block bg-white/95 border border-charcoal-200 rounded-sm shadow px-3 py-2"
          aria-label="Map legend"
        >
          <p className="text-[10px] font-sans font-semibold tracking-widest uppercase text-charcoal-400 mb-1.5">
            Primary art form
          </p>
          <ul className="space-y-1">
            {legendForms.map((af) => (
              <li key={af} className="flex items-center gap-2 text-xs font-sans text-charcoal-700">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: artFormColor(af) }}
                  aria-hidden="true"
                />
                {af}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Empty state */}
      {locations.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/95 border border-charcoal-200 rounded-sm p-6 text-center shadow-lg pointer-events-auto max-w-xs">
            <p className="font-serif text-charcoal-700 mb-1">No locations match your current filters.</p>
            <p className="text-xs text-charcoal-400 font-sans">Try adjusting the filters above.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;

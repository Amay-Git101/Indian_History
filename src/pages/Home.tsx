import React, { useState, useCallback, useRef } from 'react';
import type { ArtLocation, FilterState, SearchResult, ArtFormCategory, HistoricalPeriodName } from '../types/art';
import { locations as allLocations } from '../data/locations';
import { movements } from '../data/movements';
import { artForms, periods } from '../data/artForms';
import { artists } from '../data/artists';
import { filterLocations, emptyFilters } from '../utils/filters';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MapView from '../components/MapView';
import FilterBar from '../components/FilterBar';
import LocationPanel from '../components/LocationPanel';
import ArtFormCard from '../components/ArtFormCard';
import PeriodTimeline from '../components/PeriodTimeline';
import MovementCard from '../components/MovementCard';
import ArtistCard from '../components/ArtistCard';
import Footer from '../components/Footer';
import About from './About';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  // ── State ────────────────────────────────────────────────────
  const [filters, setFilters] = useState<FilterState>(emptyFilters());
  const [selectedLocation, setSelectedLocation] = useState<ArtLocation | null>(null);
  const [flyTo, setFlyTo] = useState<{ lat: number; lng: number; zoom?: number } | null>(null);
  const [showConnections, setShowConnections] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // ── Refs for scroll ─────────────────────────────────────────
  const mapRef = useRef<HTMLDivElement>(null);
  const artFormsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const movementsRef = useRef<HTMLDivElement>(null);
  const artistsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    hero: heroRef,
    map: mapRef,
    artforms: artFormsRef,
    timeline: timelineRef,
    movements: movementsRef,
    artists: artistsRef,
    about: aboutRef,
  };

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ── Filtered locations ───────────────────────────────────────
  const filteredLocations = filterLocations(allLocations, filters);

  // ── Handlers ────────────────────────────────────────────────
  const handleLocationSelect = useCallback((location: ArtLocation) => {
    setSelectedLocation(location);
    setFlyTo({ lat: location.latitude, lng: location.longitude, zoom: 9 });
  }, []);

  const handleRelatedSelect = useCallback((locationId: string) => {
    const loc = allLocations.find((l) => l.id === locationId);
    if (loc) handleLocationSelect(loc);
  }, []);

  const handleSearchResult = useCallback((result: SearchResult) => {
    setSearchOpen(false);
    // Find the target location
    let targetLoc: ArtLocation | undefined;
    if (result.type === 'location') {
      targetLoc = allLocations.find((l) => l.id === result.id);
    } else if (result.locationId) {
      targetLoc = allLocations.find((l) => l.id === result.locationId);
    }
    if (targetLoc) {
      handleLocationSelect(targetLoc);
      // Scroll map into view
      setTimeout(() => scrollToSection('map'), 200);
    }
  }, []);

  const handleArtFormClick = (artFormId: string) => {
    setFilters((prev) => ({
      ...prev,
      artForm: prev.artForm === artFormId ? null : (artFormId as ArtFormCategory),
    }));
    scrollToSection('map');
  };

  const handlePeriodSelect = (period: string | null) => {
    setFilters((prev) => ({
      ...prev,
      period: period as HistoricalPeriodName | null,
    }));
    scrollToSection('map');
  };

  const handleMovementClick = (movementId: string) => {
    setFilters((prev) => ({
      ...prev,
      movement: prev.movement === movementId ? null : movementId,
    }));
    scrollToSection('map');
  };

  const handleArtistClick = (artistId: string) => {
    const artist = artists.find((a) => a.id === artistId);
    if (artist?.primaryLocationId) {
      const loc = allLocations.find((l) => l.id === artist.primaryLocationId);
      if (loc) {
        handleLocationSelect(loc);
        scrollToSection('map');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Navbar ─────────────────────────────────────────── */}
      <Navbar
        onSectionNav={scrollToSection}
        onSearchOpen={() => setSearchOpen(true)}
      />

      {/* ── Search modal ───────────────────────────────────── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[1500] bg-black/50 flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Search the atlas"
        >
          <div
            className="w-full max-w-xl bg-white rounded-sm shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-charcoal-100">
              <SearchBar
                onResultSelect={handleSearchResult}
                onClose={() => setSearchOpen(false)}
                isModal
              />
            </div>
            <div className="p-4">
              <p className="text-xs font-sans text-charcoal-400">
                Search artists, artworks, movements, or places — then click a result to zoom the map.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Hero ───────────────────────────────────────────── */}
      <div ref={heroRef}>
        <Hero
          onExploreMap={() => scrollToSection('map')}
          onDiscoverArtForms={() => scrollToSection('artforms')}
        />
      </div>

      {/* ── Map section ────────────────────────────────────── */}
      <div ref={mapRef} id="map" className="relative">
        <FilterBar
          filters={filters}
          onChange={setFilters}
          resultCount={filteredLocations.length}
          totalCount={allLocations.length}
        />

        {/* Map container */}
        <div className="relative flex" style={{ height: 'calc(100vh - 128px)', minHeight: '500px' }}>
          <div className={`flex-1 transition-all duration-300 ${selectedLocation ? 'mr-0 lg:mr-[460px]' : ''}`}>
            <MapView
              locations={filteredLocations}
              selectedLocation={selectedLocation}
              onLocationSelect={handleLocationSelect}
              flyToLocation={flyTo}
              onFlyDone={() => setFlyTo(null)}
              showConnections={showConnections}
            />
          </div>

          {/* Location panel */}
          <LocationPanel
            location={selectedLocation}
            onClose={() => setSelectedLocation(null)}
            onRelatedSelect={handleRelatedSelect}
          />
        </div>
      </div>

      {/* ── Art Forms Section ───────────────────────────────── */}
      <div ref={artFormsRef} id="artforms">
        <section className="py-20 bg-white" aria-labelledby="artforms-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="section-label mb-3">Visual Traditions</p>
                <h2 id="artforms-heading" className="section-heading">
                  Explore by Art Form
                </h2>
              </div>
              <p className="text-sm font-sans text-charcoal-500 max-w-xs">
                Click any card to filter the map to locations associated with that art form.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {artForms.map((af) => (
                <ArtFormCard
                  key={af.id}
                  artForm={af}
                  onClick={handleArtFormClick}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Period Timeline ────────────────────────────────── */}
      <div ref={timelineRef} id="timeline">
        <PeriodTimeline
          periods={periods}
          activePeriod={filters.period}
          onPeriodSelect={handlePeriodSelect}
        />
      </div>

      {/* ── Art Movements ─────────────────────────────────── */}
      <div ref={movementsRef} id="movements">
        <section className="py-20 bg-parchment-50" aria-labelledby="movements-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="section-label mb-3">Schools & Traditions</p>
                <h2 id="movements-heading" className="section-heading">
                  Art Movements
                </h2>
              </div>
              <p className="text-sm font-sans text-charcoal-500 max-w-xs">
                Click a movement to highlight its locations on the map.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {movements.map((m) => (
                <MovementCard
                  key={m.id}
                  movement={m}
                  onClick={handleMovementClick}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── Artists ────────────────────────────────────────── */}
      <div ref={artistsRef} id="artists">
        <section className="py-20 bg-white" aria-labelledby="artists-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="section-label mb-3">Makers & Visionaries</p>
                <h2 id="artists-heading" className="section-heading">
                  Artist Directory
                </h2>
              </div>
              <p className="text-sm font-sans text-charcoal-500 max-w-xs">
                Click an artist to view their associated location on the map.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {artists.map((artist) => (
                <ArtistCard
                  key={artist.id}
                  artist={artist}
                  onClick={handleArtistClick}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── About ──────────────────────────────────────────── */}
      <div ref={aboutRef} id="about-section">
        <About />
      </div>

      {/* ── Footer ─────────────────────────────────────────── */}
      <Footer onSectionNav={scrollToSection} />
    </div>
  );
};

export default Home;

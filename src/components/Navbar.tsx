import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Menu, X, Search } from 'lucide-react';
import { debounce } from '../utils/search';

interface NavbarProps {
  onSectionNav: (section: string) => void;
  onSearchOpen: () => void;
}

const NAV_LINKS = [
  { label: 'Map', section: 'map' },
  { label: 'Art Forms', section: 'artforms' },
  { label: 'Timeline', section: 'timeline' },
  { label: 'Movements', section: 'movements' },
  { label: 'Artists', section: 'artists' },
  { label: 'About', section: 'about' },
];

const Navbar: React.FC<NavbarProps> = ({ onSectionNav, onSearchOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = debounce(() => setScrolled(window.scrollY > 40), 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (section: string) => {
    onSectionNav(section);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-charcoal-100 shadow-sm'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNav('hero')}
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
            aria-label="Indian Art Atlas — Home"
          >
            <div className="w-8 h-8 rounded-full bg-charcoal-800 flex items-center justify-center group-hover:bg-terracotta-700 transition-colors duration-200">
              <MapPin size={14} className="text-gold-200" aria-hidden="true" />
            </div>
            <span className={`font-serif text-base font-semibold tracking-wide transition-colors duration-200 ${scrolled ? 'text-charcoal-900' : 'text-charcoal-900'}`}>
              Indian Art Atlas
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNav(link.section)}
                className="px-3 py-1.5 text-sm font-sans font-medium text-charcoal-600 hover:text-charcoal-900 rounded transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={onSearchOpen}
              aria-label="Open search"
              className="p-2 text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100 rounded transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <Search size={18} aria-hidden="true" />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100 rounded transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-white border-t border-charcoal-100 shadow-lg"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.section}
                onClick={() => handleNav(link.section)}
                className="text-left px-3 py-2.5 text-sm font-sans font-medium text-charcoal-700 hover:bg-charcoal-50 rounded transition-colors duration-150"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

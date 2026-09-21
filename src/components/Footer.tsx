import React from 'react';
import { MapPin, BookOpen } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Explore', section: 'map' },
  { label: 'Art Forms', section: 'artforms' },
  { label: 'Movements', section: 'movements' },
  { label: 'Artists', section: 'artists' },
  { label: 'About', section: 'about' },
];

const SOURCES = [
  'Archaeological Survey of India (ASI)',
  'National Gallery of Modern Art (NGMA)',
  'Wikimedia Commons (CC licensed images)',
  'UNESCO World Heritage Centre',
  'National Museum, New Delhi',
  'Indian Museum, Kolkata',
];

interface FooterProps {
  onSectionNav: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionNav }) => {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-charcoal-700 flex items-center justify-center">
                <MapPin size={14} className="text-gold-300" aria-hidden="true" />
              </div>
              <span className="font-serif text-parchment-100 text-base font-semibold">
                Indian Art Atlas
              </span>
            </div>
            <p className="text-sm font-sans text-charcoal-400 leading-relaxed mb-4">
              Mapping India's artistic heritage across geography, time, and tradition.
            </p>
            <p className="text-xs font-sans text-charcoal-500">
              Created as an academic project.
              <br />
              College Assignment · CO1 · 2026
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="section-label text-gold-400 mb-4 text-[10px]">Navigate</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => onSectionNav(link.section)}
                    className="text-sm font-sans text-charcoal-400 hover:text-parchment-100 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sources */}
          <div>
            <p className="section-label text-gold-400 mb-4 text-[10px]">Sources & Attribution</p>
            <ul className="space-y-1.5">
              {SOURCES.map((source) => (
                <li key={source} className="flex items-start gap-2">
                  <BookOpen size={11} className="text-charcoal-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs font-sans text-charcoal-400">{source}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-sans text-charcoal-500">
            Images sourced from open cultural archives. All historical information is presented
            for educational purposes. Approximate dates are indicated with "c."
          </p>
          <p className="text-xs font-sans text-charcoal-600 flex-shrink-0">
            Team Size: 5 · Submission 16.09.2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import type { SearchResult } from '../types/art';
import { searchAll, debounce } from '../utils/search';
import { locations } from '../data/locations';
import { artists } from '../data/artists';
import { movements } from '../data/movements';

interface SearchBarProps {
  onResultSelect: (result: SearchResult) => void;
  onClose?: () => void;
  isModal?: boolean;
}

const typeLabel: Record<string, string> = {
  location: 'Location',
  artist: 'Artist',
  movement: 'Movement',
  artwork: 'Artwork',
};

const typeColor: Record<string, string> = {
  location: 'bg-terracotta-700 text-white',
  artist: 'bg-indigo-800 text-white',
  movement: 'bg-art-green-700 text-white',
  artwork: 'bg-gold-500 text-white',
};

const SearchBar: React.FC<SearchBarProps> = ({ onResultSelect, onClose, isModal = false }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounced search
  const performSearch = useRef(
    debounce((q: string) => {
      if (!q.trim()) {
        setResults([]);
        setLoading(false);
        return;
      }
      const res = searchAll(q, locations, artists, movements, 8);
      setResults(res);
      setLoading(false);
    }, 250)
  ).current;

  useEffect(() => {
    if (isModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModal]);

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim()) setLoading(true);
    else setResults([]);
    performSearch(val);
  };

  const handleSelect = (result: SearchResult) => {
    onResultSelect(result);
    setQuery('');
    setResults([]);
    setFocused(false);
    if (onClose) onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setQuery('');
      setResults([]);
      setFocused(false);
      if (onClose) onClose();
    }
  };

  const showDropdown = focused && (results.length > 0 || (query.length > 0 && !loading));

  return (
    <div ref={containerRef} className={`relative ${isModal ? 'w-full' : 'w-64 lg:w-80'}`}>
      <div
        className={`flex items-center gap-2 border rounded-sm bg-white px-3 py-2.5 transition-all duration-200 ${
          focused ? 'border-charcoal-800 shadow-sm' : 'border-charcoal-200'
        }`}
      >
        <Search size={16} className="text-charcoal-400 flex-shrink-0" aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search artists, artworks, movements, or places…"
          className="flex-1 bg-transparent text-sm text-charcoal-800 placeholder-charcoal-400 outline-none"
          aria-label="Search the atlas"
          aria-autocomplete="list"
          aria-controls={showDropdown ? 'search-results' : undefined}
          aria-expanded={showDropdown}
          autoComplete="off"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setResults([]); }}
            aria-label="Clear search"
            className="text-charcoal-400 hover:text-charcoal-700 transition-colors"
          >
            <X size={14} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div
          id="search-results"
          role="listbox"
          aria-label="Search results"
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-charcoal-200 rounded-sm shadow-xl z-50 overflow-hidden max-h-80 overflow-y-auto scrollbar-thin"
        >
          {results.length === 0 && query.trim() ? (
            <div className="px-4 py-6 text-center text-sm text-charcoal-400 font-sans">
              No artists, locations, artworks, or movements found.
            </div>
          ) : (
            results.map((result) => (
              <button
                key={`${result.type}-${result.id}`}
                role="option"
                aria-selected="false"
                onClick={() => handleSelect(result)}
                className="w-full text-left flex items-start gap-3 px-4 py-3 hover:bg-parchment-50 border-b border-charcoal-50 last:border-0 transition-colors duration-150"
              >
                <span
                  className={`mt-0.5 px-1.5 py-0.5 text-[10px] font-sans font-semibold tracking-wide rounded flex-shrink-0 ${typeColor[result.type]}`}
                >
                  {typeLabel[result.type]}
                </span>
                <div>
                  <p className="text-sm font-sans font-medium text-charcoal-800">{result.name}</p>
                  {result.subtitle && (
                    <p className="text-xs text-charcoal-400 mt-0.5">{result.subtitle}</p>
                  )}
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

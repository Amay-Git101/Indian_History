import React from 'react';
import { ChevronDown, X } from 'lucide-react';
import type { FilterState, Region, ArtFormCategory, HistoricalPeriodName } from '../types/art';
import { hasActiveFilters, emptyFilters } from '../utils/filters';
import { movements } from '../data/movements';

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  resultCount: number;
  totalCount: number;
}

const REGIONS: Region[] = ['North', 'South', 'East', 'West', 'Central', 'Northeast'];
const ART_FORMS: ArtFormCategory[] = [
  'Painting', 'Sculpture', 'Architecture', 'Textiles',
  'Folk Art', 'Tribal Art', 'Craft', 'Modern Art',
  'Contemporary Art', 'Religious Art', 'Classical Art',
];
const PERIODS: HistoricalPeriodName[] = [
  'Ancient', 'Medieval', 'Early Modern', 'Colonial', 'Modern', 'Contemporary',
];

function Dropdown<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: T | null;
  onChange: (val: T | null) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value ?? ''}
        onChange={(e) => onChange((e.target.value as T) || null)}
        className={`appearance-none pl-3 pr-8 py-2 text-xs font-sans font-medium border rounded-sm cursor-pointer transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
          value
            ? 'border-charcoal-800 bg-charcoal-800 text-white'
            : 'border-charcoal-200 bg-white text-charcoal-600 hover:border-charcoal-400'
        }`}
        aria-label={`Filter by ${label}`}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown
        size={12}
        className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 ${value ? 'text-white' : 'text-charcoal-400'}`}
        aria-hidden="true"
      />
    </div>
  );
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onChange, resultCount, totalCount }) => {
  const active = hasActiveFilters(filters);

  const movementOptions = movements.map((m) => m.id);
  const movementLabels: Record<string, string> = Object.fromEntries(
    movements.map((m) => [m.id, m.name])
  );

  return (
    <div className="bg-white border-b border-charcoal-100 shadow-sm sticky top-16 z-[900]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 py-3 overflow-x-auto scrollbar-thin">
          {/* Filter dropdowns */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Dropdown
              label="Region"
              options={REGIONS}
              value={filters.region}
              onChange={(val) => onChange({ ...filters, region: val })}
            />
            <Dropdown
              label="Art Form"
              options={ART_FORMS}
              value={filters.artForm}
              onChange={(val) => onChange({ ...filters, artForm: val })}
            />
            <Dropdown
              label="Period"
              options={PERIODS}
              value={filters.period}
              onChange={(val) => onChange({ ...filters, period: val })}
            />

            {/* Movement dropdown */}
            <div className="relative">
              <select
                value={filters.movement ?? ''}
                onChange={(e) => onChange({ ...filters, movement: e.target.value || null })}
                className={`appearance-none pl-3 pr-8 py-2 text-xs font-sans font-medium border rounded-sm cursor-pointer transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                  filters.movement
                    ? 'border-charcoal-800 bg-charcoal-800 text-white'
                    : 'border-charcoal-200 bg-white text-charcoal-600 hover:border-charcoal-400'
                }`}
                aria-label="Filter by Movement"
              >
                <option value="">Movement</option>
                {movementOptions.map((id) => (
                  <option key={id} value={id}>{movementLabels[id]}</option>
                ))}
              </select>
              <ChevronDown
                size={12}
                className={`pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 ${filters.movement ? 'text-white' : 'text-charcoal-400'}`}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Separator */}
          <div className="w-px h-5 bg-charcoal-200 flex-shrink-0" aria-hidden="true" />

          {/* Result count */}
          <p className="text-xs font-sans text-charcoal-500 flex-shrink-0 whitespace-nowrap">
            <span className="font-semibold text-charcoal-800">{resultCount}</span>
            {' '}of {totalCount} locations
          </p>

          {/* Clear */}
          {active && (
            <button
              onClick={() => onChange(emptyFilters())}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-medium text-terracotta-700 border border-terracotta-300 rounded-sm hover:bg-terracotta-50 transition-colors duration-150 flex-shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400"
              aria-label="Clear all filters"
            >
              <X size={12} aria-hidden="true" />
              Clear Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

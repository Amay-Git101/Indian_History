import type { ArtLocation, FilterState } from '../types/art';

/**
 * Filter locations based on the active filter state.
 * A location matches if it satisfies ALL active filters.
 */
export function filterLocations(
  locations: ArtLocation[],
  filters: FilterState,
): ArtLocation[] {
  return locations.filter((loc) => {
    if (filters.region && loc.region !== filters.region) return false;
    if (filters.artForm && !loc.artForms.includes(filters.artForm)) return false;
    if (filters.period && !loc.periods.includes(filters.period)) return false;
    if (filters.movement && !loc.movements.includes(filters.movement)) return false;
    return true;
  });
}

/**
 * Returns true if any filter is active.
 */
export function hasActiveFilters(filters: FilterState): boolean {
  return !!(filters.region || filters.artForm || filters.period || filters.movement);
}

/**
 * Returns the empty FilterState.
 */
export function emptyFilters(): FilterState {
  return { region: null, artForm: null, period: null, movement: null };
}

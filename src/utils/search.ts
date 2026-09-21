import type { ArtLocation, Artist, Movement, SearchResult } from '../types/art';

/**
 * Normalise a string for fuzzy matching — lowercase, remove diacritics.
 */
function normalise(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function includes(haystack: string, needle: string): boolean {
  return normalise(haystack).includes(normalise(needle));
}

/**
 * Multi-entity search across locations, artists, and movements.
 * Returns up to `maxResults` results, sorted by relevance (exact name matches first).
 */
export function searchAll(
  query: string,
  locations: ArtLocation[],
  artists: Artist[],
  movements: Movement[],
  maxResults = 10,
): SearchResult[] {
  if (!query.trim()) return [];

  const results: SearchResult[] = [];
  const q = query.trim();

  // --- Locations ---
  for (const loc of locations) {
    const nameMatch = includes(loc.name, q) || includes(loc.city, q);
    const tagMatch = loc.tags.some((t) => includes(t, q));
    const movementMatch = loc.movements.some((m) => includes(m, q));
    const artFormMatch = loc.artForms.some((a) => includes(a, q));
    const periodMatch = loc.periods.some((p) => includes(p, q));

    if (nameMatch || tagMatch || movementMatch || artFormMatch || periodMatch) {
      results.push({
        type: 'location',
        id: loc.id,
        name: loc.name,
        subtitle: `${loc.state} · ${loc.artForms.slice(0, 2).join(', ')}`,
        locationId: loc.id,
      });
    }
  }

  // --- Artists ---
  for (const artist of artists) {
    const nameMatch = includes(artist.name, q);
    const movementMatch = artist.movement ? includes(artist.movement, q) : false;
    const worksMatch = (artist.notableWorks ?? []).some((w) => includes(w, q));
    if (nameMatch || movementMatch || worksMatch) {
      results.push({
        type: 'artist',
        id: artist.id,
        name: artist.name,
        subtitle: `${artist.movement ?? 'Artist'} · ${artist.lifespan ?? ''}`,
        locationId: artist.primaryLocationId,
      });
    }
  }

  // --- Movements ---
  for (const movement of movements) {
    const nameMatch = includes(movement.name, q);
    const descMatch = includes(movement.description, q);
    const charMatch = movement.characteristics.some((c) => includes(c, q));
    if (nameMatch || descMatch || charMatch) {
      results.push({
        type: 'movement',
        id: movement.id,
        name: movement.name,
        subtitle: `${movement.region} · ${movement.period}`,
        locationId: movement.locationIds[0],
      });
    }
  }

  // Sort: exact name matches first
  results.sort((a, b) => {
    const aExact = normalise(a.name).startsWith(normalise(q)) ? 0 : 1;
    const bExact = normalise(b.name).startsWith(normalise(q)) ? 0 : 1;
    return aExact - bExact;
  });

  return results.slice(0, maxResults);
}

/**
 * Simple debounce utility.
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

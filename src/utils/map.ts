// India center coordinates
export const INDIA_CENTER: [number, number] = [22.5, 79.0];
export const INDIA_ZOOM = 5;

/**
 * Returns Tailwind/CSS color token for each art form category.
 */
export function artFormColor(artForm: string): string {
  const map: Record<string, string> = {
    Painting: '#c2410c',
    Sculpture: '#7c3aed',
    Architecture: '#0369a1',
    Textiles: '#0f766e',
    'Folk Art': '#d97706',
    'Tribal Art': '#65a30d',
    Craft: '#b45309',
    'Modern Art': '#be123c',
    'Contemporary Art': '#6d28d9',
    'Religious Art': '#b45309',
    'Performing Arts': '#0891b2',
    'Classical Art': '#1d4ed8',
  };
  return map[artForm] ?? '#6b7280';
}

/**
 * Returns a short emoji/symbol for each art form (used in marker icons).
 */
export function artFormSymbol(artForm: string): string {
  const map: Record<string, string> = {
    Painting: '🎨',
    Sculpture: '🗿',
    Architecture: '🏛️',
    Textiles: '🧵',
    'Folk Art': '🪷',
    'Tribal Art': '🌿',
    Craft: '🏺',
    'Modern Art': '✦',
    'Contemporary Art': '◈',
    'Religious Art': '☸',
    'Performing Arts': '💃',
    'Classical Art': '⚱️',
  };
  return map[artForm] ?? '●';
}

/**
 * Period to color mapping for timeline.
 */
export const periodColors: Record<string, string> = {
  Ancient: '#92400e',
  Medieval: '#1d4ed8',
  'Early Modern': '#065f46',
  Colonial: '#7c2d12',
  Modern: '#1e40af',
  Contemporary: '#4c1d95',
};

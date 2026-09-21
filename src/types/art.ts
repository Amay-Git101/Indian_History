// ============================================================
// Core domain types for Indian Art Atlas
// Structured to be migrated to Supabase in the future
// ============================================================

export type Region = 'North' | 'South' | 'East' | 'West' | 'Central' | 'Northeast';

export type HistoricalPeriodName =
  | 'Ancient'
  | 'Medieval'
  | 'Early Modern'
  | 'Colonial'
  | 'Modern'
  | 'Contemporary';

export type ArtFormCategory =
  | 'Painting'
  | 'Sculpture'
  | 'Architecture'
  | 'Textiles'
  | 'Folk Art'
  | 'Tribal Art'
  | 'Craft'
  | 'Modern Art'
  | 'Contemporary Art'
  | 'Religious Art'
  | 'Performing Arts'
  | 'Classical Art';

export interface HistoricalPeriod {
  name: HistoricalPeriodName;
  approximateRange: string; // e.g. "c. 3rd century BCE – 6th century CE"
}

export interface ArtImage {
  id: string;
  url: string;               // URL or relative path
  thumbnailUrl?: string;
  title: string;
  creator?: string;          // Artist or photographer
  approximateDate?: string;  // e.g. "c. 16th century"
  source: string;            // Attribution / repository
  license: string;           // e.g. "Public Domain", "CC BY 4.0"
  altText: string;
}

export interface Artist {
  id: string;
  name: string;
  lifespan?: string;         // e.g. "1871–1951"
  activePeriod?: string;     // e.g. "early 20th century"
  movement?: string;
  primaryLocationId?: string; // link to ArtLocation.id
  description: string;
  notableWorks?: string[];
  portraitUrl?: string;
  portraitAlt?: string;
}

export interface Artwork {
  id: string;
  title: string;
  artistId?: string;
  approximateDate?: string;
  medium?: string;
  location?: string;         // Where it currently resides
  description?: string;
  imageUrl?: string;
  source?: string;
}

export interface ArtLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  region: Region;

  latitude: number;
  longitude: number;

  periods: HistoricalPeriodName[];
  artForms: ArtFormCategory[];
  movements: string[];          // ids referencing Movement

  description: string;
  historicalContext: string;
  significance: string;

  artists: string[];            // Artist ids
  artworks: Artwork[];
  images: ArtImage[];

  relatedLocations: string[];   // ArtLocation ids
  tags: string[];               // for search
}

export interface Movement {
  id: string;
  name: string;
  period: string;              // Approximate date range
  region: string;
  description: string;
  characteristics: string[];
  artistIds: string[];
  locationIds: string[];
  coverImage?: string;
  coverImageAlt?: string;
}

export interface ArtFormInfo {
  id: ArtFormCategory;
  name: string;
  description: string;
  coverImage: string;
  coverImageAlt: string;
  locationCount?: number;
}

export interface PeriodInfo {
  id: HistoricalPeriodName;
  name: string;
  timeRange: string;
  description: string;
  majorDevelopments: string[];
  locationCount?: number;
}

// Search result union type
export type SearchResultType = 'location' | 'artist' | 'movement' | 'artwork';

export interface SearchResult {
  type: SearchResultType;
  id: string;
  name: string;
  subtitle?: string;
  locationId?: string; // which location to zoom to
}

// Filter state
export interface FilterState {
  region: Region | null;
  artForm: ArtFormCategory | null;
  period: HistoricalPeriodName | null;
  movement: string | null;
}

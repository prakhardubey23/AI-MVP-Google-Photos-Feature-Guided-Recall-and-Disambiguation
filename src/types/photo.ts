export type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

export interface LocationMetadata {
  city?: string;
  placeName?: string;
  state?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
}

export interface VisualCharacteristics {
  isSelfie: boolean;
  isGroupPhoto: boolean;
  isBurstCandidate: boolean;
  burstGroupId?: string;
  dominantColors: string[];
  aspectRatio: number; // width / height
}

export interface PhotoRecord {
  id: string;
  filePath: string;
  fileName: string;
  url: string;
  timestamp: string; // ISO 8601 string
  dateDisplay: string;
  year: number;
  month: number;
  timeOfDay: TimeOfDay;
  location: LocationMetadata;
  eventContext: string[];
  subEvent?: string;
  people: string[];
  scenes: string[];
  activities: string[];
  objects: string[];
  visualCharacteristics: VisualCharacteristics;
  caption: string;
  memoryStory?: string;
}

export type QueryStateType = 'STATE_A' | 'STATE_B' | 'STATE_C' | 'STATE_D';

export interface ParsedMemoryEntities {
  events: string[];
  people: string[];
  locations: string[];
  timeRange?: {
    approxYear?: number;
    season?: string;
    timeOfDay?: TimeOfDay;
  };
  scenes: string[];
  activities: string[];
  objects: string[];
  rawClues: string[];
}

export interface RefinementChip {
  id: string;
  label: string;
  facetType: 'people' | 'scene' | 'timeOfDay' | 'event' | 'activity' | 'visual';
  value: string;
  matchingCount: number;
  isSelected?: boolean;
}

export interface ClarificationQuestion {
  question: string;
  reason?: string;
  options: RefinementChip[];
}

export interface QueryAnalysisResult {
  state: QueryStateType;
  isPhotoQuery: boolean;
  confidence: number;
  reasoning: string;
  parsedEntities: ParsedMemoryEntities;
  conversationalSummary: string;
  suggestedAlternativeSearches?: string[];
  disambiguationPrompt?: string;
  clarificationQuestion?: ClarificationQuestion;
}

export interface DisambiguationCluster {
  id: string;
  title: string;
  subtitle: string;
  category: 'event' | 'people' | 'scene' | 'timeOfDay' | 'burst';
  photoCount: number;
  representativePhoto: PhotoRecord;
  photos: PhotoRecord[];
  filterValue: string;
  facetType: RefinementChip['facetType'];
}

export interface SearchSessionState {
  rawQuery: string;
  activeQuery: string;
  analysis: QueryAnalysisResult | null;
  initialCandidates: PhotoRecord[];
  activeCandidates: PhotoRecord[];
  activeFilters: RefinementChip[];
  availableRefinements: RefinementChip[];
  currentClarification: ClarificationQuestion | null;
  clusters: DisambiguationCluster[];
  isLoading: boolean;
  error: string | null;
  selectedClusterId: string | null;
}

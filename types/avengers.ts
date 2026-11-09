export type EraMode = 'golden' | 'doomsday';

export interface CharacterStat {
  label: string;
  value: string;
  percentage: number;
}

export interface CharacterQuote {
  quote: string;
  context: string;
  speaker: string;
}

export interface CharacterDossier {
  id: string;
  name: string;
  alias: string;
  role: string;
  era: EraMode;
  slug: string;
  image: string;
  audioSrc: string;
  voiceTitle: string;
  accentColor: string;
  glowColor: string;
  badge: string;
  description: string;
  lore: string[];
  stats: CharacterStat[];
  telemetry: Record<string, string | number>;
  quote: CharacterQuote;
  abilities: string[];
  signatureItem: string;
  status: string;
  threatLevel?: string;
  clearanceLevel?: string;
}

export interface AudioPlaybackState {
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  error: string | null;
}

export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  youtubeId: string;
  era: EraMode | 'both';
  description: string;
  badge: string;
}

export interface NavLinkItem {
  name: string;
  href: string;
  era: EraMode | 'both';
  badge?: string;
}


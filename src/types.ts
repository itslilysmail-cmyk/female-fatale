export type PrototypeType = 'BLACK_WIDOW' | 'ANGEL_OF_DEATH' | 'REVENGE_KILLER' | 'POWER_SEEKER' | 'CULT_FOLLOWER' | 'PREDATOR';

export interface ScoreProfile {
  dominance: number;
  empathy: number;
  calculation: number;
  impulsivity: number;
  narcissism: number;
}

export interface Prototype {
  id: PrototypeType;
  titleEn: string;
  titleZh: string;
  tagline: string;
  interpretation: string;
  crimeProfile: string;
  characterName: string;
  characterYears: string;
  stats: ScoreProfile;
  references: string[];
  theme: {
    accent: string;
    bg: string;
    glow: string;
    muted: string;
  };
  evidenceImages: string[];
}

export interface Option {
  text: string;
  scores: Partial<Record<PrototypeType, number>>;
}

export interface Question {
  id: number;
  chapter?: string;
  chapterImage?: string;
  text: string;
  options: Option[];
}

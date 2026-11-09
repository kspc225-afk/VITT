export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  indications: string[];
  duration: string;
  anesthesia: string;
  recovery: string;
  imageFallbackGradient: string;
  accentBadge: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  highlight: string;
  timeframe: string;
  idealFor: string;
  guarantee: string;
  hotspotTarget: 'crown' | 'abutment' | 'implant' | 'bone';
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  patientProfile: string;
  problem: string;
  solution: string;
  technique: string;
  timeline: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImgUrl: string;
  afterImgUrl: string;
}

export interface PatientReview {
  id: string;
  author: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'implant' | 'douleur' | 'tarifs' | 'deroulement';
}

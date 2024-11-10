export interface PropertyDetails {
  nightlyRate: number;
  occupancyRate: number;
  bedrooms: number;
  cleaningFee: number;
  location: string;
}

export interface SeasonalRates {
  summer: number;
  winter: number;
  spring: number;
  fall: number;
}

export interface Revenue {
  monthly: string;
  annual: string;
  quarterly: number[];
}

export interface AIRecommendations {
  suggestedPrice: number;
  confidence: number;
  insights: string[];
  similarProperties: Property[];
}

export interface Property {
  location: string;
  price: number;
  bedrooms: number;
  rating: number;
  occupancyRate: number;
}

// Add historical data types
interface HistoricalData {
  date: string;
  revenue: number;
  occupancyRate: number;
  averageRate: number;
  reviews: Review[];
}

interface Review {
  rating: number;
  comment: string;
  date: string;
}
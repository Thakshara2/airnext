interface PricingFactors {
  dayOfWeek: string;
  seasonality: number;
  localEvents: string[];
  demandScore: number;
  competitorPricing: number;
}

// Add dynamic pricing logic
export function calculateDynamicPrice(basePrice: number, factors: PricingFactors) {
  const {
    dayOfWeek,
    seasonality,
    localEvents,
    demandScore,
    competitorPricing
  } = factors;

  let adjustedPrice = basePrice;
  
  // Weekend adjustment
  if (dayOfWeek === 'Friday' || dayOfWeek === 'Saturday') {
    adjustedPrice *= 1.2;
  }

  // Event-based pricing
  if (localEvents.length > 0) {
    adjustedPrice *= 1.3;
  }

  return adjustedPrice;
} 
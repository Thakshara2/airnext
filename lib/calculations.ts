import { PropertyDetails, SeasonalRates, Revenue } from "./types";

export function calculateRevenue(
  details: PropertyDetails,
  seasonalRates: SeasonalRates
): Revenue {
  const daysPerMonth = 30;
  const occupiedDays = Math.floor((details.occupancyRate / 100) * daysPerMonth);
  
  // Calculate base monthly revenue
  const baseMonthlyRevenue = (details.nightlyRate * occupiedDays) + 
    (details.cleaningFee * (occupiedDays / 3));

  // Calculate quarterly revenue with seasonal adjustments
  const quarterly = [
    baseMonthlyRevenue * 3 * ((seasonalRates.winter * 2 + seasonalRates.spring) / 3), // Q1
    baseMonthlyRevenue * 3 * ((seasonalRates.spring * 2 + seasonalRates.summer) / 3), // Q2
    baseMonthlyRevenue * 3 * ((seasonalRates.summer * 2 + seasonalRates.fall) / 3),   // Q3
    baseMonthlyRevenue * 3 * ((seasonalRates.fall * 2 + seasonalRates.winter) / 3),   // Q4
  ];

  const annualRevenue = quarterly.reduce((sum, q) => sum + q, 0);
  const monthlyAverage = annualRevenue / 12;

  return {
    monthly: monthlyAverage.toFixed(2),
    annual: annualRevenue.toFixed(2),
    quarterly: quarterly.map(q => Number(q.toFixed(2))),
  };
}
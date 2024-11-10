"use client";

import { useState } from "react";
import { PropertyInputs } from "./property-inputs";
import { RevenueDisplay } from "./revenue-display";
import { SeasonalAdjustments } from "./seasonal-adjustments";
import { AIRecommendations } from "./ai-recommendations";
import { calculateRevenue } from "@/lib/calculations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RevenueEstimator() {
  const [propertyDetails, setPropertyDetails] = useState({
    nightlyRate: 150,
    occupancyRate: 70,
    bedrooms: 2,
    cleaningFee: 100,
    location: "",
  });

  const [seasonalRates, setSeasonalRates] = useState({
    summer: 1.2,
    winter: 0.9,
    spring: 1.0,
    fall: 0.95,
  });

  const revenue = calculateRevenue(propertyDetails, seasonalRates);

  // Add JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Airbnb Revenue Calculator",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Calculate potential Airbnb revenue with AI-powered pricing recommendations and market analysis"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold">Airbnb Revenue Calculator</h1>
          <p className="text-muted-foreground mt-2">
            Estimate your vacation rental income with our AI-powered calculator
          </p>
        </header>
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basics">Basic Details</TabsTrigger>
            <TabsTrigger value="seasonal">Seasonal Adjustments</TabsTrigger>
            <TabsTrigger value="ai">AI Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basics" className="grid gap-8 md:grid-cols-2">
            <PropertyInputs
              details={propertyDetails}
              onChange={setPropertyDetails}
            />
            <RevenueDisplay revenue={revenue} />
          </TabsContent>
          
          <TabsContent value="seasonal">
            <SeasonalAdjustments
              rates={seasonalRates}
              onChange={setSeasonalRates}
            />
          </TabsContent>

          <TabsContent value="ai" className="grid gap-8 md:grid-cols-2">
            <AIRecommendations propertyDetails={propertyDetails} />
            <RevenueDisplay revenue={revenue} />
          </TabsContent>
        </Tabs>
      </article>
    </>
  );
}
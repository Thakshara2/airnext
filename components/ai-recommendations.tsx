"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { AIRecommendations, PropertyDetails } from "@/lib/types";
import { getAIRecommendations } from "@/lib/ai";
import { Brain, TrendingUp, Home, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface AIRecommendationsProps {
  propertyDetails: PropertyDetails;
}

export function AIRecommendations({ propertyDetails }: AIRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<AIRecommendations | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      setLoading(true);
      const data = await getAIRecommendations(propertyDetails);
      setRecommendations(data);
      setLoading(false);
    }

    fetchRecommendations();
  }, [propertyDetails]);

  if (loading) {
    return (
      <Card className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-rose-500 animate-pulse" />
          <h3 className="text-lg font-semibold">AI Analysis</h3>
        </div>
        <div className="h-40 flex items-center justify-center">
          <div className="text-sm text-gray-500">Analyzing property data...</div>
        </div>
      </Card>
    );
  }

  if (!recommendations) return null;

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center gap-2">
        <Brain className="w-5 h-5 text-rose-500" />
        <h3 className="text-lg font-semibold">AI Recommendations</h3>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-rose-50 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-rose-700">Suggested Price</div>
            <div className="text-2xl font-bold text-rose-700">
              ${recommendations.suggestedPrice}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Confidence</span>
              <span>{recommendations.confidence}%</span>
            </div>
            <Progress value={recommendations.confidence} className="h-2" />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Market Insights
          </h4>
          <ul className="space-y-2">
            {recommendations.insights.map((insight, index) => (
              <li key={index} className="text-sm text-gray-600">
                • {insight}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-medium flex items-center gap-2">
            <Home className="w-4 h-4" />
            Similar Properties
          </h4>
          <div className="grid gap-3">
            {recommendations.similarProperties.map((property, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-lg flex justify-between items-center"
              >
                <div className="space-y-1">
                  <div className="text-sm font-medium">${property.price}/night</div>
                  <div className="text-xs text-gray-500">
                    {property.bedrooms} beds • {property.occupancyRate}% occupied
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">{property.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
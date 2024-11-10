"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Metrics {
  occupancyRate: number;
  averageRating: number;
  repeatGuests: number;
  responseRate: number;
  superhost: boolean;
}

export function PerformanceMetrics() {
  const metrics: Metrics = {
    occupancyRate: 75,
    averageRating: 4.8,
    repeatGuests: 30,
    responseRate: 98,
    superhost: true
  };

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold mb-6">Performance Metrics</h3>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Occupancy Rate</span>
            <span>{metrics.occupancyRate}%</span>
          </div>
          <Progress value={metrics.occupancyRate} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground">Average Rating</div>
            <div className="text-2xl font-bold">{metrics.averageRating}/5</div>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <div className="text-sm text-muted-foreground">Repeat Guests</div>
            <div className="text-2xl font-bold">{metrics.repeatGuests}%</div>
          </div>
        </div>
      </div>
    </Card>
  );
} 
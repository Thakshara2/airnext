"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface CompetitorData {
  name: string;
  price: number;
  rating: number;
  occupancy: number;
  distance: number;
  amenities: string[];
}

export function CompetitorAnalysis() {
  const competitors: CompetitorData[] = [
    // Fetch real competitor data here
  ];

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold mb-6">Market Analysis</h3>
      
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Average Market Rate</h4>
            <div className="text-2xl font-bold">
              ${competitors.reduce((acc, curr) => acc + curr.price, 0) / competitors.length}
            </div>
          </div>
          
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Your Competitive Index</h4>
            <div className="text-2xl font-bold">8.5/10</div>
          </div>
        </div>

        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={competitors}>
              <XAxis dataKey="distance" label="Distance (miles)" />
              <YAxis label="Price ($)" />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
} 
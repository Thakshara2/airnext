"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { SeasonalRates } from "@/lib/types";

interface SeasonalAdjustmentsProps {
  rates: SeasonalRates;
  onChange: (rates: SeasonalRates) => void;
}

export function SeasonalAdjustments({ rates, onChange }: SeasonalAdjustmentsProps) {
  const updateRate = (season: keyof SeasonalRates, value: number) => {
    onChange({ ...rates, [season]: value });
  };

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold mb-6">Seasonal Rate Adjustments</h3>
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(rates).map(([season, rate]) => (
          <div key={season} className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="capitalize">{season} Rate Multiplier</Label>
              <span className="font-medium">{rate.toFixed(2)}x</span>
            </div>
            <Slider
              value={[rate * 100]}
              onValueChange={([value]) => updateRate(season as keyof SeasonalRates, value / 100)}
              min={50}
              max={200}
              step={5}
              className="py-4"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PricingRule {
  enabled: boolean;
  adjustment: number;
}

export function PricingRules() {
  const [rules, setRules] = useState({
    weekends: { enabled: true, adjustment: 20 },
    holidays: { enabled: true, adjustment: 30 },
    lastMinute: { enabled: true, adjustment: -10 },
    longStay: { enabled: true, adjustment: -15 },
    earlyBird: { enabled: true, adjustment: 5 },
    events: { enabled: true, adjustment: 25 }
  });

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold mb-6">Dynamic Pricing Rules</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label>Weekend Pricing</Label>
            <p className="text-sm text-muted-foreground">Increase rates for Friday/Saturday</p>
          </div>
          <div className="flex items-center gap-4">
            <Input 
              type="number"
              className="w-20"
              value={rules.weekends.adjustment}
              onChange={(e) => setRules({
                ...rules,
                weekends: {...rules.weekends, adjustment: Number(e.target.value)}
              })}
            />
            <span>%</span>
            <Switch 
              checked={rules.weekends.enabled}
              onCheckedChange={(checked) => setRules({
                ...rules,
                weekends: {...rules.weekends, enabled: checked}
              })}
            />
          </div>
        </div>
        {/* Add other pricing rules */}
      </div>
    </Card>
  );
} 
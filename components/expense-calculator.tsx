"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Expenses {
  mortgage: number;
  utilities: number;
  insurance: number;
  propertyTax: number;
  maintenance: number;
  supplies: number;
  wifi: number;
  streaming: number;
  propertyManagement: number;
  airbnbFees: number;
}

export function ExpenseCalculator() {
  const [expenses, setExpenses] = useState<Expenses>({
    mortgage: 0,
    utilities: 0,
    insurance: 0,
    propertyTax: 0,
    maintenance: 0,
    supplies: 0,
    wifi: 0,
    streaming: 0,
    propertyManagement: 0,
    airbnbFees: 13 // Default Airbnb fee percentage
  });

  const calculateTotalExpenses = () => {
    return Object.values(expenses).reduce((a, b) => a + b, 0);
  };

  const calculateMonthlyExpenses = () => {
    return calculateTotalExpenses() / 12;
  };

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold mb-6">Monthly Expenses</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label>Mortgage/Rent</Label>
          <Input 
            type="number"
            value={expenses.mortgage}
            onChange={(e) => setExpenses({...expenses, mortgage: Number(e.target.value)})}
          />
        </div>
        <div>
          <Label>Utilities (Avg)</Label>
          <Input 
            type="number"
            value={expenses.utilities}
            onChange={(e) => setExpenses({...expenses, utilities: Number(e.target.value)})}
          />
        </div>
        {/* Add other expense inputs */}
      </div>

      <div className="mt-6 p-4 bg-muted rounded-lg">
        <div className="flex justify-between mb-2">
          <span>Monthly Expenses:</span>
          <span className="font-semibold">${calculateMonthlyExpenses().toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Annual Expenses:</span>
          <span className="font-semibold">${calculateTotalExpenses().toFixed(2)}</span>
        </div>
      </div>
    </Card>
  );
} 
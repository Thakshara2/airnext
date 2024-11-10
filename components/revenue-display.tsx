"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Revenue } from "@/lib/types";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface RevenueDisplayProps {
  revenue: Revenue;
}

interface MonthlyData {
  month: string;
  revenue: number;
}

export function RevenueDisplay({ revenue }: RevenueDisplayProps) {
  const maxValue = Math.max(...revenue.quarterly);
  const getBarHeight = (value: number) => (value / maxValue) * 100;

  const MonthlyChart = ({ data }: { data: MonthlyData[] }) => (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#fff" />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <Card className={cn(
      "p-6 space-y-6",
      "bg-gradient-to-br from-rose-500 to-rose-600 text-white"
    )}>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Estimated Revenue</h3>
        
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-white/10 rounded-lg">
            <div className="text-sm text-rose-100">Monthly Average</div>
            <div className="text-3xl font-bold">${revenue.monthly}</div>
          </div>
          
          <div className="p-4 bg-white/10 rounded-lg">
            <div className="text-sm text-rose-100">Annual Total</div>
            <div className="text-3xl font-bold">${revenue.annual}</div>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-lg font-medium mb-4">Quarterly Revenue</h4>
          <div className="flex items-end justify-between h-40 gap-2">
            {revenue.quarterly.map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="text-sm text-rose-100">${value.toLocaleString()}</div>
                <div 
                  className="w-full bg-white/30 rounded-t transition-all duration-500 ease-out hover:bg-white/40"
                  style={{ height: `${getBarHeight(value)}%` }}
                />
                <div className="text-sm font-medium">Q{index + 1}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-lg font-medium">Assumptions</h4>
          <ul className="list-disc list-inside text-sm space-y-1 text-rose-100">
            <li>Based on provided occupancy rate</li>
            <li>Includes seasonal adjustments</li>
            <li>Excludes platform fees and taxes</li>
            <li>Cleaning fee applied every 3 days on average</li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
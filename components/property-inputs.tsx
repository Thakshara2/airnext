"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Building2, Calendar, DollarSign, Users, MapPin } from "lucide-react";
import { PropertyDetails } from "@/lib/types";

interface PropertyInputsProps {
  details: PropertyDetails;
  onChange: (details: PropertyDetails) => void;
}

export function PropertyInputs({ details, onChange }: PropertyInputsProps) {
  const updateField = (field: keyof PropertyDetails, value: any) => {
    onChange({ ...details, [field]: value });
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-rose-500" />
          <h3 className="text-lg font-semibold">Location</h3>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Property location</Label>
          <Input
            id="location"
            value={details.location}
            onChange={(e) => updateField("location", e.target.value)}
            placeholder="Enter city or area"
            className="text-lg"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-rose-500" />
          <h3 className="text-lg font-semibold">Nightly Rate</h3>
        </div>
        <div className="space-y-2">
          <Label htmlFor="nightly-rate">Base rate per night</Label>
          <Input
            id="nightly-rate"
            type="number"
            value={details.nightlyRate}
            onChange={(e) => updateField("nightlyRate", Number(e.target.value))}
            className="text-lg"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-rose-500" />
          <h3 className="text-lg font-semibold">Occupancy Rate</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Expected occupancy</Label>
            <span className="font-medium">{details.occupancyRate}%</span>
          </div>
          <Slider
            value={[details.occupancyRate]}
            onValueChange={([value]) => updateField("occupancyRate", value)}
            max={100}
            step={1}
            className="py-4"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-rose-500" />
            <h3 className="text-lg font-semibold">Bedrooms</h3>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bedrooms">Number of bedrooms</Label>
            <Input
              id="bedrooms"
              type="number"
              value={details.bedrooms}
              onChange={(e) => updateField("bedrooms", Number(e.target.value))}
              className="text-lg"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-rose-500" />
            <h3 className="text-lg font-semibold">Cleaning Fee</h3>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cleaning-fee">Fee per stay</Label>
            <Input
              id="cleaning-fee"
              type="number"
              value={details.cleaningFee}
              onChange={(e) => updateField("cleaningFee", Number(e.target.value))}
              className="text-lg"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface BookingData {
  startDate: Date;
  endDate: Date;
  guestName: string;
  revenue: number;
}

export function AvailabilityCalendar() {
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const isDateBooked = (date: Date) => {
    return bookings.some(booking => 
      date >= booking.startDate && date <= booking.endDate
    );
  };

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold mb-6">Availability Calendar</h3>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          modifiers={{
            booked: (date) => isDateBooked(date),
          }}
          modifiersStyles={{
            booked: { backgroundColor: "var(--primary)" }
          }}
        />
        
        <div className="space-y-4">
          <div className="flex gap-2">
            <Badge>Available</Badge>
            <Badge variant="secondary">Booked</Badge>
            <Badge variant="destructive">Blocked</Badge>
          </div>
          
          {/* Add booking details and management options */}
        </div>
      </div>
    </Card>
  );
} 
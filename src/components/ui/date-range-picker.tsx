"use client";

import * as React from "react";
import { Calendar1, ChevronDownIcon } from "lucide-react";
import { type DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps extends React.ComponentProps<"div"> {
  date: DateRange | undefined;
  onDateChange: (date: DateRange | undefined) => void;
}

export default function DateRangePicker({
  date,
  onDateChange,
}: DateRangePickerProps) {
  return (
    <div className="flex flex-row items-center gap-3">
      <Label className="px-1">Período</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="dates"
            className="w-56 justify-between font-normal"
          >
            <Calendar1 />
            {date?.from && date?.to
              ? `${date.from.toLocaleDateString()} - ${date.to.toLocaleDateString()}`
              : "Select date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="range"
            selected={date}
            captionLayout="dropdown"
            onSelect={onDateChange}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

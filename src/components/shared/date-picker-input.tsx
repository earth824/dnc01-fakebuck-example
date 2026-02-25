'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export default function DatePickerInput() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="justify-between px-3 font-normal">
          {format(new Date('2026'), 'dd MMMM yyyy')}
          {/* <span className="text-muted-foreground">Select date</span> */}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto overflow-hidden p-1">
        <Calendar mode="single" captionLayout="dropdown" />
      </PopoverContent>
    </Popover>
  );
}

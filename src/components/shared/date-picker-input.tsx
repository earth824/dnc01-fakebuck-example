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
import { useState } from 'react';

export default function DatePickerInput({
  id,
  onBlur,
  onChange,
  isInvalid,
  value
}: {
  id: string;
  onBlur: () => void;
  onChange: (...event: unknown[]) => void;
  isInvalid: boolean;
  value: Date;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="justify-between px-3 font-normal"
          id={id}
          onBlur={onBlur}
          aria-invalid={isInvalid}
        >
          {value ? (
            format(value, 'dd MMMM yyyy')
          ) : (
            <span className="text-muted-foreground">Select date</span>
          )}

          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto overflow-hidden p-1">
        <Calendar
          mode="single"
          captionLayout="dropdown"
          selected={value}
          defaultMonth={value}
          onSelect={(date) => {
            setOpen(false);
            onChange(date);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

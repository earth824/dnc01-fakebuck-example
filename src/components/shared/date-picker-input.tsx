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
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues
} from 'react-hook-form';

export default function DatePickerInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  field,
  fieldState
}: {
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="justify-between px-3 font-normal"
          id={field.name}
          onBlur={field.onBlur}
          aria-invalid={fieldState.invalid}
        >
          {field.value ? (
            format(field.value, 'dd MMMM yyyy')
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
          selected={field.value}
          defaultMonth={field.value}
          onSelect={(date) => {
            setOpen(false);
            field.onChange(date);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

import DatePickerInput from '@/components/shared/date-picker-input';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export default function RegisterForm() {
  return (
    <form>
      <FieldGroup className="gap-4">
        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <Field className="gap-1">
            <FieldLabel>First name</FieldLabel>
            <Input placeholder="First Name" />
          </Field>
          {/* Last Name */}
          <Field className="gap-1">
            <FieldLabel>Last name</FieldLabel>
            <Input placeholder="Last Name" />
          </Field>
        </div>

        {/* Date of birth */}
        <Field className="gap-1">
          <FieldLabel>Date of birth</FieldLabel>
          <DatePickerInput />
        </Field>

        {/* Gender */}
        <Field className="gap-1">
          <FieldLabel>Gender</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="FEMALE">Female</SelectItem>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="OTHER">Other</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        {/* Email Address */}
        <Field className="gap-1">
          <FieldLabel>Email address</FieldLabel>
          <Input placeholder="Email address" />
        </Field>

        {/* Password */}
        <Field className="gap-1">
          <FieldLabel>Password</FieldLabel>
          <Input placeholder="Password" />
        </Field>

        {/* Submit */}
        <Field>
          <Button className="rounded-full">Submit</Button>
        </Field>
        <Field>
          <Button variant="outline" className="rounded-full">
            I already have an account
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

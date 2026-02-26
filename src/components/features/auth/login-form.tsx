import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

export default function LoginForm() {
  return (
    <form>
      <FieldGroup className="gap-3">
        <Field className="gap-1">
          <FieldLabel>First name</FieldLabel>
          <Input placeholder="Email address" />
        </Field>
        <Field className="gap-1">
          <FieldLabel>Last name</FieldLabel>
          <Input placeholder="Password" />
        </Field>
        <Field className="mt-4">
          <Button className="rounded-full">Log in</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { login } from '@/lib/actions/auth.action';
import { LoginInput, loginSchema } from '@/lib/schemas/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, OctagonXIcon } from 'lucide-react';
import { useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginInput>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginSchema)
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (data: LoginInput) => {
    startTransition(async () => {
      const res = await login(data);
      if (!res.success) {
        setError('root', {
          message: 'The email or password you entered is incorrect'
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.root && (
        <Alert variant="destructive" className="mb-4 bg-red-100 border-red-200">
          <OctagonXIcon />
          <AlertTitle>{errors.root.message}</AlertTitle>
        </Alert>
      )}
      <FieldGroup className="gap-4">
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Field className="gap-1" data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email</FieldLabel>
              <Input
                {...field}
                id={field.name}
                placeholder="Email address"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} className="text-xs" />
              )}
            </Field>
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <Field className="gap-1" data-invalid={fieldState.invalid}>
              <FieldLabel>Password</FieldLabel>
              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="Password"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} className="text-xs" />
              )}
            </Field>
          )}
        />

        <Field className="mt-4">
          <Button className="rounded-full" disabled={isPending}>
            {isPending ? (
              <>
                <Loader className="animate-spin" /> Loggin in to your account
                ...
              </>
            ) : (
              'Login'
            )}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

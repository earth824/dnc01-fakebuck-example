'use server';

import { authService } from '@/lib/api/services/auth.service';
import { RegisterInput } from '@/lib/schemas/auth.schema';
import { redirect } from 'next/navigation';

export const register = async (input: RegisterInput) => {
  await authService.register(input);
  redirect('/login');
};

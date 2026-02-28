import { api } from '@/lib/api/client';
import { RegisterInput } from '@/lib/schemas/auth.schema';

export const authService = {
  register: (data: RegisterInput) => api.post<void>('/auth/register', data)
};

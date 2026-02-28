import { api } from '@/lib/api/client';
import { User } from '@/lib/api/user/user.service';

import { LoginInput, RegisterInput } from '@/lib/schemas/auth.schema';

type LoginResponse = {
  accessToken: string;
  user: User;
};

export const authService = {
  register: (data: RegisterInput) => api.post('/auth/register', data),
  login: (data: LoginInput) => api.post<LoginResponse>('/auth/login', data)
};

import { api } from '@/lib/api/client';
import { User } from '@/lib/api/user/user.service';

export const friendService = {
  unfriend: (targetUserId: string) =>
    api.delete<void>(`/friends/${targetUserId}`),
  get: () => api.get<User[]>('/friends')
};

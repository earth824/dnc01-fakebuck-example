import { api } from '@/lib/api/client';

export const friendService = {
  unfriend: (targetUserId: string) =>
    api.delete<void>(`/friends/${targetUserId}`)
};

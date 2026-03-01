import { api } from '@/lib/api/client';

export const friendRequestService = {
  send: (targetUserId: string) =>
    api.post<void>('/friends/requests', { recipientId: targetUserId }),
  cancel: (targetUserId: string) =>
    api.delete<void>(`/friends/requests/${targetUserId}`),
  confirm: (targetUserId: string) =>
    api.post<void>(`/friends/requests/${targetUserId}/accept`),
  reject: (targetUserId: string) =>
    api.post<void>(`/friends/requests/${targetUserId}/reject`)
};

import { api } from '@/lib/api/client';

type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: Gender;
  avatarUrl: string | null;
  coverUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UserWithFriend = User & { friends: User[] };
export type RelationshipStatus =
  | 'NONE'
  | 'FRIEND'
  | 'SELF'
  | 'REQUEST_SENT'
  | 'REQUEST_RECEIVED';

type GetUserProfileResponse = {
  user: UserWithFriend;
  relationshipStatus: RelationshipStatus;
};

export const userService = {
  getUserProfile: (userId: string) =>
    api.get<GetUserProfileResponse>(`/users/${userId}/profile`),
  uploadCover: (input: FormData) => api.patch<string>('/users/me/cover', input)
};

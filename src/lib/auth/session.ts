import { auth } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';
import z from 'zod';

const sessionUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  avatarUrl: z.string().nullable(),
  coverUrl: z.string().nullable(),
  accessToken: z.string
});

export const getAuthenticatedUser = async () => {
  const session = await auth();
  if (!session) redirect('/login');

  const { success, error, data } = sessionUserSchema.safeParse(session.user);
  if (!success)
    throw new Error(`Session user error: \n${z.prettifyError(error)}`);

  return data;
};

import { authService } from '@/lib/api/auth/auth.service';
import { loginSchema } from '@/lib/schemas/auth.schema';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const input = loginSchema.parse(credentials);
        const { user, accessToken } = await authService.login(input);
        return { id: user.id, email: user.email, accessToken };
      }
    })
  ]
});

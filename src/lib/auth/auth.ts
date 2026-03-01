import { authService } from '@/lib/api/auth/auth.service';
import { loginSchema } from '@/lib/schemas/auth.schema';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const input = loginSchema.parse(credentials);
        const { user, accessToken } = await authService.login(input);
        return { ...user, accessToken };
      }
    })
  ],
  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.avatarUrl = user.avatarUrl;
        token.coverUrl = user.coverUrl;
        token.accessToken = user.accessToken;

        const [, payloadB64] = user.accessToken!.split('.');
        const { exp } = JSON.parse(
          Buffer.from(payloadB64, 'base64url').toString()
        ) as { exp: number };
        token.accessTokenExpiresAt = exp - 10;
      }

      if (
        token.accessTokenExpiresAt &&
        Date.now() / 1000 >= token.accessTokenExpiresAt
      ) {
        return null;
      }

      if (trigger === 'update' && session) {
        token.avatarUrl = session.user.avatarUrl;
      }

      return token;
    },
    session({ session, token }) {
      session.user.id = token.sub as string;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.avatarUrl = token.avatarUrl;
      session.user.coverUrl = token.coverUrl;
      session.user.accessToken = token.accessToken;

      return session;
    }
  }
});

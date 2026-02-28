import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    firstName?: string;
    lastName?: string;
    dob?: string;
    gender?: Gender;
    avatarUrl?: string | null;
    coverUrl?: string | null;
    accessToken?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    firstName?: string;
    lastName?: string;
    dob?: string;
    gender?: Gender;
    avatarUrl?: string | null;
    coverUrl?: string | null;
    accessToken?: string;
  }
}

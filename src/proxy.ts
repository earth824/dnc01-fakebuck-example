import { auth } from '@/lib/auth/auth';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/', '/profile', '/friends'];
const publicRoutes = ['/login', '/register'];

export const proxy = auth((req) => {
  const pathname = req.nextUrl.pathname;
  const isAuthenticated = !!req.auth;

  const isProtectedRoute = protectedRoutes.some((el) =>
    el === '/' ? el === pathname : pathname.startsWith(el)
  );

  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const isPublicRoute = publicRoutes.some((el) =>
    el === '/' ? el === pathname : pathname.startsWith(el)
  );

  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_next/favicon|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|\\.well-known).*)'
  ]
};

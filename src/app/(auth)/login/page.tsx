import LoginForm from '@/components/features/auth/login-form';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-xl px-8">
        <div className="flex justify-center mb-6">
          <Image alt="Fakebuck" src="/logo.png" width={60} height={60} />
        </div>

        <h2 className="font-semibold text-lg mb-6">Log in to Facebook</h2>
        <LoginForm />

        <Button
          asChild
          variant="outline"
          className="rounded-full mt-13 w-full border-primary text-primary hover:text-primary"
        >
          <Link href="/register">Create new account</Link>
        </Button>
        <div className="flex justify-center mt-7">
          <Image alt="meta" src="/meta.svg" width={60} height={12} />
        </div>
      </div>
    </div>
  );
}

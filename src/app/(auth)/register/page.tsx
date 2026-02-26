import RegisterForm from '@/components/features/auth/register-form';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-xl mx-auto px-4 py-6">
        <div className="grid gap-6">
          {/* Back button */}
          <div>
            <Button
              asChild
              variant="ghost"
              className="rounded-full size-10 -ml-4"
            >
              <Link href="/login">
                <ChevronLeft />
              </Link>
            </Button>
          </div>

          {/* Meta logo */}
          <Image
            alt="meta"
            src="/meta.svg"
            width={60}
            height={12}
            quality={100}
          />

          {/* Title */}
          <div className="grid gap-1.5">
            <h1 className="text-2xl font-semibold">Get started on Facebook</h1>
            <p className="text-sm leading-tight text-muted-foreground">
              Create an account to connect with friends, family and communities
              of people who share your interests.
            </p>
          </div>

          {/* Register form */}
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

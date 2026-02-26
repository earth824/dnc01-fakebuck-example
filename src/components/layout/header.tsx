import MainNavigation from '@/components/layout/main-navigation';
import UserDropdown from '@/components/layout/user-dropdown';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-white shadow-sm flex justify-between items-center px-4">
      {/* Left: Logo */}
      <Link href="/" className="size-10 relative">
        <Image alt="Fakebuck" src="/logo.png" fill />
      </Link>

      {/* Center: Nav icons */}
      <MainNavigation />
      {/* Right: Actions + User menu */}
      <UserDropdown />
    </header>
  );
}

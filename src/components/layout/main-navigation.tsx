'use client';

import NavItem from '@/components/layout/nav-item';
import { Home, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { icon: Home, href: '/' },
  { icon: Users, href: '/friends' }
];

export default function MainNavigation() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-center gap-2">
      {NAV_ITEMS.map(({ icon, href }) => {
        return (
          <NavItem
            key={href}
            icon={icon}
            href={href}
            isActive={pathname === href}
          />
        );
      })}
    </nav>
  );
}

import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';
import Link from 'next/link';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

type NavItemProps = {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  href: string;
  isActive: boolean;
};

export default function NavItem({ icon: Icon, href, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        'relative flex items-center justify-center w-28 h-12 rounded-lg hover:bg-muted',
        isActive ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      <Icon className="w-6 h-6" />
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-0.75 bg-primary rounded-t-sm" />
      )}
    </Link>
  );
}

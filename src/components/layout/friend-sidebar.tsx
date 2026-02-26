import { UserCheck, UserPlus, Users, UserX } from 'lucide-react';
import Link from 'next/link';

const NAV_ITEMS = [
  { icon: Users, label: 'All Friends', href: '/friends' },
  {
    icon: UserCheck,
    label: 'Friend Requests',
    href: '/friends/requests/incoming'
  },
  {
    icon: UserX,
    label: 'Sent Requests',
    href: '/friends/requests/outgoing'
  },
  { icon: UserPlus, label: 'Find People', href: '/friends/find' }
];

export default function FriendSidebar() {
  return (
    <aside className="fixed top-14 left-0 w-90 h-[calc(100vh-3.5rem)] bg-white overflow-y-auto p-3 shadow-sm">
      <div className="flex items-center justify-between px-2 py-3">
        <h1 className="text-2xl font-bold">Friends</h1>
      </div>

      <nav className="space-y-1 mt-1">
        {NAV_ITEMS.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent"
          >
            <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center">
              <Icon className="size-5" />
            </div>
            <span className="font-medium text-sm">{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { logout } from '@/lib/actions/auth.action';
import { getAuthenticatedUser } from '@/lib/auth/session';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export default async function UserDropdown() {
  const currentUser = await getAuthenticatedUser();
  return (
    <DropdownMenu>
      {/* Toggle User Menu */}
      <DropdownMenuTrigger asChild>
        <button className="outline-none">
          <Avatar className="size-10">
            <AvatarImage
              src={currentUser.avatarUrl ?? '/user.png'}
              alt="User"
            />
            <AvatarFallback className="bg-muted"></AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      {/* User Menu */}
      <DropdownMenuContent align="end" className="w-72 p-2">
        {/* Profile */}
        <DropdownMenuItem
          asChild
          className="p-2 w-full rounded-md cursor-pointer"
        >
          <Link href="/profile">
            <Avatar className="size-9">
              <AvatarImage
                src={currentUser.avatarUrl ?? '/user.png'}
                alt="User"
              />
            </Avatar>
            <div>
              <p className="font-semibold text-sm">Your Name</p>
              <p className="text-xs text-muted-foreground">See your profile</p>
            </div>
          </Link>
        </DropdownMenuItem>
        {/* Line seperator */}
        <DropdownMenuSeparator className="my-2 mx-0" />

        {/* Logo out */}
        <DropdownMenuItem
          className="p-2 rounded-md w-full cursor-pointer"
          asChild
        >
          <button onClick={logout}>
            <div className="size-9 bg-gray-300 rounded-full flex items-center justify-center">
              <LogOut />
            </div>
            <p className="font-medium text-sm">Log out</p>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

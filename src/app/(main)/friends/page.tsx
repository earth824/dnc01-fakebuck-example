import FriendList from '@/components/features/friend/friend-list';
import { Button } from '@/components/ui/button';
import { friendService } from '@/lib/api/friend/friend.service';
import { Users } from 'lucide-react';
import Link from 'next/link';

export default async function FriendPage() {
  const friends = await friendService.get();

  if (friends.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <div className="mb-4 text-muted-foreground">
          <Users className="size-24 mx-auto opacity-40" />
        </div>
        <p className="text-muted-foreground font-medium">
          You don’t have any friends yet. Find people you may know.
          {/* No pending friend requests. */}
        </p>
        <div className="mt-4">
          <Button variant="outline" asChild>
            <Link href="/friends/find">Find Friends</Link>
          </Button>
        </div>
      </div>
    );

  return (
    <div className="p-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold">All Friends</h2>
      </div>
      <FriendList friends={friends} />
    </div>
  );
}

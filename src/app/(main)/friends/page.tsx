import FriendList from '@/components/features/friend/friend-list';
import { Users } from 'lucide-react';

export default function FriendPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8">
      <div className="mb-4 text-muted-foreground">
        <Users className="size-24 mx-auto opacity-40" />
      </div>
      <p className="text-muted-foreground font-medium">
        Select a section from the left to get started.
      </p>
    </div>
    // <FriendList />
  );
}

import FriendCard from '@/components/features/friend/friend-card';
import { User } from '@/lib/api/user/user.service';

type FriendListProps = {
  friends: User[];
};

export default function FriendList({ friends }: FriendListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
      {friends.map((user) => (
        <FriendCard key={user.id} {...user} />
      ))}
    </div>
  );
}

import FriendCard from '@/components/features/friend/friend-card';

export default function FriendList() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Friend Requests</h2>
      </div>

      {/* Card list */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </div>
    </div>
  );
}

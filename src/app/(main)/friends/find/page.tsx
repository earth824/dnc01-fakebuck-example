import FriendList from '@/components/features/friend/friend-list';

export default function FindFriendPage() {
  return (
    <div className="p-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold">People you may know</h2>
      </div>
      <FriendList />
    </div>
  );
}

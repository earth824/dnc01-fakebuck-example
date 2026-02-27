import FriendList from '@/components/features/friend/friend-list';

export default function IncomingRequestPage() {
  return (
    <div className="p-8">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Friend Requests</h2>
      </div>
      <FriendList />
    </div>
  );
}

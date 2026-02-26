import FriendSidebar from '@/components/layout/friend-sidebar';

export default function FriendsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <FriendSidebar />
      <main className="ml-90 flex-1 min-h-[calc(100vh-3.5rem)]">
        {children}
      </main>
    </div>
  );
}

import ProfileHeader from '@/components/features/profile/profile-header';

export default async function ProfilePage() {
  // return (
  //   <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)] text-muted-foreground">
  //     Failed to load profile.
  //   </div>
  // );

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      <ProfileHeader />
    </div>
  );
}

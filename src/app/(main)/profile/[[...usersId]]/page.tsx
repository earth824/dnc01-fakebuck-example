import ProfileHeader from '@/components/features/profile/profile-header';
import { userService } from '@/lib/api/user/user.service';
import { getAuthenticatedUser } from '@/lib/auth/session';
import { notFound } from 'next/navigation';

export default async function ProfilePage(
  props: PageProps<'/profile/[[...usersId]]'>
) {
  const params = await props.params;
  if (Array.isArray(params.usersId) && params.usersId.length > 1) notFound();

  const targetUserId = params.usersId
    ? params.usersId[0]
    : (await getAuthenticatedUser()).id;

  const targetUser = await userService.getUserProfile(targetUserId);
  // return (
  //   <div className="flex items-center justify-center min-h-[calc(100vh-3.5rem)] text-muted-foreground">
  //     Failed to load profile.
  //   </div>
  // );

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      <ProfileHeader {...targetUser} />
    </div>
  );
}

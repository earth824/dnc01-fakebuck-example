import ProfileAction from '@/components/features/profile/profile-action';
import ProfileAvatar from '@/components/features/profile/profile-avatar';
import ProfileCover from '@/components/features/profile/profile-cover';
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage
} from '@/components/ui/avatar';

import {
  RelationshipStatus,
  UserWithFriend
} from '@/lib/api/user/user.service';

type ProfileHeaderProps = {
  user: UserWithFriend;
  relationshipStatus: RelationshipStatus;
};

export default function ProfileHeader({
  user,
  relationshipStatus
}: ProfileHeaderProps) {
  return (
    <div className="bg-white shadow-sm">
      {/* Cover photo */}
      <ProfileCover
        coverUrl={user.coverUrl}
        canEdit={relationshipStatus === 'SELF'}
      />
      {/* Info bar */}
      <div className="max-w-260 mx-auto my-7 px-4">
        <div className="flex items-end justify-between pb-3">
          {/* Left: Avatar + Name */}
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <ProfileAvatar
              avatarUrl={user.avatarUrl}
              canEdit={relationshipStatus === 'SELF'}
            />

            {/* Name + friends */}
            <div className="">
              <h1 className="text-3xl font-bold">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-muted-foreground text-sm font-semibold py-1">
                {user.friends.length} friends
              </p>
              <AvatarGroup>
                <Avatar className="z-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="z-1">
                  <AvatarImage
                    src="https://github.com/maxleiter.png"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar className="z-0">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </div>
          </div>

          {/* Right: Action buttons */}
          <ProfileAction
            relationshipStatus={relationshipStatus}
            targetUserId={user.id}
          />
        </div>
      </div>
    </div>
  );
}

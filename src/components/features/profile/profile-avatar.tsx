import ImageUploadDialog from '@/components/shared/image-upload-dialog';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { uploadAvatar } from '@/lib/actions/profile.action';
import { User } from '@/lib/api/user/user.service';
import { Camera } from 'lucide-react';

type ProfileAvatarProps = {
  avatarUrl: User['avatarUrl'];
  canEdit: boolean;
};

export default function ProfileAvatar({
  avatarUrl,
  canEdit
}: ProfileAvatarProps) {
  return (
    <div className="relative">
      <Avatar className="size-42 border bg-muted">
        <AvatarImage src={avatarUrl ?? '/user.png'} alt="Avatar" />
      </Avatar>
      {canEdit && (
        <ImageUploadDialog
          trigger={
            <Button
              variant="outline"
              className="absolute bottom-3 right-2 size-9 rounded-full shadow"
            >
              <Camera className="w-4 h-4" />
            </Button>
          }
          title="Edit profile photo"
          imageClassName="size-42 mx-auto rounded-full"
          intialUrl={avatarUrl ?? '/user.png'}
          onUpload={uploadAvatar}
        />
      )}
    </div>
  );
}

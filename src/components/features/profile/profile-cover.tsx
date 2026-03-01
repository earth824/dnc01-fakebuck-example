import ImageUploadDialog from '@/components/shared/image-upload-dialog';
import { Button } from '@/components/ui/button';
import { uploadCover } from '@/lib/actions/profile.action';
import { User } from '@/lib/api/user/user.service';
import { Camera } from 'lucide-react';
import Image from 'next/image';

type ProfileCoverProps = {
  coverUrl: User['coverUrl'];
};

export default function ProfileCover({ coverUrl }: ProfileCoverProps) {
  return (
    <div className="relative aspect-1095/405 bg-muted overflow-hidden rounded-b-2xl max-w-273.75 mx-auto border">
      {coverUrl && (
        <Image src={coverUrl} alt="User cover" fill className="object-cover" />
      )}
      <ImageUploadDialog
        trigger={
          <Button
            variant="outline"
            className="absolute bottom-4 right-4 bg-background shadow font-semibold rounded-lg"
          >
            <Camera className="size-4" />
            Edit cover photo
          </Button>
        }
        intialUrl={coverUrl}
        title="Edit cover photo"
        imageClassName="aspect-1095/405"
        onUpload={uploadCover}
      />
    </div>
  );
}

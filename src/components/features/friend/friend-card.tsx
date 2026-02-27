import { Button } from '@/components/ui/button';

export default function FriendCard() {
  return (
    <div className="bg-background rounded-lg shadow-sm overflow-hidden w-full max-w-60 border">
      {/* Profile image */}
      <div className="relative aspect-square w-full">
        {/* <Image src="/default-user.png" alt="" fill className="object-cover" /> */}
        <div className="h-full bg-muted flex items-center justify-center"></div>
      </div>

      {/* Info + actions */}
      <div className="p-3">
        <p className="font-semibold text-sm leading-tight truncate">John Doe</p>

        <div className="flex flex-col gap-2 mt-3">
          <Button className="rounded-lg">Confirm</Button>
          <Button variant="outline" className="rounded-lg ">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

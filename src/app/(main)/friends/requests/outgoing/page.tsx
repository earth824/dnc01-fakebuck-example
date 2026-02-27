import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import Link from 'next/link';

export default function OutgoingRequestPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div className="mb-4 text-muted-foreground">
        <Users className="size-24 mx-auto opacity-40" />
      </div>
      <p className="text-muted-foreground font-medium">
        You haven’t sent any friend requests yet.
      </p>
      <div className="mt-4">
        <Button variant="outline" asChild>
          <Link href="/friends/find">Find Friends</Link>
        </Button>
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { FriendActionFn } from '@/lib/actions/action.type';
import { ReactNode, useTransition } from 'react';

type ActionButtonProps = {
  targetUserId: string;
  action: FriendActionFn;
  label: string;
  icon?: ReactNode;
  variant?: 'default' | 'outline';
};

export default function ActionButton({
  targetUserId,
  action,
  label,
  icon,
  variant
}: ActionButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await action(targetUserId);
    });
  };

  return (
    <Button
      className="font-semibold"
      onClick={handleClick}
      variant={variant}
      disabled={isPending}
    >
      {icon}
      {label}
    </Button>
  );
}

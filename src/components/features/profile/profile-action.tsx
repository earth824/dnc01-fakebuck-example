'use client';

import { Button } from '@/components/ui/button';
import { ActionResult } from '@/lib/actions/action.type';
import {
  cancelRequest,
  confirmRequest,
  rejectRequest,
  sendRequest,
  unfriend
} from '@/lib/actions/friend.action';
import { RelationshipStatus } from '@/lib/api/user/user.service';
import { Check, Plus, Trash2 } from 'lucide-react';

type ProfileActionProps = {
  targetUserId: string;
  relationshipStatus: RelationshipStatus;
};

type ActionFn = (id: string) => Promise<ActionResult>;

const actionMap: Record<
  Exclude<RelationshipStatus, 'SELF'>,
  {
    confirm?: {
      action: ActionFn;
      icon: React.ReactNode;
      label: string;
    };
    cancel?: {
      action: ActionFn;
      icon: React.ReactNode;
      label: string;
    };
  }
> = {
  NONE: {
    confirm: {
      action: sendRequest,
      icon: <Plus />,
      label: 'Add friend'
    }
  },
  FRIEND: {
    cancel: {
      action: unfriend,
      icon: <Trash2 />,
      label: 'Unfriend'
    }
  },
  REQUEST_SENT: {
    cancel: {
      action: cancelRequest,
      icon: <Trash2 />,
      label: 'Cancel request'
    }
  },
  REQUEST_RECEIVED: {
    confirm: {
      action: confirmRequest,
      icon: <Check />,
      label: 'Confirm'
    },
    cancel: {
      action: rejectRequest,
      icon: <Trash2 />,
      label: 'Delete'
    }
  }
};

export default function ProfileAction({
  relationshipStatus,
  targetUserId
}: ProfileActionProps) {
  if (relationshipStatus === 'SELF') return null;

  const { confirm, cancel } = actionMap[relationshipStatus] ?? {};

  return (
    <div className="flex items-center gap-2 pb-2">
      {confirm && (
        <Button
          className="font-semibold"
          onClick={() => confirm.action(targetUserId)}
        >
          {confirm.icon}
          {confirm.label}
        </Button>
      )}
      {cancel && (
        <Button
          variant="outline"
          className="font-semibold"
          onClick={() => cancel.action(targetUserId)}
        >
          {cancel.icon}
          {cancel.label}
        </Button>
      )}
    </div>
  );
}

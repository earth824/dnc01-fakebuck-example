'use server';

import { ActionResult } from '@/lib/actions/action.type';
import { handleActionError } from '@/lib/actions/utils';
import { userService } from '@/lib/api/user/user.service';
import { unstable_update } from '@/lib/auth/auth';
import { revalidatePath } from 'next/cache';

export const uploadCover = async (file: File): Promise<ActionResult> => {
  const data = new FormData();
  data.append('cover', file);
  try {
    await userService.uploadCover(data);
    revalidatePath('/profile');
    return { success: true };
  } catch (error) {
    return handleActionError(error);
  }
};

export const uploadAvatar = async (file: File): Promise<ActionResult> => {
  const data = new FormData();
  data.append('avatar', file);
  try {
    const avatarUrl = await userService.uploadAvatar(data);
    await unstable_update({ user: { avatarUrl } });
    return { success: true };
  } catch (error) {
    return handleActionError(error);
  }
};

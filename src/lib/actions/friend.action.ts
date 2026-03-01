'use server';

import { ActionResult } from '@/lib/actions/action.type';
import { friendRequestService } from '@/lib/api/friend/friend-request.service';
import { friendService } from '@/lib/api/friend/friend.service';
import { revalidatePath } from 'next/cache';

export const sendRequest = async (
  targetUserId: string
): Promise<ActionResult> => {
  try {
    await friendRequestService.send(targetUserId);
    revalidatePath('/profile/' + targetUserId);
    return { success: true };
  } catch {
    return { success: false };
  }
};

export const cancelRequest = async (
  targetUserId: string
): Promise<ActionResult> => {
  try {
    await friendRequestService.cancel(targetUserId);
    revalidatePath('/profile/' + targetUserId);
    return { success: true };
  } catch {
    return { success: false };
  }
};

export const unfriend = async (targetUserId: string): Promise<ActionResult> => {
  try {
    await friendService.unfriend(targetUserId);
    revalidatePath('/profile/' + targetUserId);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const confirmRequest = async (
  targetUserId: string
): Promise<ActionResult> => {
  try {
    await friendRequestService.confirm(targetUserId);
    revalidatePath('/profile/' + targetUserId);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const rejectRequest = async (
  targetUserId: string
): Promise<ActionResult> => {
  try {
    await friendRequestService.reject(targetUserId);
    revalidatePath('/profile/' + targetUserId);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

import { ErrorActionResult } from '@/lib/actions/action.type';
import { ApiError } from '@/lib/api/api-response.type';

export const handleActionError = (error: unknown): ErrorActionResult => {
  if (error instanceof ApiError) {
    return {
      success: false,
      ...error
    };
  }
  return { success: false };
};

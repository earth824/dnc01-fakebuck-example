import { ErrorActionResult } from '@/lib/actions/action.type';
import { ApiError } from '@/lib/api/api-response.type';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export const handleActionError = (error: unknown): ErrorActionResult => {
  if (isRedirectError(error)) throw error;
  if (error instanceof ApiError) {
    return {
      success: false,
      ...error
    };
  }
  return { success: false };
};

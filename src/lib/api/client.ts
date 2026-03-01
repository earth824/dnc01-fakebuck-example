import { serverEnv } from '@/config/server.env';
import { ApiError } from '@/lib/api/api-response.type';
import { auth } from '@/lib/auth/auth';

// const TOKEN_ERROR_CODES = ['TOKEN_EXPIRED', 'INVALID_TOKEN'];

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: unknown;
  cache?: RequestCache;
};

const API_URL = serverEnv.API_URL;

async function apiFetch<T = void>(
  endpoint: string,
  options: RequestOptions = {}
) {
  const session = await auth();

  const { method = 'GET', body, cache } = options;

  const headers: Record<string, string> = {};
  if (session?.user?.accessToken)
    headers.Authorization = `Bearer ${session?.user?.accessToken}`;
  if (body && !(body instanceof FormData)) {
    headers['Content-type'] = 'application/json';
  }

  const config: RequestInit = {
    method,
    headers,
    body: body
      ? body instanceof FormData
        ? body
        : JSON.stringify(body)
      : undefined,
    cache
  };

  const res = await fetch(`${API_URL}${endpoint}`, config);

  if (!res.ok) {
    const err = await res.json();
    throw new ApiError(err.message, err.code);
  }

  return (await res.json()).data as T;
}

export const api = {
  get: <T>(url: string) => apiFetch<T>(url),
  post: <T>(url: string, body?: unknown) =>
    apiFetch<T>(url, { body, method: 'POST' }),
  put: <T>(url: string, body?: unknown) =>
    apiFetch<T>(url, { body, method: 'PUT' }),
  patch: <T>(url: string, body?: unknown) =>
    apiFetch<T>(url, { body, method: 'PATCH' }),
  delete: <T>(url: string) => apiFetch<T>(url, { method: 'DELETE' })
};

import { serverEnv } from '@/config/server.env';

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: unknown;
  cache?: RequestCache;
};

const API_URL = serverEnv.API_URL;

async function apiFetch<T = unknown>(
  endpoint: string,
  options: RequestOptions = {}
) {
  const { method = 'GET', body, cache } = options;

  const headers: Record<string, string> = {};
  // if (token) headers.Authorization = `Bearer ${token}`;
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
    throw new Error('API ERROR');
  }

  return (await res.json()) as T;
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

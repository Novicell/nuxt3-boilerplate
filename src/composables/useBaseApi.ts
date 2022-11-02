import { FetchOptions } from 'ohmyfetch';

export async function UseBaseApi<T> (path: string, opt: FetchOptions = {}) {
  const config = useRuntimeConfig().public;
  const headers: any = {};

  return await $fetch<T>(path, {
    headers,
    baseURL: config.apiBase,
    cache: 'no-cache',
    keepalive: true,
    ...opt
  });
}

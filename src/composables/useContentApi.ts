import { useRoot } from '~~/stores/root';
import { ContentResponse } from '~~/types';

export default function () {
  const getContent = (path: string) => {
    return UseBaseApi<ContentResponse>('/api/content', {
      params: {
        path
      },
      keepalive: true,
      // eslint-disable-next-line require-await
      async onResponse () {
        useRoot().setValue('API value');
      }
    });
  };

  return {
    getContent
  };
};

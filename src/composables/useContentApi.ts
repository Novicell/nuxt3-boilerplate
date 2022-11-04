import { ContentResponse } from '~~/types';

export default function () {
  const getContent = (path: string) => {
    return UseBaseApi<ContentResponse>('/api/content', {
      params: {
        path
      },
      keepalive: true
    });
  };

  return {
    getContent
  };
};

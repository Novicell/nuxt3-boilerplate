import { ContentResponse } from '~~/types';

export default function () {
  const getContent = (path: string) => {
    return UseBaseApi<ContentResponse>('/api/content', {
      params: {
        path
      },
      keepalive: true,
    });
  };
  const getNavigation = () => {
    return UseBaseApi<any[]>('/api/navigation', {
      keepalive: true,
    });
  };

  return {
    getContent,
    getNavigation
  };
};

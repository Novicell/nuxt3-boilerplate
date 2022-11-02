import { ContentResponse } from '~~/types';

export default defineEventHandler((event) => {
  const { path } = useQuery(event);
  const mockData: ContentResponse[] = [
    {
      alias: 'frontpage',
      content: {
        blocks: [
          {
            alias: 'rte',
            content: {
              text: '<h1 style="text-align: center;">Welcome to the Novicell Nuxt 3 Boilerplate!</h1>'
            }
          }
        ]
      },
      metadata: {
        statusCode: 200,
        redirectUrl: null,
        path: '/'
      }
    },
    {
      alias: 'pagedefault',
      content: {
        blocks: [
          {
            alias: 'rte',
            content: {
              text: '<h1 style="text-align: center;">This is a default text page.</h1>'
            }
          }
        ]
      },
      metadata: {
        statusCode: 200,
        redirectUrl: null,
        path: '/default'
      }
    }
  ];

  return mockData.find(x => x.metadata.path === path) || {
    alias: null,
    content: {},
    metadata: {
      statusCode: 404,
      redirectUrl: null,
      path: null
    }
  };
});


export default defineEventHandler(() => {
  const navigation = [{
    name: 'Frontpage',
    url: '/'
  }, {
    name: 'Default',
    url: '/default'
  }, {
    name: 'Default 2',
    url: '/default2'
  }, {
    name: '404',
    url: '/gibbish'
  }].sort(() => Math.random() - 0.5);
  return navigation
});


export default defineEventHandler(() => {
  const navigation = ['/', '/default', '/default2'].sort(() => Math.random() - 0.5);
  return navigation
});

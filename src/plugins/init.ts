import { useRoot } from '~~/stores/root';

export default defineNuxtPlugin(async (nuxtApp) => {
  if (!process.server) {
    return;
  }
  try {
    await useRoot().init();
  } catch (error) {
    console.error('Failure on server init', error);
  }
});

import useTranslation from '~~/composables/useTranslation';
import translations from '~/locales/da.yaml';

export default defineNuxtPlugin(() => {
  const { $t } = useTranslation(translations);
  return {
    provide: {
      t: $t
    }
  };
});

import { defineSetupVue3 } from '@histoire/plugin-vue';
import useTranslation from '~~/composables/useTranslation';
import translations from '~/locales/da.yaml';

export const setupVue3 = defineSetupVue3(({ app }) => {
  const { $t } = useTranslation(translations);

  // Provide translations
  app.config.globalProperties.$t = (key, replacements) => $t(key, replacements);
});

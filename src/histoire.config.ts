import { defineConfig, defaultColors } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';
import { HstNuxt } from '@histoire/plugin-nuxt';

export default defineConfig({
  setupFile: './histoire.setup.ts',
  routerMode: 'hash',
  plugins: [
    HstVue(),
    HstNuxt()
  ],
  vite: {
    server: {
      port: 6006
    }
  },
  theme: {
    logoHref: '/',
    favicon: './favicon.ico',
    colors: {
      gray: defaultColors.stone,
      primary: defaultColors.gray
    }
  },
  tree: {
    file: ({ title, path }) => {
      if (path.includes('tokens')) {
        return title.split('/');
      } else {
        const fileName = path.substring(path.lastIndexOf('/') + 1);
        return path.replace('stories/', '').replace(fileName, title).split('/');
      }
    },
    groups: [
      {
        id: 'top',
        title: '',
        include: file => file.path.includes('DesignSystem')
      },
      {
        title: 'Components',
        include: file => !file.path.includes('DesignSystem')
      }
    ]
  }
});

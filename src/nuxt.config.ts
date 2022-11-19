import { defineNuxtConfig } from 'nuxt/config';
import postcssConfig from '@novicell/postcss-config';
import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '',
      websiteBase: ''
    }
  },
  meta: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-icons',
    '@vueuse/nuxt',
    '@nuxt/image-edge'
  ],
  image: {
    providers: {
      customProvider: {
        name: 'imageSharp',
        provider: '~/providers/imageSharp'
      }
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  },
  components: [
    '~/components',
    '~/components/global',
    '~/components/views',
    '~/components/blocks',
    '~/components/blocklist'
  ],
  build: {
    extractCSS: true
  },
  css: ['/assets/css/app.css'],
  postcss: {
    config: false,
    plugins: {
      ...postcssConfig({
        'postcss-preset-env': {
          stage: 2,
          preserve: true
        }
      }),
      'postcss-fluid': {
        min: '375px',
        max: '1224px',
        functionName: 'fluid'
      }
    }
  },
  vite: {
    plugins: [
      ViteYaml()
    ]
  }
});

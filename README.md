# Nuxt 3 Boilerplate

![Nuxt version](https://img.shields.io/badge/Nuxt%20version-3.2.2-3643B3)
![Node version](https://img.shields.io/badge/Node%20version-16.12.0-026E00)

Demo: https://novicell-nuxt3-boilerplate.netlify.app

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Stack
- Nuxt 3
- TypeScript
- Vite
- PostCSS

# Practical information
The project is built with Nuxt3, it uses Pinia as state management and Histoire as design system. Furthermore the https://vueuse.org/core/ is installed, so please use the composables from here instead of building everything from scratch.

## Setup
Make sure that your IDE is ready:
https://v3.nuxtjs.org/getting-started/quick-start

Create a `.env` file by copying the `.env.example` file

```bash
cp .env.example .env
```

Make sure to install the dependencies:

```bash
npm i
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Other commands

```bash
# Linters
$ npm run eslint // Run ESLint
$ npm run eslint:fix // Run ESLint and fix fixable issues

$ npm run stylelint // Run Stylelint
$ npm run stylelint:fix // Run Stylelint and fix fixable issues

$ npm run lint // Run all linters
$ npm run lint:fix // Run all linters fix fixable issues

# Histoire
$ npm story:dev // Run Histoire
$ npm story:build // Build Histoire
$ npm story:preview // Preview Histoire
```

## Docker

The application is setup to run on Docker when deploying it to production. To run a production build on local make sure to first have Docker Desktop installed

After that run the docker-compose command in root dir

```
docker-compose up --build
```

The site will when be available on http://localhost:3001

## Extra features

### Nuxt Image
This project uses [Nuxt Image Edge](https://v1.image.nuxtjs.org) for rendering images using a custom provider for supporting Image Sharp wrapped in a base component.
```html
  <BaseImage
    src="https://cdn.novicell.com/media/media/gmla14tz/saelger-samtale-jan-overgaard-kenneth-mansgaard-anders-thorup-nilsson-adam-peter-nielsen.jpg"
    :modifiers="{ mode: 'crop'}"
    height="500"
    sizes="xl:100vw"
  />
```
For more information, please read the docs: https://v1.image.nuxtjs.org/components/nuxt-img

### Nuxt Icons
We use [Nuxt Icons](https://github.com/gitFoxCode/nuxt-icons) for loading in icons which inlines the SVG code at build time. 
```html
  <NuxtIcon name="novicell" />
```

### Translations
Most of the websites we build only has a single language, which means that it's not necessary to use a big i18n library. We therefore built a custom i18n module that simply loads translations from a YAML file located at `locales/da.yaml`. We mocked the same syntax as other i18n plugins which means that it should be easy to switch it out with an official library if needed.

Translations
```yaml
ErrorMessages:
  Generic: An error occurred
```

Rendering
```html
<p>{{ $t('ErrorMessages.Generic') }}</p>
```


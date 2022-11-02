import { joinURL, encodeParam } from 'ufo';
import type { ProviderGetImage } from '@nuxt/image-edge/dist/module';
import { createOperationsGenerator } from '@nuxt/image-edge/dist/runtime/utils';

const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: 'format',
    width: 'width',
    height: 'height',
    quality: 'quality',
    mode: 'rmode',
    center: 'rxy',
    background: 'bgcolor'
  },
  joinWith: '&',
  formatter: (key, val) => encodeParam(key) + '=' + encodeParam(val)
});

// import {} from '#image'
export const getImage: ProviderGetImage = (src, { modifiers } = {}) => {
  const params = operationsGenerator(modifiers) || '';

  return {
    url: joinURL(src + (params ? ('?' + params) : ''))
  };
};

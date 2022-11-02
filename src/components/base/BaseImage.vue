<script setup lang="ts">

/* eslint-disable vue/require-default-prop */
const props = withDefaults(defineProps<{
  src: string;
  format?: string;
  quality?: string | number;
  background?: string;
  fit?: string;
  modifiers?: any;
  preset?: string;
  provider?: string;
  sizes?: string;
  preload?: boolean;
  width?: string | number;
  height?: string | number;
  alt?: string;
  referrerpolicy?: string;
  crossorigin?: 'anonymous' | 'use-credentials' | '';
  loading?: string,
  decoding?: 'async'| 'auto'| 'sync'
}>(), {
  quality: 80,
  provider: 'imageSharp',
  loading: 'lazy'
});
let sizes;

if (props.sizes) {
  sizes = {};
  const screens = useNuxtApp().$img.options.screens;
  if (typeof props.sizes === 'string') {
    for (const entry of props.sizes.split(/[\s,]+/).filter(e => e)) {
      const s = entry.split(':');
      if (s.length !== 2) { continue; }
      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, props.sizes);
  }

  const maxSizeIndex = Object.keys(sizes).reduce((maxIndex, key) => {
    const index = Object.keys(screens).indexOf(key);

    if (index > maxIndex) {
      maxIndex = index;
    }

    return maxIndex;
  }, 0);

  Object.keys(screens).forEach((key, index) => {
    if (index < maxSizeIndex && !sizes[key]) {
      sizes[key] = '100vw';
    }
  });
}

const defaultProps = reactive({
  ...props,
  sizes
});
</script>

<template>
  <NuxtImg v-bind="defaultProps" />
</template>

<style lang="postcss" scoped>
  img {
    display: block;
    max-width: 100%;
    height: auto;
    max-height: 100%;
  }
</style>

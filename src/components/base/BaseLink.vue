
<script setup lang="ts">

const props = withDefaults(defineProps<{
  to: string;
}>(), {
  to: ''
});

</script>
<template>
  <NuxtLink :to="props.to">
    <slot></slot>
  </NuxtLink>
</template>

<style lang="postcss" scoped>
  a {
    color: var(--color-text);
    font-size: var(--base-font-size);
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  a:hover { text-decoration: underline; }

</style>

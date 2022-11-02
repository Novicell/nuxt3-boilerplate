<script lang="ts" setup>
const props = defineProps<{
  to?: string;
  modifiers?: string[];
}>();

const buttonClasses = computed(() => {
  return props.modifiers
    ? props.modifiers.map(x => `button--${x}`).join(' ')
    : '';
});
</script>
<template>
  <NuxtLink v-if="props.to" :to="props.to">
    <button class="button" :class="`${buttonClasses}`">
      <slot></slot>
    </button>
  </NuxtLink>
  <button v-else class="button" :class="`${buttonClasses}`">
    <slot></slot>
  </button>
</template>

<style scoped lang="postcss">
.button {
  display: block;
  min-width: 150px;
  padding: 14px;
  color: var(--color-white);
  font-size: var(--base-font-size);
  font-family: var(--base-font-family);
  background-color: var(--color-primary);
  border: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover { box-shadow: var(--css-utils-box-shadow); }

  &[disabled] {
    color: var(--color-gray-60);
    background-color: var(--color-gray-30);
    cursor: not-allowed;
  }
}

a {
  display: block;
  color: white;
  text-decoration: none;
}
</style>

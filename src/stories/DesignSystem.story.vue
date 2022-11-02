<script lang="ts" setup>
import Colors from './design-system/Colors.vue';
import Typography from './design-system/Typography.vue';
import Icons from './design-system/Icons.vue';
import Buttons from './design-system/Buttons.vue';
const iconColor = ref('');
</script>
<template>
  <Story
    class="htw-overflow-hidden"
    icon="carbon:color-palette"
    icon-color="#42b883"
    title="Design System"
    :responsive-disabled="true"
    :layout="{ type: 'single', iframe: true }"
  >
    <Variant title="Colors" icon="carbon:color-palette">
      <Colors />
    </Variant>
    <Variant title="Typography" icon="carbon:text-font">
      <Typography />
    </Variant>
    <Variant title="Buttons" icon="carbon:button-centered">
      <Buttons />
    </Variant>
    <Variant title="Icons" icon="carbon:edit">
      <Icons :style="{color: iconColor}" />
      <template #controls>
        <label class="htw-p-2 hover:htw-bg-primary-100 dark:hover:htw-bg-primary-800 htw-flex htw-gap-2 htw-flex-wrap htw-cursor-text htw-items-center">
          <span class="htw-w-28 htw-whitespace-nowrap htw-text-ellipsis htw-overflow-hidden htw-shrink-0">Icon color</span>
          <span class="htw-grow htw-flex htw-items-center htw-gap-1">
            <input v-model="iconColor" type="color" />
          </span>
        </label>
      </template>
    </Variant>
  </Story>
</template>

<style lang="postcss" scoped>
.colors {
  overflow: hidden;

  &__item-bg { padding-bottom: 100%; }
}
</style>

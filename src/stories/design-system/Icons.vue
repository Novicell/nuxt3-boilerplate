<script lang="ts" setup>
// import { NuxtIcons } from '~~/.nuxt/nuxticons.mjs';

const iconsList: any = []; // Object.keys(NuxtIcons);

const toFirstUpper = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
</script>
<template>
  <div class="icons">
    <div class="row">
      <div
        v-for="icon in iconsList"
        :key="icon"
        class="col-xs-6 col-sm-3 col-md-2 mb-4"
      >
        <div class="p-2 pb-4 h-100 bg-gray-light">
          <div class="icons__item p-relative bg-white">
            <NuxtIcon class="icons__item-icon p-absolute" :name="icon" />
          </div>
          <strong class="icons__text text-body d-block py-2">
            {{ toFirstUpper(icon.replace(/-/g, ' ')) }}
          </strong>
          <small class="icons__text d-block text-gray-dark">{{ icon }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.icons {
  overflow: hidden;

  &__text {
    font-size: 14px;
    font-family: sans-serif;
  }

  &__item { padding-bottom: 100%; }

  &__item-icon {
    top: 50%;
    left: 50%;
    font-size: 40px;
    transform: translate(-50%, -50%);
  }
}
</style>

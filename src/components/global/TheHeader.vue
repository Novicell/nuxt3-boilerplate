<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoot } from '~~/stores/root';

const { navigation } = storeToRefs(useRoot());
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <div class="header__logo">
        <NuxtIcon class="header__logo-icon" name="novicell" />
        Nuxt 3 boilerplate
      </div>

      <div class="navigation">
        <BaseLink class="navigation__item" :to="item.url" v-for="item in navigation">{{ item.name }}</BaseLink>
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: var(--color-white);
  box-shadow: var(--css-utils-box-shadow-sm);

  &__inner {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
  }

  &__logo-icon {
    margin-right: 8px;
    color: var(--color-primary);
    font-size: 32px;
  }
}

.navigation {
  display: flex;
  align-items: center;
  margin-left: 16px;

  &__item {
    padding: 0 16px;
    font-size: 16px;

    &:hover {
      color: var(--color-primary);
      text-decoration: none;
    }
  }
}
</style>

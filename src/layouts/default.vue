<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoot } from '~/stores/root';

const { myReactiveValue } = storeToRefs(useRoot());
console.log(myReactiveValue.value);
</script>

<template>
  <div>
    <TheHeader />
    <div class="container h1">
      {{ myReactiveValue }}
    </div>
    <slot></slot>
    <TheFooter />
  </div>
</template>

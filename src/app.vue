<script setup>
import { useRoot } from '~~/stores/root';
const root = useRoot();

definePageMeta({
  key: route => route.slug
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

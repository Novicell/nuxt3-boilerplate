<script setup>
definePageMeta({
  key: route => route.slug
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

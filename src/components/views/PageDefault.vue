<script setup lang="ts">
const props = defineProps<{
  content: any
}>();

const blocks = computed(() => {
  return props.content.blocks || {};
});
</script>
<template>
  <div class="container">
    <BlockList v-if="blocks" :blocks="blocks" />
  </div>
</template>

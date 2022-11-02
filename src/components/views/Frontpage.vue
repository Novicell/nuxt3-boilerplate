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
    <BaseImage
      src="https://cdn.novicell.com/media/media/gmla14tz/saelger-samtale-jan-overgaard-kenneth-mansgaard-anders-thorup-nilsson-adam-peter-nielsen.jpg"
      :modifiers="{ mode: 'crop'}"
      height="500"
      sizes="xl:100vw"
    />
    <BlockList v-if="blocks" :blocks="blocks" />
  </div>
</template>

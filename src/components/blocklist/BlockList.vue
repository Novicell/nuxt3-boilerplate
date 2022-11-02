<script setup lang="ts">

interface Props {
  blocks?: any
}
defineProps<Props>();
</script>

<template>
  <BlockListItem v-for="(block, index) in blocks" :key="index" :block="block"> {{ block.alias }} </BlockListItem>
</template>

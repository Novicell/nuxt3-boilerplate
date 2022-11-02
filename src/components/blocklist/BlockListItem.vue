<script setup lang="ts">
const RichTextEditorBlock = resolveComponent('LazyRichTextEditorBlock');

const props = defineProps<{
  block?: any
}>();

const viewTemplate = computed(() => {
  let view = null;
  if (!props.block.alias) {
    // eslint-disable-next-line no-console
    console.error('No alias provided');
    return view;
  }
  const { alias } = props.block;
  switch (alias) {
    case 'rte':
      view = RichTextEditorBlock;
      break;
    default:
      // eslint-disable-next-line no-console
      console.error(`No render found for: ${alias}`);
      break;
  }
  return view;
});
</script>

<template>
  <Component :is="viewTemplate" v-if="viewTemplate" :data="props.block" />
</template>

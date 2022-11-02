<script setup lang="ts">
const props = defineProps<{
  data: any
}>();

</script>
<template>
  <div v-if="props.data.content.text" class="row">
    <BaseRte :content="props.data.content.text" class="col-xs-12 col-md-8 col-md-offset-2" />
  </div>
</template>

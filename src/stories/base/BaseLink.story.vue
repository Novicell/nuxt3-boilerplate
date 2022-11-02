<script lang="ts" setup>
function initState () {
  return {
    title: 'Link',
    url: '#'
  };
}
</script>
<template>
  <Story title="Link">
    <Variant title="Link" :init-state="initState">
      <template #default="{ state }">
        <BaseLink
          :url="state.url"
        >
          {{ state.title }}
        </BaseLink>
      </template>
    </Variant>
  </Story>
</template>

<script lang="ts" setup>
const items: any = reactive([
  {
    name: 'Button primary',
    types: [
      {
        text: 'Primary',
        desc: 'Primary button',
        props: {}
      },
      {
        text: 'Disabled',
        desc: 'Primary button disabled',
        props: {
          disabled: true
        }
      }
    ]
  }
]);
</script>
<template>
  <div class="buttons">
    <div v-for="item in items" :key="item.key" class="mb-4">
      <h4 class="buttons__text mb-2">{{ item.name }}</h4>
      <div
        v-for="type in item.types"
        :key="type.key"
        class="d-inline-block mr-6"
      >
        <BaseButton v-bind="type.props">
          {{ type.text }}
        </BaseButton>
        <small class="d-block text-gray-dark text-center mt-1">{{
          type.desc
        }}</small>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.buttons {
  &__text { font-size: 24px; }
}
</style>

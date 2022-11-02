<script lang="ts" setup>
const items: any = reactive([
  {
    name: 'Font families',
    types: [
      {
        tag: 'h1',
        desc: 'Serif'
      },
      {
        tag: 'h1',
        desc: 'Sans Serif',
        class: 'text-sans-serif'
      }
    ]
  },
  {
    name: 'Font sizes',
    types: [
      {
        tag: 'small',
        desc: 'small'
      },
      {
        tag: 'p',
        desc: 'p'
      },
      {
        tag: 'h6',
        desc: 'h6'
      },
      {
        tag: 'h5',
        desc: 'h5'
      },
      {
        tag: 'h4',
        desc: 'h4'
      },
      {
        tag: 'h3',
        desc: 'h3'
      },
      {
        tag: 'h2',
        desc: 'h2'
      },
      {
        tag: 'h1',
        desc: 'h1'
      },
      {
        tag: 'h1',
        desc: 'display-1',
        class: 'display-1'
      }
    ]
  },
  {
    name: 'Font weights',
    types: [
      {
        tag: 'p',
        style: 'font-weight: lighter;',
        desc: 'lighter'
      },
      {
        tag: 'p',
        style: 'font-weight: light;',
        desc: 'light'
      },
      {
        tag: 'p',
        style: 'font-weight: normal;',
        desc: 'normal'
      },
      {
        tag: 'p',
        style: 'font-weight: bold;',
        desc: 'bold'
      },
      {
        tag: 'p',
        style: 'font-weight: bolder;',
        desc: 'bolder'
      }
    ]
  },
  {
    name: 'Font styles',
    types: [
      {
        tag: 'a',
        desc: 'link'
      },
      {
        tag: 'p',
        style: 'font-style: normal;',
        desc: 'normal'
      },
      {
        tag: 'p',
        style: 'font-style: italic;',
        desc: 'italic'
      },
      {
        tag: 'p',
        style: 'font-style: oblique;',
        desc: 'oblique'
      },
      {
        tag: 'p',
        style: 'text-decoration: underline;',
        desc: 'underline'
      },
      {
        tag: 'p',
        style: 'text-decoration: overline;',
        desc: 'overline'
      },
      {
        tag: 'p',
        style: 'text-decoration: line-through;',
        desc: 'line-through'
      },
      {
        tag: 'p',
        style: 'text-transform: uppercase;',
        desc: 'uppercase'
      }
    ]
  }
]);
</script>
<template>
  <div class="typography">
    <div v-for="item in items" :key="item.key" class="mb-4">
      <h4 class="typography__text mb-2">{{ item.name }}</h4>
      <div class="bg-gray-light p-4">
        <div v-for="(type, index) in item.types" :key="type.key" :class="index + 1 === item.types.length ? 'mb-0' : 'mb-3'">
          <component :is="type.tag" class="m-0" :style="type.style" :class="type.class">
            Almost before we knew it, we had left the ground.
          </component>
          <small class="d-block text-gray-dark">{{ type.desc }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.typography {
  &__text { font-size: 24px; }
}
</style>

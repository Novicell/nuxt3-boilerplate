<script setup lang="ts">

</script>

<template>
  <header class="footer">
    <div class="footer__inner">
      <p>Footer</p>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: var(--color-gray-70);
  background-color: var(--color-white);
  box-shadow: var(--css-utils-box-shadow-sm);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 20px;
  }

  p { font-size: var(--font-size-medium); }
}
</style>

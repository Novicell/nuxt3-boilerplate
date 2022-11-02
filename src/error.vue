<script setup lang="ts">
const props = defineProps<{
  error: any;
}>();

const handleError = () => clearError({ redirect: '/' });

// Set SEO tags
useHead({
  title: props.error?.statusCode
});
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="container">
        <div class="d-flex align-items-center flex-column">
          <h1 class="mb-0">{{ error?.statusCode }}</h1>
          <p class="mb-4">{{ $t('ErrorMessages.Generic') }}</p>
          <BaseButton @click="handleError">{{ $t('ErrorMessages.GoToFrontpage') }}</BaseButton>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

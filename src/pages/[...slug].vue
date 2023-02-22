<script lang="ts" setup>
// Register views
const FrontPage = resolveComponent('LazyFrontpage');
const PageDefault = resolveComponent('LazyPageDefault');

// Fetch data from API
const { fullPath } = useRoute();
const { getContent } = useContentApi();
const encodedPath = encodeURIComponent(fullPath);
const { data, error } = await useAsyncData(
  encodedPath,
  () => getContent(fullPath)
);

// Handle API error
// Handle API error
if (!data.value?.metadata?.statusCode || error.value) {
  throw createError({
    statusCode: 500,
    fatal: true,
    data: {
      error: error.value,
      fullPath,
      meta: data.value?.metadata
    }
  });
}

// Handle Redirect
if (data.value.metadata.statusCode > 300 && data.value.metadata.statusCode < 400) {
  const redirect = data.value.metadata?.redirectUrl || '/';
  navigateTo(redirect, { redirectCode: 302 });
}

// Handle 404
if (!data.value?.metadata || data.value.metadata.statusCode === 404) {
  throw showError({
    statusCode: 404,
    fatal: false
  });
}

const viewTemplate = computed(() => {
  let view = null;
  if (!data.value) {
    return view;
  }
  const { alias } = data.value;
  switch (alias) {
    case 'frontpage':
      view = FrontPage;
      break;
    case 'pagedefault':
      view = PageDefault;
      break;

    default:
      break;
  }
  return view;
});

</script>
<template>
  <div>
    <Component :is="viewTemplate" v-if="viewTemplate" :key="$route.path" :content="data?.content" />
  </div>
</template>

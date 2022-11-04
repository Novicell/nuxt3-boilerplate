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
  () => getContent(fullPath),
  {
    initialCache: false
  }
);

// Handle API error
if (error.value) {
  throwError({
    statusCode: 500
  });
}

// Handle Redirect
if (data.value.metadata.statusCode > 300 && data.value.metadata.statusCode < 400) {
  navigateTo(data.value.metadata.redirectUrl || '/', { redirectCode: 302 });
}

// Handle 404
if (!data.value?.metadata || data.value.metadata.statusCode === 404) {
  throwError({
    statusCode: 404
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

<script setup lang="ts">
defineProps<{
  content: string
}>();

const router = useRouter();
const rteEl = ref(null);
let _links!: any;

onMounted(async () => {
  await nextTick();
  addListeners();
});

onBeforeUnmount(() => {
  removeListeners();
});

const navigate = (event: any) => {
  let { target } = event;
  let i: number = 0;

  // Go throught 5 parents max to find a tag
  while (i < 5 && !(target instanceof HTMLAnchorElement) && target.parentNode) {
    target = target.parentNode;
    i++;
  }

  if (!(target instanceof HTMLAnchorElement)) { return; }

  const href = target.getAttribute('href');
  const linkTarget = target.getAttribute('target');
  if (target.hash) {
    event.preventDefault();
  }

  // Get link target, if local link, navigate with router link
  if (href && href[0] === '/' && linkTarget !== '_blank') {
    event.preventDefault();

    router.push(href);
  }
};

const addListeners = () => {
  _links = rteEl.value.getElementsByTagName('a');
  for (let i = 0; i < _links.length; i++) {
    _links[i].addEventListener('click', navigate, false);
  }
};

const removeListeners = () => {
  if (!_links) {
    return;
  }
  for (let i = 0; i < _links.length; i++) {
    _links[i].removeEventListener('click', navigate, false);
  }
  _links = [];
};
</script>

<template>
  <div ref="rteEl" v-html="content">
  </div>
</template>

import { acceptHMRUpdate, defineStore } from 'pinia';

export const useRoot = defineStore('root', () => {
  const myReactiveValue = ref<string[]>([]);
  const myComputedValue = computed(() => {
    return myReactiveValue.value.length + Math.random();
  });

  async function init () {
    try {
      const { getNavigation } = useContentApi();
      const navigation = await getNavigation();
      myReactiveValue.value = navigation;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    myReactiveValue,
    myComputedValue,
    init
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRoot, import.meta.hot));
}

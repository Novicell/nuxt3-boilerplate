import { acceptHMRUpdate, defineStore } from 'pinia';

export const useRoot = defineStore('root', () => {
  const navigation = ref<any[]>([]);
  const myComputedValue = computed(() => {
    return navigation.value.length + Math.random();
  });

  async function init () {
    try {
      const { getNavigation } = useContentApi();
      const data = await getNavigation();
      navigation.value = data;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    navigation,
    myComputedValue,
    init
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRoot, import.meta.hot));
}

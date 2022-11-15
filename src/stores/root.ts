import { acceptHMRUpdate, defineStore } from 'pinia';

export const useRoot = defineStore('root', () => {
  const myReactiveValue = ref('initialValue');
  const myComputedValue = computed(() => {
    return myReactiveValue.value + Math.random();
  });

  function setValue (value: string) {
    myReactiveValue.value = value;
  }

  return {
    myReactiveValue,
    myComputedValue,
    setValue
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRoot, import.meta.hot));
}

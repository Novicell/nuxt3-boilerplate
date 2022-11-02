<script lang="ts" setup>
  const colors: any = reactive([]);
  const hasColors = ref(false);

  function getAllCssColorVariableNames(styleSheets: any = document.styleSheets) {
    if (process.client) {
      const cssVars: any = [];
      // loop each stylesheet
      for (let i = 0; i < styleSheets.length; i++) {
        // loop stylesheet's cssRules
        try {
          // try/catch used because 'hasOwnProperty' doesn't work
          for (let j = 0; j < styleSheets[i].cssRules.length; j++) {
            try {
              // loop stylesheet's cssRules' style (property names)
              for (
                let k = 0;
                k < styleSheets[i].cssRules[j].style?.length;
                k++
              ) {
                const name = styleSheets[i].cssRules[j].style[k];
                // test name for css variable signiture and uniqueness
                if (name.startsWith('--color') && !cssVars.includes(name)) {
                  cssVars.push(name);
                }
              }
            } catch (error) {
              console.error(error as any);
            }
          }
        } catch (error) {
          console.error(error as any);
        }
      }
      return cssVars;
    }

    return [];
  }

  const toFirstUpper = (name: string) => {
    return name.charAt(1).toUpperCase() + name.slice(2);
  }
  
  onMounted(() => {
    const colorVariables = getAllCssColorVariableNames();
    colorVariables.forEach((colorVariable: string) => {
      const colorObj = {
        style: `background-color: var(${colorVariable})`,
        name: colorVariable.replace('--color', '').replace(/-/g, ' '),
        desc: colorVariable,
      };
      colors.push(colorObj)
    });

    hasColors.value = true;
  })
</script>
<template>
  <div v-if="hasColors" class="colors">
    <div class="row">
      <div
        v-for="color in colors"
        :key="color.name"
        class="col-xs-6 col-sm-4 col-md-3 col-xl-2 mb-4"
      >
        <div class="shadow p-2 pb-4 h-100 rounded">
          <div class="colors__item-bg" :style="color.style"></div>
          <strong class="colors__text d-block py-2">{{
            toFirstUpper(color.name)
          }}</strong>
          <small class="colors__text d-block text-gray-dark">{{ color.desc }}</small> 
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.colors {
  overflow: hidden;

  &__item-bg { padding-bottom: 100%; }
}
</style>

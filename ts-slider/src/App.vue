<script lang="ts">
// import VueSlider from 'vue-slider-component';
import { VueSlider } from 'vite-libs';
import { defineComponent } from 'vue';

// import Observable from 'zen-observable';

// Observable.of(1, 2, 3).subscribe((x) => console.log(x));

export default defineComponent({
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 0,
    };
  },
});

</script>

<template>
  <div id="app">
    <h1>slider</h1>
    <vue-slider v-model="value" />
  </div>
</template>

<!--
https://stackblitz.com/edit/vue2-vite-starter-6qq9x7?file=src%2Fcomponents%2FMySliderComponent.vue
https://github.com/NightCatSama/vue-slider-component/issues/642

 -->

<style lang="scss">
@import 'vue-slider-component/lib/theme/antd.scss';
</style>

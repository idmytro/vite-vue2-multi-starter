<script lang="ts">
import VueSlider from 'vue-slider-component';
// import VueSlider from 'vue-slider-component/dist/vue-slider-component.umd.min';
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  components: {
    VueSlider,
    // VueSlider: () => import('vue-slider-component').then((module) => {
    //   console.log(module.default);
    //   // debugger
    //   return module?.default;
    //   // return module
    // }),
    // // HelloWorld,
  },
  data() {
    return {
      value: 0,
    };
  },
});

</script>

<!-- <script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import VueSlider from 'vue-slider-component'

@Component({
  components: {
    VueSlider: () => import('vue-slider-component').then((module) => {
      console.log(module.default);
      // debugger
      return module?.default;
      // return module
    }),
  },
})
export default class MySliderComponent extends Vue {
  value = 50;

  created() {
    console.log('MySliderComponent.vue');
  }
}
</script> -->

<template>
  <div id="app">
    <h1>slider</h1>
    <vue-slider v-model="value" />
    <!-- <HelloWorld /> -->
  </div>
</template>

<!--
https://stackblitz.com/edit/vue2-vite-starter-6qq9x7?file=src%2Fcomponents%2FMySliderComponent.vue
https://github.com/NightCatSama/vue-slider-component/issues/642

 -->

<style lang="scss">
@import 'vue-slider-component/lib/theme/antd.scss';
</style>

<script setup>
import { ref } from 'vue';
import pkg from '../../package.json';

const vueVersion = pkg.dependencies.vue;
const viteVersion = pkg.devDependencies.vite;

const count = ref(0);
</script>

<template>
  <div class="hello-world">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="hello-world__logo hello-world__logo--vite" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="hello-world__logo hello-world__logo--vue" alt="Vue logo" />
      </a>
    </div>

    <h1>
      Vite<sup>{{ viteVersion }}</sup>
      <small> + </small>
      Vue<sup>{{ vueVersion }}</sup>
    </h1>

    <div class="hello-world__card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="hello-world__read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style>
.hello-world sup {
  opacity: 0.5;
  font-size: 50%;
}

.hello-world small {
  opacity: 0.75;
}

.hello-world__card {
  padding: 2em;
}

.hello-world__logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.hello-world__logo--vite:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.hello-world__logo--vue.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.hello-world__read-the-docs {
  color: #888;
}
</style>

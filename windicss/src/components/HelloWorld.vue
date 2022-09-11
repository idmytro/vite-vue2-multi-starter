<script setup>
import { ref } from 'vue';
import pkg from '../../package.json';

const vueVersion = pkg.dependencies.vue;
const viteVersion = pkg.devDependencies.vite;

const count = ref(0);
</script>

<template>
  <div class="hello-world">
    <div class="hello-world__grid">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="hello-world__logo hello-world__logo--vite" alt="Vite logo" />
      </a>
      <span></span>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="hello-world__logo hello-world__logo--vue" alt="Vue logo" />
      </a>
      <span></span>
      <a href="https://windicss.org//" target="_blank">
        <img src="../assets/windicss.svg" class="hello-world__logo hello-world__logo--windi" alt="Windicss logo" />
      </a>
    </div>

    <h1 class="hello-world__grid m-0">
      <span>Vite<sup>{{ viteVersion }}</sup></span>
      <small> + </small>
      <span>Vue<sup>{{ vueVersion }}</sup></span>
      <small> + </small>
      <span>Windicss<sup><!--  --></sup></span>
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

.hello-world__grid {
  display: grid;
  grid-template-columns: 3fr 1fr 3fr 1fr 3fr;
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

.hello-world__logo--vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.hello-world__read-the-docs {
  color: #888;
}
</style>

<script setup>
import { ref } from 'vue';
import pkg from '../../package.json';

const vueVersion = pkg.dependencies.vue;
const viteVersion = pkg.devDependencies.vite;

const count = ref(0);
</script>

<template>
  <div class="hello-world">
    <ol>
      <li>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
          style="--hover-color: #646cffaa;"
        >
          <img
            src="/vite.svg"
            alt="Vite logo"
          />
          <span>
            <strong>Vite</strong>
            <sup>{{ viteVersion }}</sup>
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          style="--hover-color: #42b883aa;"
        >
          <img
            src="../assets/vue.svg"
            alt="Vue logo"
          />
          <span>
            <small>+</small>
            <strong>Vue</strong>
            <sup>{{ vueVersion }}</sup>
          </span>
        </a>
      </li>
    </ol>

    <div class="hello-world__card">
      <button
        type="button"
        @click="count++"
      >
        count is {{ count }}
      </button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Install
      <a
        href="https://github.com/johnsoncodehk/volar"
        target="_blank"
        rel="noopener noreferrer"
      >Volar</a>
      in your IDE for a better DX
    </p>
    <p class="hello-world__read-the-docs">
      Click on the Vite and Vue logos to learn more
    </p>
  </div>
</template>

<style>
.hello-world ol {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  font-size: 3.2em;
  font-weight: 700;
}

.hello-world ol a {
  color: inherit;
  display: flex;
  flex-direction: column;
}

.hello-world ol small {
  padding: 0 0.5em;
}

.hello-world img {
  height: 96px;
  padding: 24px;
  will-change: filter;
  object-fit: contain;
}

.hello-world a:hover img {
  filter: drop-shadow(0 0 0.5em var(--hover-color));
}

.hello-world sup {
  opacity: 0.5;
  font-size: 50%;
}

.hello-world small {
  opacity: 0.75;
}

.hello-world a span {
  transition: color 0.3s;
}

.hello-world a:hover span {
  color: var(--hover-color);
}

.hello-world__card {
  padding: 2em;
}

.hello-world__read-the-docs {
  color: #888;
}
</style>

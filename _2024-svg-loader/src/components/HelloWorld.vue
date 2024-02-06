<script setup lang="ts">
import { ref } from 'vue'
import pkg from '../../package.json'
import TSLogo from '../assets/ts-logo-128.svg?component'
import VueLogo from '../assets/vue.svg?component'

const tsVersion = pkg.devDependencies.typescript
const vueVersion = pkg.dependencies.vue
const viteVersion = pkg.devDependencies.vite

const count = ref(0)
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
          >
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
          class="justify-center"
          style="--hover-color: #42b883aa;"
        >
          <span class="svg !w-auto">
            <VueLogo height="96" />
          </span>
          <span>
            <small>+</small>
            <strong>Vue</strong>
            <sup>{{ vueVersion }}</sup>
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          style="--hover-color: #3278C7aa;"
        >
          <span class="svg !w-auto">
            <TSLogo height="96" />
          </span>
          <span>
            <small>+</small>
            <strong>TS</strong>
            <sup>{{ tsVersion }}</sup>
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
    <p class="text-[red]">
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

.hello-world img,
.hello-world .svg {
  height: 96px;
  padding: 24px;
  will-change: filter;
}

.hello-world img {
  object-fit: contain;
}

.hello-world a:hover img,
.hello-world a:hover svg {
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
  padding: 1em;
}
</style>

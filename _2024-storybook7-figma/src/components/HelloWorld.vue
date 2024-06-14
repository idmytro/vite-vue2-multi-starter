<script setup lang="ts">
import { ref } from 'vue'
import pkg from '../../package.json'
import type { Emits, Props } from './types'

withDefaults(defineProps<Props>(), {
  showVolarText: true,
  showLogoText: true,
})

const emit = defineEmits<Emits>()

const tsVersion = pkg.devDependencies.typescript
const vueVersion = pkg.dependencies.vue
const viteVersion = pkg.devDependencies.vite

const count = ref(0)

watch(
  () => count.value,
  (newValue) => {
    emit('count-updated', newValue)
  },
)
</script>

<template>
  <div class="hello-world" :style="{}">
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
          style="--hover-color: #42b883aa;"
        >
          <img
            src="../assets/vue.svg"
            alt="Vue logo"
          >
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
          <img
            src="../assets/ts-logo-128.svg"
            alt="TS logo"
          >
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

    <p v-if="showVolarText">
      Install
      <a
        href="https://github.com/johnsoncodehk/volar"
        target="_blank"
        rel="noopener noreferrer"
      >Volar</a>
      in your IDE for a better DX
    </p>

    <p v-if="showLogoText" class="text-[silver]">
      Click on the logos to learn more
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
  padding: 1em;
}
</style>

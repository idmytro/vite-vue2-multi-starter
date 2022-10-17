<script setup>
import { ref } from 'vue';
import SvgIcon from './SvgIcon.vue';
import pkg from '../../package.json';
import viteIcon from '../assets/vite.svg';

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
          <SvgIcon :name="viteIcon" />
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
          <SvgIcon name="vue" />
          <span>
            <small>+</small>
            <strong>Vue</strong>
            <sup>{{ vueVersion }}</sup>
          </span>
        </a>
      </li>
    </ol>
    <p class="hello-world__plugins">
      <strong>Vite plugins: </strong>
      <a
        href="https://www.npmjs.com/package/vite-plugin-svg-sprite"
        target="_blank"
        rel="noopener noreferrer"
      >svg-sprite
      </a>
    </p>

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
  align-items: center;
}

.hello-world ol small {
  padding: 0 0.5em;
}

.hello-world .svg-icon {
  height: auto;
  width: 100px;
  will-change: filter;
}

.hello-world a:hover .svg-icon {
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

.hello-world__plugins {
  margin-top: 2em;
}

.hello-world__card {
  padding: 1em;
}

.hello-world__read-the-docs {
  color: #888;
}
</style>

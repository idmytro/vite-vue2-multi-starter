<script setup lang="ts">
// This starter template is using Vue 2.7.10 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

function handleCountUpdated (count: number) {
  // eslint-disable-next-line no-console
  console.log('count updated', count)
}

const isFullscreen = ref(false)
</script>

<template>
  <div id="app">
    <HelloWorld
      data-testid="hello-world"
      v-bind="{ showVolarText: false }"
      :style="isFullscreen ? '--ms-lists-table-width: 100%' : '--ms-lists-table-width: var(--root-lists-body-width, 100%)'"
      @count-updated="handleCountUpdated"
    />
  </div>
</template>

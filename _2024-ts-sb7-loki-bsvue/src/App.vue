<script setup lang="ts">
// This starter template is using Vue 2.7.10 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

function handleCountUpdated (count: number) {
  // eslint-disable-next-line no-console
  console.log('count updated', count)
}
</script>

<template>
  <div id="app">
    <HelloWorld
      v-bind="{ showVolarText: false }"
      @count-updated="handleCountUpdated"
    />
  </div>
</template>

<script setup lang="ts">
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

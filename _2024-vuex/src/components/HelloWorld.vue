<script setup lang="ts">
import { store } from '../store'

const count = computed(() => store.state.count)

const increment = () => store.commit('increment')
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">
      Increment
    </button>
  </div>
</template>

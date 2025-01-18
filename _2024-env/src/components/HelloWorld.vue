<script setup lang="ts">
import { ENV } from '../env'

const v = import.meta.env.VITE_V
const p = process.env.VITE_V

const pp = ENV.VITE_V
</script>

<template>
  <div class="hello-world">
    <p>
      {{ v }}
    </p>

    <p>
      {{ p }}
    </p>

    <p>
      {{ typeof pp }}
    </p>
  </div>
</template>

<style>
</style>

<script setup lang="ts">

</script>

<template>
  <div id="app" class="space-y-1em">
    <nav>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </nav>

    <router-view />
  </div>
</template>

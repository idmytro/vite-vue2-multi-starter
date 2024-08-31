<script setup lang="ts">
import 'element-theme-chalk/src/button.scss'
import 'element-theme-chalk/src/tooltip.scss'

import ElButton from 'element-ui/lib/button'
import ElTooltip from 'element-ui/lib/tooltip'
</script>

<template>
  <div class="space-x-10px pt-4em">
    <ElTooltip content="Top center" placement="top">
      <ElButton>Dark</ElButton>
    </ElTooltip>
    <ElTooltip content="Bottom center" placement="bottom" effect="light">
      <ElButton>Light</ElButton>
    </ElTooltip>
  </div>
</template>

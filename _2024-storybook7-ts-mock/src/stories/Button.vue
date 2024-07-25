<script lang="ts" setup>
import { getLabel } from './getLabel'
import './button.css'

interface Props {
  label?: string
  primary: boolean
  size: 'small' | 'medium' | 'large'
  backgroundColor?: string
}

const props = defineProps<Props>()

const emit = defineEmits<(e: 'onClick') => void>()

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size}`]: true,
}))

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}))

function onClick () {
  emit('onClick')
}
</script>

<template>
  <button type="button" :class="classes" :style="style" @click="onClick">
    {{ label ?? getLabel() }}
  </button>
</template>

<script lang="ts" setup>
import { getLabel } from './utils'
import './button.css'

interface Props {
  label?: string
  primary: boolean
  size: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  size: 'medium',
})

// const props = defineProps<Props>()

const emit = defineEmits<(e: 'onClick') => void>()

const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size}`]: true,
}))

function onClick () {
  emit('onClick')
}
</script>

<template>
  <button type="button" :class="classes" @click="onClick">
    {{ label || getLabel() }}
  </button>
</template>

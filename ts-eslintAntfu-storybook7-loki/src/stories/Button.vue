<script>
import './button.css'

export default {
  name: 'MyButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes () {
      return {
        'storybook-button': true,
        'storybook-button--primary': this.primary,
        'storybook-button--secondary': !this.primary,
        [`storybook-button--${this.size}`]: true,
      }
    },
    style () {
      return {
        backgroundColor: this.backgroundColor,
      }
    },
  },

  methods: {
    onClick () {
      this.$emit('onClick')
    },
  },
}
</script>

<template>
  <button type="button" :class="classes" :style="style" @click="onClick">
    {{ label }}
  </button>
</template>

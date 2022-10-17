<template>
  <svg
    class="svg-icon"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.svg-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>

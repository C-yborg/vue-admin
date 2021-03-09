<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="name"></use>
  </svg>
</template>

<script>
export default {
  name: "svgIcon",
  data() {
      return {
          svgClass: '',
          name: ''
      }
  }
};
</script>

<style lang='scss' scoped>
</style>
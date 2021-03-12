<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
export default {
    name: "svgIcon",
    props: {
      iconClass:{},
      className:{}
    },
    data() {
        return {
            name: "",
        };
    },
    methods: {
        
    },
    computed: {
        iconName() {
          return `#icon-${this.iconClass}`
        },
        svgClass() {
          if(this.className) {
            return `svg-icon ${this.className}`
          } else {
            return `svg-icon`
          }
        }
    },
};
</script>

<style lang='scss' scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}

</style>
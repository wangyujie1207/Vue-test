<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-layout",
    data() {
      return {
        layoutClass: {
          hasSlider: false
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if(vm.$options.name === 'g-slider'){
          this.layoutClass.hasSlider = true;
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    border: 1px solid red;
    &.hasSlider {
      flex-direction: row;
    }
  }
</style>
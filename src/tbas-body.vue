<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-tabs-body",
    inject: ['eventBus'],
    data(){
      return {
        active: false
      }
    },
    props: {

    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        console.log(name)
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>
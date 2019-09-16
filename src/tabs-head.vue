<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "g-tabs-head",
    inject: ['eventBus'],
    created() {
      this.eventBus.$on('update:selected', (item, vm) => {
        console.log(item);
        console.log(vm.$el.getBoundingClientRect())
      })
    },
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $blue: blue;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    position: relative;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      width: 100px;
    }
    > .actions{
      margin-left: auto;
    }
  }
</style>
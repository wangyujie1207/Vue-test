<template>
  <div class="tabs-item" :class="classes" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-tabs-item",
    inject: ['eventBus'],
    data(){
      return {
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      classes(){
        return {
          active: this.active
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods: {
      xxx(){
        this.eventBus.$emit('update:selected', this.name,this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $blue: blue;
  .tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    &.active {
      background-color: red;
      color: $blue;
    }
  }
</style>
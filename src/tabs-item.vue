<template>
  <div class="tabs-item" :class="classes" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-tabs-item",
    inject: ['eventBus'],
    data() {
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
      classes() {
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods: {
      onClick() {
        if (this.disabled) {return}
        this.eventBus.$emit('update:selected', this.name, this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  $blue: blue;
  $disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>
<template>
  <div class="toast" ref="wrapper" :class="toastClass">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-html="$slots.default[0]" v-else></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "g-toast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 50
      },
      closeButton: {
        type: Object,
        default(){
          return {
            text: '关闭',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(value){
          return ['top','bottom','middle'].indexOf(value) >= 0;
        }
      }
    },
    computed: {
      toastClass(){
        return {[`position-${this.position}`]: true}
      }
    },
    mounted(){
      this.execAutoClose();
      this.updateStyle();
    },
    methods: {
      updateStyle(){
        this.$nextTick(() => {
          this.$refs.line.style.height =
            `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      execAutoClose(){
        if(this.autoClose){
          setTimeout(() => {
            this.close();
          },this.autoCloseDelay*1000)
        }
      },
      close(){
        this.$el.remove();
        this.$destroy();
      },
      onClickClose(){
        this.close();
        if(this.closeButton && typeof this.closeButton.callback === 'function'){
          this.closeButton.callback();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0,0,0,0.75);
  .toast {
    min-height: $toast-min-height;
    font-size: $font-size;
    line-height: 1.8;
    color: white;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background-color: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
    padding: 0 16px;
    border-radius: 4px;
    .close{
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line{
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    .message{
      padding: 8px 0;
    }
    &.position-top{
      top: 0;
      transform: translateX(-50%);
    }
    &.position-bottom{
      bottom: 0;
      transform: translateX(-50%);
    }
    &.position-middle{
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }

</style>
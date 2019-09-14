import Toast from './toast';

export default {
  install(Vue, options){
    Vue.prototype.$toast = function (message, toastOptions) {
      console.log(message);
      let Constructor = Vue.extend(Toast);
      let toast = new Constructor({
        propsData: toastOptions
      });
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el)
    }
  }
}
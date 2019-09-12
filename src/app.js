import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);

new Vue({
  el: '#app',
  data() {
    return {
      loading: false
    }
  },
  created(){
    setTimeout(() => {
      let event = new Event('change');
      let inputElement = this.$el.querySelector('input');
      console.log(inputElement);
      inputElement.dispatchEvent(event);
      console.log('hi');
    },3000)
  },
  methods: {
    inputChange(e){
      console.log(e.target.value);
    }
  }
});

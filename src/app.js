import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Slider from './slider';
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-footer', Footer);
Vue.component('g-slider', Slider);
Vue.component('g-content', Content);

new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      message: ''
    }
  },
  created(){
    // setTimeout(() => {
    //   let event = new Event('change');
    //   let inputElement = this.$el.querySelector('input');
    //   console.log(inputElement);
    //   inputElement.dispatchEvent(event);
    //   console.log('hi');
    // },3000)
  },
  methods: {
    inputChange(e){
      console.log(e.target.value);
    }
  }
});

import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group'
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
  el: '#app',
  data(){
    return {
      loading: false
    }
  }
});

import chai from 'chai';
const expect = chai.expect;
// 单元测试
{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount(div);
  let useElement = vm.$el.querySelector('use');
  expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings');
  vm.$el.remove();
  vm.$destroy();
}
{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  });
  vm.$mount(div);
  let useElement = vm.$el.querySelector('use');
  expect(useElement.getAttribute('xlink:href')).to.equal('#i-loading');
  vm.$el.remove();
  vm.$destroy();
}
{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount(div);
  let svgElement = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svgElement);
  expect(order).to.equal('1');
  vm.$el.remove();
  vm.$destroy();
}
{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount('#test');
  let divElement = vm.$el.querySelector('div');
  let {order} = window.getComputedStyle(divElement);
  expect(order).to.equal('2');
  vm.$el.remove();
  vm.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount();
  vm.$on('click', function(){
    console.log(1)
  });
  let button = vm.$el;
  button.click();

}
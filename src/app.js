import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
  el: '#app',
  data() {
    return {
      loading: false
    }
  }
});

import chai from 'chai';
import spies from 'chai-spies';

const expect = chai.expect;
chai.use(spies);
try {
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
    let spy = chai.spy(function () {});
    vm.$on('click', spy);
    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called();

  }
} catch (error) {
  window.errors = [error]
} finally {
  window.errors && window.errors.forEach(error => {
    console.error(error.message)
  })
}
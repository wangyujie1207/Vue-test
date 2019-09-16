const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head';
import TabsItem from '../src/tabs-item';
import TabsPane from '../src/tabs-pane';
import TabsBody from '../src/tabs-body';

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-tabs-body', TabsBody);

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist;
  });
  it('接受 name 属性', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: 'xxx',
      }
    }).$mount(div);
    expect(vm.$el.getAttribute('data-name')).to.equal('xxx');
    div.remove();
    vm.$destroy();
  });
  it('接受 disabled 属性', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount(div);
    console.log(vm.$el.outerHTML);
    expect(vm.$el.classList.contains('disabled')).to.equal(true);
    const callback = sinon.fake();
    vm.$on('click', callback);
    vm.$el.click();
    expect(callback).to.have.been.not.called;
  });
});

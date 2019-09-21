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
import Toast from './toast';
import Plugin from './plugin';
import Tabs from './tabs';
import TabsHead from './tabs-head';
import TabsItem from './tabs-item';
import TabsPane from './tabs-pane';
import TabsBody from './tabs-body';
import Popover from './popover';
import Collapse from './collapse';
import CollapseItem from './collapseItem';
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
Vue.component('g-toast', Toast);
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-popover', Popover);
Vue.component('g-collapse', Collapse);
Vue.component('g-collapse-item', CollapseItem);
Vue.use(Plugin);
new Vue({
  el: '#app',
  data() {
    return {
      selectedTab: ['2','1'],
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
    showToast(){
      this.$toast('我是message',{
        position: 'top',
        enableHtml: false,
        closeButton: {
          text: '知道了',
          callback() {
            console.log('用户说他知道了');
          }
        }
      })
    }
  }
});

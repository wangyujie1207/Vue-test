const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist;
  });
  describe('props', () => {
    it('接受 autoClose 属性', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(div);
      setTimeout(()=>{
        // console.log(111,document.body.contains(vm.$el));
        expect(document.body.contains(vm.$el)).to.equal(true);
        done();
      })
    });
    it('接受 closeButton', (done) => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const callback = sinon.fake();
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback
          },
        }
      }).$mount(div);
      let closeButton = vm.$el.querySelector('.close');
      expect(closeButton.textContent.trim()).to.equal('关闭吧');
      // console.log(closeButton.click);
      setTimeout(() => {
        closeButton.click();
        expect(callback).to.have.been.called;
        done();
      },200)

    });
    it('接受 enableHtml 属性', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      });
      vm.$slots.default = ['<strong id="test">hi</strong>'];
      vm.$mount(div);
      let strong = vm.$el.querySelector('#test');
      expect(strong).to.exist;
    });
    it('接受 position 属性', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount(div);
      // console.log(vm.$el.classList)
      expect(vm.$el.classList.contains('position-bottom')).to.equal(true);
    });
  });
});

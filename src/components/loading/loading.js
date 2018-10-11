
import loading from './loading.vue'

var Loading = {}

Loading.install = function (Vue) {
  const loadingConstructor = Vue.extend(loading)

  const instance = new loadingConstructor()

  instance.$mount(instance.$el) // .loading-wrap
  document.body.appendChild(instance.$el)

  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法 
  Vue.prototype.$loading = (num) => {
    num = num || 0; // 0是显示，1是隐藏

    instance.show = (num === 0);
  }
}

export default Loading
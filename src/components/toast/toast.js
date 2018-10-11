import toast from './toast.vue'

var Toast = {}

Toast.install = function (Vue) {
  const ToastConstructor = Vue.extend(toast)

  const instance = new ToastConstructor()

  instance.$mount(instance.$el) // .toast-wrap
  document.body.appendChild(instance.$el)

  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法 
  Vue.prototype.$toast = (options) => {
    let msg = options.msg || 'tips',
        time = options.time || 3;

    instance.message = msg;
    instance.show = true;

    setTimeout(() => {
      instance.show = false;
    }, time * 1000);
  }
}

export default Toast
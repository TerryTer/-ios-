
import confirm from './confirm.vue'

var Confirm = {}

Confirm.install = function (Vue) {
  const confirmConstructor = Vue.extend(confirm)

  const instance = new confirmConstructor()

  instance.$mount(instance.$el) // .confirm-wrap
  document.body.appendChild(instance.$el)

  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法 
  
  Vue.prototype.$confirm = (options) => {
    instance.msg = options.msg || 'msg'
    instance.yes = typeof options.yes && options.yes
    instance.no = typeof options.no && options.no
    instance.show = true;
  }

  Vue.prototype.$close = () => {
    var promise = new Promise((resolve, reject) => {
          resolve();

          instance.show = false;
        })
        
    return promise
  }
}

export default Confirm
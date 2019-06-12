import ToastComponent from './Toast.vue'

const Toast = {}

Toast.install = function (Vue) {
  const ToastConstructor = Vue.extend(ToastComponent)
  const instance = new ToastConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  Vue.prototype.$toast = function (payload) {
    const { $data = null } = payload
    if ($data) {
      Object.keys($data).forEach((item) => {
        instance.$data[item] = $data[item]
      })
    }
  }
}

export default Toast

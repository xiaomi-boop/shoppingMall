import Toast from "./Toast.vue";
// import * as vue from 'vue'
const obj = {}

obj.install = function (vue) {
  console.log(6, vue)
  // 创建组件构造器
  const toastConstructor = vue.component('Toast', Toast);
  // 实例化构造器
  // const toast = new toastConstructor();

  // 将构造器手动挂载到div元素上
  toastConstructor.mount('#detail');

  // 将toast添加到body中
  // document.body.appendChild(toast.$el)

  // Vue.prototype.$toast = toast;
}

export default obj
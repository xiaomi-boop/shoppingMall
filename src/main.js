import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
// import vueLazyload from 'vue-lazyload';
// import toast from "@/components/common/toast";

// 解决移动端300ms延迟
FastClick.attach(document.body)

createApp(App).use(store).use(router).mount('#app')


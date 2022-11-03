<template>
  <div id="app">
      <router-view v-slot="{ Component }">
        <keep-alive :include="include">
          <component :is="Component"/>
        </keep-alive>
      </router-view>

    <!-- 不需要被缓存的路由入口 -->
    <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from './components/content/MainTabBar.vue'
export default {
  name: 'app',
  data() {
    return {
      include: ['home'] // 只需要添加在外出组件即可
    }
  },
  components: {
    MainTabBar
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

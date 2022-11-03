<!--  -->
<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="cadetblue">
        <template v-slot:slot-ico>
          <img src="../../assets/img/tabbar/shouye.svg" alt="">
        </template>
        <template v-slot:slot-active-ico>
        <img src="../../assets/img/tabbar/shouye_hover.svg" alt="">
        </template>
        <template v-slot:slot-name>
        <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="cadetblue">
        <template v-slot:slot-ico>
          <img src="../../assets/img/tabbar/fenlei.svg" alt="">
        </template>
        <template v-slot:slot-active-ico>
          <img src="../../assets/img/tabbar/fenlei_hover.svg" alt="">
        </template>
          <template v-slot:slot-name>
        <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="cadetblue">
        <template v-slot:slot-ico>
          <img src="../../assets/img/tabbar/baoshuicang.svg" alt="">
        </template>
        <template v-slot:slot-active-ico>
          <img src="../../assets/img/tabbar/baoshuicang_hover.svg" alt="">
        </template>
          <template v-slot:slot-name>
        <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="cadetblue">
        <template v-slot:slot-ico>
          <img src="../../assets/img/tabbar/wo.svg" alt="">
        </template>
        <template v-slot:slot-active-ico>
          <img src="../../assets/img/tabbar/wo_hover.svg" alt="">
        </template>
          <template v-slot:slot-name>
        <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',

  data () {
    return {
    }
  },

  methods: {},
  computed: {},
  components: {
    TabBar,
    TabBarItem
  },
  watch: {},
  // 组件创建出来后(生命周期)
  created () {},

  // 组件挂载到dom上后(生命周期)
  mounted () {},

  // 界面发生更新后(生命周期)
  updated () {},
  activated () {}
}

</script>
<style scoped>
img {
  margin-top: 4px;
  width: 16px;
  height: 16px;
}
</style>

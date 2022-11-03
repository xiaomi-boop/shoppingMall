<!--  -->
<template>
  <div id="cart">
    <!-- 顶部导航 -->
    <nav-bar class="nav-bar">
      <template v-slot:center>
      <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>

    <!-- 商品列表 -->
    <cart-list/>

    <!-- 底部汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import CartBottomBar from "@/views/cart/childComps/CartBottomBar.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList.vue";

import { mapGetters } from "vuex";
export default {
  name: '',

  data () {
    return {
    }
  },

  methods: {},
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
  },
  components: {
    NavBar,
    CartList,
    CartBottomBar
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
  #cart {
    height: 100vh;
  }
  .nav-bar {
    background-color: #ff8198;
    color: #fff;
    /* font-weight: 700; */
  }
</style>

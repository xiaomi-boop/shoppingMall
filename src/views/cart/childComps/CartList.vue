<!--  -->
<template>
  <div class="cart-list">
    <scroll class="content">
    <cart-list-item 
    v-for="(item, index) in cartList" 
    :key="index"
    :product="item"
    >
    </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";

import Scroll from "@/components/common/scroll/Scroll.vue";

import { mapGetters } from "vuex";

export default {
  name: '',

  data () {
    return {
    }
  },

  methods: {},
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    Scroll,
    CartListItem
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
  .cart-list {
    height: calc(100% - 44px - 49px - 40px);
  }
 .content {
   height:  100%;
   overflow: hidden;
 }
</style>

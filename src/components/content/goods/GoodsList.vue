<!--  -->
<template>
  <div id="goods">
    <goods-list-item v-for="(item, index) in goods" :key="index" :gooditem="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: '',

  data () {
    return {
    }
  },
  props: {
    goods: {
      type: Array,
      dafault() {
        return []
      }
    }
  },
  methods: {},
  computed: {},
  components: {
    GoodsListItem
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
#goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>

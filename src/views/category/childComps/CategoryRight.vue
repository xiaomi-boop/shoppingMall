<!--  -->
<template>
  <div id="c-right">
    <!-- 顶部导航 -->
    <div 
    v-for="(item, index) in list" 
    :key="index" 
    class="list"
    >
      <img :src="item.image" alt="" @load="imgLoad"> 
      <div>{{item.title}}</div>       
    </div>

    <!-- 推荐数据 -->

  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      pop: [],
      sell: [],
      new: [],
    }
  },
  props: {
    list: {
      type: Array,
      deafult() {
        return []
      }
    }
  },
  // 组件创建出来后(生命周期)
  created () {
  },

  methods: {
    imgLoad() {
      this.$store.state.scroll.refresh();
    }
  },
  computed: {},
  components: {},
  watch: {},
  // 组件挂载到dom上后(生命周期)
  mounted () {},

  // 界面发生更新后(生命周期)
  updated () {},
  activated () {}
}

</script>
<style scoped>
#c-right {
  height: 100%;
  width: 100%;
  /* text-align: center; */
}
.list {
  display: inline-block;
  padding: 5px;
  width: 25%;
  text-align: center;
}
.list div {
  font-size: 12px;
  color:#666;
}
.list img {
  width: 80%;
  padding: 10px 0px;
}
</style>

<!--  -->
<template>
  <div class="recommed">
    <div 
    class="recommed-item"
    v-for="(item, index) in recommeds" 
    :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="">
        <a class="text">{{item.title}}</a>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',

  data () {
    return {
    }
  },
  props: {
    recommeds: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {

  },
  computed: {},
  components: {},
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
.recommed {
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 15px 0px 20px;
  border-bottom: 10px solid #eee;
  
}
.recommed-item {
  flex: 1;
  
}
.recommed-item img {
  width: 80px;
  margin-bottom: 10px;
}
a {
  text-decoration:none;
  color: #009999;
}
</style>

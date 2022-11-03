<!--  -->
<template>
  <div class="nav-bar-item">
    <nav-bar>
      <template v-slot:left>
        <div @click="backClick">
          <img src="@/assets/img/common/back.svg" class="back" alt="">
        </div>
      </template>

      <template v-slot:center>
        <div class="title">
          <div 
            v-for="(item, index) in title" 
            :key="index" 
            class="title-item" 
            :class="{active: index === currentIndex}" 
            @click="titleClick(index)"
            >{{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'DetailNavBar',

  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },

  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleclick', index)
    },
    backClick() {
      this.$router.go(-1);//返回上一层
    },
  },
  computed: {},
  components: {
    NavBar
  },
  watch: {},
  // 组件创建出来后(生命周期)
  created () {},

  // 组件挂载到dom上后(生命周期)
  mounted () {},

  // 界面发生更新后(生命周期)
  updated () {},
  activated () {},
  unmounted() {
  }
}

</script>
<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: #ff5777
}

.back {
  display: inline-block;
  vertical-align: middle;
  /* margin-top: 10px; */
}
</style>

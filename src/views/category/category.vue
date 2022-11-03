<!--  -->
<template>
  <div id="category">
    <!-- 顶部导航 -->
    <div class="cate-top">
      <nav-bar>
        <template v-slot:center>
          <div>分类</div>
        </template>
      </nav-bar>
    </div>
    
    <div class="dis-flex">
        <!-- 左侧导航 -->
      <category-left ref="cateleft"  class="cate-left" :category="category" @leftclick="leftclick"/>

      <!-- 右侧导航 -->
        <scroll 
        class="cate-right" 
        ref="scroll"
        :probe-type="3" 
        @posiscroll="posiscroll">
          <Category-right :list="typeData"/>
          <tab-control :title="['综合', '新品', '销量']" @tabclick="tabclick" />

          <goods-list :goods="goods[currentType].list" />
        </scroll>
    </div>
  
    <!-- 返回顶部 -->
    <back-top @click="scrollclick" v-show="isShowScroll"/>
  </div>
</template>

<script>
import CategoryLeft from "./childComps/CategoryLeft.vue";
import CategoryRight from "./childComps/CategoryRight.vue";
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import BackTop from '@/components/content/backTop/BackTop.vue'

import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll.vue"

import { getCategory, getSubcategory, getCategoryDetail } from "@/network/category.js"
export default {
  name: '',

  data () {
    return {
      category: [],
      typeData: [],
      maitKey: 0,
      miniWallkey: 0,
      isShowScroll: false,
      currentType: 'pop',
      goods: {
        pop: {
          list: []
        },
        new: {
          list: []
        },
        sell: {
          list: []
        }
      }
    }
  },
  // 组件创建出来后(生命周期)
  created () {
    // 左侧分类
    getCategory().then(res => {
      this.category = res.data.category.list
      const curindex = this.$refs.cateleft.curindex
      this.maitKey = this.category[curindex].maitKey
      this.miniWallkey = this.category[curindex].miniWallkey
      // 获取分类数据
      this.getSubcategorys(this.maitKey);

      // 获取推荐数据
      this.getCategoryDetails(this.miniWallkey, 'pop');
      this.getCategoryDetails(this.miniWallkey, 'new');
      this.getCategoryDetails(this.miniWallkey, 'sell');

    })
    


  },
  methods: {
    // 监听滚动条
    posiscroll(position) {
      this.isShowScroll = (-position.y) > 1000
    },
    // 左侧导航
    getSubcategorys(maitKey) {
      getSubcategory(maitKey).then(res => {
        this.typeData = res.data.list
      })
    },

    // 推荐商品
    getCategoryDetails(miniWallkey, currentType) {
      getCategoryDetail(miniWallkey, currentType).then(res => {
        this.goods[currentType].list = res
      })
    },
    // 左侧点击
    leftclick(maitKey, miniWallkey) {
      this.getSubcategorys(maitKey)
      this.getCategoryDetails(miniWallkey, this.currentType)
      this.$refs.scroll.scrollTo(0, 0, 0)
    },

    // 返回顶部
    scrollclick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },

    // 推荐点击
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    this.getCategoryDetails(this.miniWallkey, this.currentType)

    }
  },
  computed: {},
  components: {
    CategoryLeft,
    CategoryRight,
    TabControl,
    GoodsList,
    BackTop,
    NavBar,
    Scroll
  },
  watch: {},


  // 组件挂载到dom上后(生命周期)
  mounted () {
  
  },

  // 界面发生更新后(生命周期)
  updated () {},
  activated () {}
}

</script>
<style scoped>
.cate-top {
  background-color: #ff8198;
  color: #fff;
}
.dis-flex {
  display: flex;
  position: relative;
  height: calc(100vh - 44px - 49px);
  /* z-index: 9; */
  /* height: 100vh; */
  overflow: hidden;
}
.cate-left {
  flex: 25%;
  /* width: 25%; */
  height: 100%;
  background-color: #eee;
}
.cate-right {
  flex: 75%;
  /* width: 100%; */
  height: 100%;
  margin-left: 10px;

}
</style>

<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>

    <tab-control 
    class="tab-control" 
    :title="['流行', '新款', '精选']" 
    @tabclick="tabclick" 
    ref="tabControl1" 
    v-show="isTabFixed"
    />

    <scroll class="content" 
    ref="scroll" 
    :probe-type = "3" 
    @posiscroll="posiscroll" 
    :pull-up-load="true" 
    @pullingup = "pullingup"
    >
    <home-swiper :banners ='banners'  @swiperimageload="swiperimgload"/>
    <recommend-view :recommeds ='recommed'/>
    <feature-view/>

    <tab-control 
    class="tabControl" 
    :title="['流行', '新款', '精选']" 
    @tabclick="tabclick" 
    ref="tabControl2" 
    />

      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click="scrollclick" v-show="isShowScroll"/>
  </div>
</template>

<script>
  // 局部组件
  import HomeSwiper from './childComops/homeSwiper.vue'
  import RecommendView from './childComops/RecommendView.vue'
  import FeatureView from './childComops/FeatureView.vue'

  // 公共组件
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import TabControl from '@/components/content/tabControl/TabControl.vue'
  import GoodsList from '@/components/content/goods/GoodsList.vue'
  import scroll from '@/components/common/scroll/Scroll.vue'
  import BackTop from '@/components/content/backTop/BackTop.vue'

  // 功能组件
  import {getHomeMultidata, getHomeGoods} from '@/network/home.js'


export default {
  name: 'home',

  data () {
    return {
      banners: [],
      recommed: [],
      tabControloffsetTop: 0,
      goods: {
        'pop': {
          page: 0,
          list: []
        },
        'new': {
          page: 0,
          list: []
        },
        'sell': {
          page: 0,
          list: []
        },
      },
      currentType: 'pop',
      isShowScroll: false,
      taboffsetTop: 0,
      isTabFixed: false,
      // scrollerHeight: ''
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    scroll,
    BackTop
  },
  // 组件创建出来后(生命周期)
  created () {
    this.getHomeMultidatas();
    // 请求商品数据
    this.getHomeGoodes('pop');
    this.getHomeGoodes('new');
    this.getHomeGoodes('sell');
    // 监听图片加载完成

  },
  methods: {
    // 事件监听相关的方法
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
        // this.$nextTick方法防止页面渲染前调用
        this.$nextTick(() => {
          this.$refs.tabControl1.currentIndex = index;
        })
        this.$nextTick(() => {
          this.$refs.tabControl2.currentIndex = index;
        })
  },
  // 返回顶部
  scrollclick() {
    this.$refs.scroll.scrollTo(0, 0, 500);
  },

  // 监听滚动
  posiscroll(position) {
    // 监听返回顶部图片显示，大于1000
    this.isShowScroll = (-position.y) > 1000

    // 决定tabControl是否吸顶
    this.isTabFixed = (-position.y) > this.tabControloffsetTop
  },

  // 上拉加载更多
  pullingup() {
    console.log('上拉加载更多')
    this.getHomeGoodes(this.currentType)
    // 重新加载scroll
    this.$refs.scroll.finishPullUp();
    // this.$refs.scroll.refresh();
  },

    // 网络请求相关的方法
    getHomeMultidatas() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.dKeywords = res.data.dKeyword;
        this.keywords = res.data.keywords;
        this.recommed = res.data.recommend.list;
      });
    },
    getHomeGoodes(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      })
    },

    swiperimgload() {
      //等到 swiper的图片加载好之后
      if (this.$refs.tabControl2) {
        this.tabControloffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }
    },
  },

  watch: {
  },
  // 页面进入
  activated() {
  },
  // 页面离开
  deactivated() {
  },

  // 组件挂载到dom上后(生命周期)
  mounted () {
    // 获取tabControl的offsetTop
  },

  // 界面发生更新后(生命周期)
  unmounted() {
  }
}

</script>
<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: #ff8198;
    color: #fff;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  /* .tabControl {
    position: sticky;
    background-color: #fff;
    top: 44px;
    z-index: 9;
  } */
  .content {
    height: calc(100% - 93px);
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }

  /* .content {
    margin-top: 44px;
    height: calc(100% - 93px);
    overflow: hidden;
  } */

  .tab-control {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>

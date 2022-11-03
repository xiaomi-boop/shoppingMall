<!--  -->
<template>
  <div id="detail">
    <nav-bar-item class="detail-nav" @titleclick="titleClick" ref="nav"/>
    <scroll 
    class="content" 
    ref="scroll" 
    :probe-type="3" 
    @posiscroll="contentScroll"
    >
      <detail-swiper :topimages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @detailimageload = "detailimageload"/>
      <detail-params ref="params" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <!-- 回到顶部 -->
    <back-top @click="scrollclick" v-show="isShowBackTop"/>
    <!-- 加入购物车 -->
    <detail-bottom-bar @addcard="addcard"/>
    <toast :message="message" :is-show = "isShow" :time="time"/>
  </div>
</template>

<script>
import NavBarItem from './childComps/DetailNavBar.vue'
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar.vue";

import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from '@/components/content/backTop/BackTop.vue'

import { debounce } from "@/common/util/util.js";
import { backTopMixin } from "@/common/util/mixin.js";
import Toast from "@/components/common/toast/Toast.vue";

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "@/network/detail.js";

import { mapActions } from "@/store/actions.js";
export default {
  name: '',

  data () {
    return {
      iid: null, // 商品id
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs : [],
      getThemeTopY: '',
      currentIndex: 0,
      message: '',
      isShow: false,
      time: 0
    }
  },
  created() {
  },
  mixins: [backTopMixin],
  methods: {
    // ...mapActions(['addCart']),

    // 导航栏去到不同展示栏
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 44, 200)
    },

    detailimageload() {
      this.getThemeTopY()
    },
    // 监听详情滚动获取高度
    contentScroll(position) {
      // 获取y值
       const positionY = -position.y
      // 获取数组长度
       const length = this.themeTopYs.length

       for (let i = 0; i < length - 1; i++) {
         if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
           this.currentIndex = i;
           this.$refs.nav.currentIndex = this.currentIndex
         }
       }
      this.posiscroll(positionY)
    },

    // 添加到购物车
    addcard() {
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.disc = this.goods.desc;
      product.price = this.goods.lowNowPrice;
      product.iid = this.iid;
      // 将商品添加到购物车(store)
      // this.addCart(product).then(res => {
      //   console.log(105, res)
      // })
      this.$store.dispatch('addCart', product).then(res => {
        // this.$toast.show(res)
        this.message = res;
        this.isShow = true
        setTimeout(() => {
          this.message = '';
          this.isShow = false
        }, 1500)
      })
    }
  },
  computed: {},
  components: {
    NavBarItem,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Scroll,
    BackTop,
    Toast
  },
  watch: {},
  // 组件创建出来后(生命周期)
  created () {
    // 保存传入的iid
    this.iid = this.$route.query.iid
    // 获取详情数据
    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages

      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 创建店铺信息
       this.shop = new Shop(data.shopInfo);

       // 详情数据
       this.detailInfo = data.detailInfo

       // 获取参数信息
       this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

       // 获取评论信息
       if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
       }
    })
    // 获取推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
    // 防抖函数
    this.getThemeTopY = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
    },100)
  },

  // 组件挂载到dom上后(生命周期)
  mounted () {
  },

  // 界面发生更新后(生命周期)
  updated () {},
  activated () {}
}

</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 49px);
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>

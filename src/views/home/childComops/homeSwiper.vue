<!--  -->
<template>
  <swiper ref="swiper">
      <swiper-item 
      v-for="(item, index) in banners" 
      :key="index"
      @slideeven="slideLoadOn"
      :count="banners.length"
      >
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from '@/components/common/swiper'
export default {
  name: 'homeSwiper',

  data () {
    return {
      loadCheck: false,
      isLoad: false,
      num: 0,
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
     /**
     * 加载函数
     */
    SwiperImgLoad() {
      if (!this.loadCheck) {
        this.$emit('swiperimgloadevent');
        this.loadCheck = true;
      }
    },
    slideLoadOn() {
      if (this.num < 1) {
        this.$refs.swiper.slideOn();
        this.num++
      }
    },
    // 加载banner图片
    imageLoad() {
      if (this.num < 1) {
        if (!this.isLoad) {
          this.$emit('swiperimageload')
          this.isLoad = true
        }
        this.num++
      }
    }
  },
  computed: {},
  components: {
    Swiper,
    SwiperItem
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
</style>

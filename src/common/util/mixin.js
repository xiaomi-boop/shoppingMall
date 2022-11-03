import BackTop from "@/components/content/backTop/BackTop.vue";

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  created() {
  },
  methods: {
    // 返回顶部
    scrollclick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // 监听滚动
    posiscroll(positionY) {
      // 监听返回顶部图片显示，大于1000
      this.isShowBackTop = positionY > 1000
    }
  }
}
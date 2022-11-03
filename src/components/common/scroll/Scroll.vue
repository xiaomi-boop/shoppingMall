<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: '',

  data () {
    return {
      scroll: ''
    }
  },
  props: {
    probeType: {
      type: Number,
      dafault: 0
    },
    pullUpLoad: {
      type: Boolean,
      dafault: false
    }
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp(); 
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  },
  computed: {},
  components: {},
  watch: {},
  // 组件创建出来后(生命周期)
  created () {},

  // 组件挂载到dom上后(生命周期)
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType,
      mouseWheel: true, 
      click: true, 
      tap: true
    })
    /**
     * 监听滚动的位置
     * 2.监听手指滚动，手指离开则不监听
     * 3.所有情况下都监听滚动
     */
    if (this.probeType ==2 || this.probeType == 3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('posiscroll', position)
      })
    }
    // 监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingup')
      })
    }
   
    // 将this.scroll导出去
    this.$store.commit('scroll', this.scroll)
  },

  // 界面发生更新后(生命周期)
  updated () {},
  activated () {}
}

</script>
<style scoped>

</style>

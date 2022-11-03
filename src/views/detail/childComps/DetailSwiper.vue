<!--  -->
<template>
  <swiper ref="swiper" class="detail-swiper">
    <swiper-item 
    v-for="(item, index) in topimages" 
    :key="index" 
    >
      <img :src="item" alt="" @load="imgLoad">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index.js";

import { debounce } from "@/common/util/util.js";
export default {
  name: '',

  data () {
    return {
    }
  },
  props: {
    // banner图片展示
    topimages: {
      type: Array,
      default() {
        return []
      }
    },
    
  },
  methods: {
    imgLoad() {
      this.$store.state.scroll.refresh();
      this.$refs.swiper.slideOn()
      // debounce(this.$refs.swiper.slideOn, 200)
    }
  },
  computed: {},
  components: {
    Swiper,
    SwiperItem
  },
  watch: {},
  // 组件创建出来后(生命周期)
  created () {
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
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>

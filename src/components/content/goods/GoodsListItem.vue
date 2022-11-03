<!--  -->
<template>
  <div class="gooditem" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="text">
      <p>{{gooditem.title}}</p>
      <span class="price">{{gooditem.price}}</span>
      <span class="cfav">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
import {debounce} from '@/common/util/util.js'
export default {
  name: '',

  data () {
    return {
    }
  },
  props: {
    gooditem: {
      type: Object,
      dafault() {
        return {}
      }
    }
  },
  methods: {
    // 监听图片加载完成
    imageLoad() {
      // 重新加载滚动条
        const refreshs = this.$store.state.scroll.refresh();
      // const refresh = debounce(refreshs, 50)
      // console.log(33, refresh)
    },
    // 点击跳转到详情
    itemClick() {
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.gooditem.iid
        }
      })
    }

  },
  computed: {
    showImage() {
      return this.gooditem.img || this.gooditem.image || this.gooditem.show.img
    }
  },
  components: {},
  watch: {
  },

  // beforeRouteLeave(to, from, next) {
  //   console.log(61, to, from, this)
  // },
  // 组件创建出来后(生命周期)
  created () {},

  // 组件挂载到dom上后(生命周期)
  mounted () {
  },

  // 界面发生更新后(生命周期)
  updated () {},
  activated () {},
}

</script>
<style scoped>
.gooditem {
  width: 48%;
  position: relative;
  padding-bottom: 1.68rem;
}

.gooditem img {
  width: 100%;
  border-radius: 0.21rem;
}
.text {
  font-size: 0.64rem;
  text-align: center;
  position: absolute;
  bottom: 0.21rem;
  left: 0;
  right: 0;
}
.text p {
  /* 标题 */
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
}
.price {
  /* 价格 */
  color: #ff5777;
  margin-right: 0.25rem;
}

.cfav::before {
  display: inline-block;
  content: "";
  background: url("~assets/img/common/collect.svg") 0 0/0.6rem 0.6rem;
  position: relative;
  top: 0.04rem;
  right: 0.08rem;
  height: 0.6rem;
  width: 0.6rem;
}
</style>

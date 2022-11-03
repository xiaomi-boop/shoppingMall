<!--  -->
<template>
  <div class="cart-lefts">
    <!-- 左侧导航栏 -->
    <ul>
      <li 
      v-for="(item, index) in category" 
      :key="index" 
      @click="itemClick(index)"
      :class="{cartcolor:curindex == index  }"
      >
      {{item.title}}
      </li>
    </ul>

    <!-- 右侧分类 -->
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      data: '',
      curindex: 0
    }
  },
  props: {
    category: {
      type: Array,
      dafault() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.curindex = index
      this.$emit('leftclick', this.category[index].maitKey, this.category[index].miniWallkey)
    }
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

.cart-lefts ul {
  list-style:none;
  width: 100%;
  flex-direction:column;
  padding: 0px;
  margin: 0px;
}
.cart-lefts ul li {
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  text-align: center;
}
.cartcolor {
  color: #009999;
  background-color: #fff;
}
</style>

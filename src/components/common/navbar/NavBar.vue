<!--  -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
     <div class="center">
      <slot name="center"></slot>
    </div>
     <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',

  data () {
    return {
    }
  },

  methods: {},
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
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1ox 1px rgba(100, 100, 100, 0.1);
  }
  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>

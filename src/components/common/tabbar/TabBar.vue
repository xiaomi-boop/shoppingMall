<!--  -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      name: "TabBar"
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
#tab-bar {
  display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100,100,100,0.1);
    font-size: 14px;
  }
</style>

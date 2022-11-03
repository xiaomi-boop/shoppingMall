<!--  -->
<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: '',

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
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
  .back-top img {
    width: 40px;
  }
</style>

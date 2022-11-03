<!--  -->
<template>
  <div>
    <div v-if="isChecked == false" class="check-button">
      <img src="~assets/img/cart/no.svg" alt="">
    </div>
    <div v-else class="check-button">
      <img src="~assets/img/cart/yes.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
    }
  },
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  },
  methods: {
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
.check-button {
  width: 20px;
}
.check-button img {
  width: 20px;
}
</style>

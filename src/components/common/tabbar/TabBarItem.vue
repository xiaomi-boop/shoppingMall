<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="slot-ico"></slot>
    </div>
    <div v-else>
      <slot name="slot-active-ico"></slot>
    </div>
    <div>
      <slot name="slot-name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
  },
  props: {
    path: String,
    activeColor: {
      path: String,
      default: 'red'
    }
  },
  data () {
    return {
      // isActive: false
    }
  },
  methods: {
    itemClick () {
      this.isActive = !this.isActive
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    // AxtiveColor () {
    //   if (this.$route.path.indexOf(this.path) !== -1) {
    //     return this.isActive ? {color: this.activeColor} : {}
    //   }
    // },
  },
  components: {},
  watch: {},
  // 组件创建出来后(生命周期)
  created () {
  },

  // 组件挂载到dom上后(生命周期)
  mounted () {}


}
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.isActive {
  color: cadetblue;
}
</style>

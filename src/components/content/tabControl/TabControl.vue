<!--  -->
<template>
  <div class="control">
    <div 
    v-for="(item, index) in title" 
    :key="index" 
    class="title"
    :class="{active: index == currentIndex}"
    @click="itemclick(index)"
    >
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      dafault() {
        return []
      }
    }
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index
      this.$emit('tabclick', index)
      // this.$store.state.scroll.events
    }
  }
}

</script>
<style scoped>
.control {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}
.title {
  flex: 1;
}
.active {
  color: #009999;
}

.active span {
  border-bottom: 1.5px solid #009999;
}
</style>

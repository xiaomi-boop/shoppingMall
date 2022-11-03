<!--  -->
<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',

  data () {
    // return {
    //   message: '',
    //   isShow: false
    // }
  },
  props: {
    message: {
      type: String
    },
    // time: {
    //   type: Boolean,
    //   default: false
    // },
    isShow: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    // show(message) {
    //   this.message = message
    //   this.isShow = true
    //   setTimeout(() => {
    //   this.isShow = false;
    //   this.message = '';
    //   }, this.time)
    // }
  },
  computed: {
  },
  components: {},
}

</script>
<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 30%;
    margin:auto;
    /* transform: translate(-50%, -50%); */
    padding: 8px 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.75);
  }
</style>

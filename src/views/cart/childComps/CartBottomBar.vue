<!--  -->
<template>
  <div id="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click="buttonClick"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计:{{totalPrice}}
    </div>

    <div class="calculate">
      去计算:({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton.vue";
export default {
  name: '',

  data () {
    return {
    }
  },

  methods: {
    buttonClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        })
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        })
      }
    }
  },
  computed: {
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((pre, item) => {
        return pre + item.price * item.count
      },0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      return !(this.$store.state.cartList.length <= 0 || this.$store.state.cartList.find(item => item.checked == false))
    }
  },
  components: {
    CheckButton
  },
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
  #bottom-bar {
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
  }
  .check-content {
    display: flex;
    font-size: 14px;
    flex: 1;
  }
  .check-button {
    line-height: 47px;
    margin: 0px 5px 0px;
  }
  .price {
    margin-left: 20px;
    width: 35%;
    font-size: 13px;
    text-align: center;
  }

  .calculate {
    background-color: red;
    width: 30%;
    text-align: center;
    color: #ffffff;
    font-size: 15px;
  }
</style>

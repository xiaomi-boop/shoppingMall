<!--  -->
<template>
  <div class="cart_list_item">
    <div class="item-selector">
      <check-button
        @click="checkClick"
        :is-checked="product.checked"
        ref="checkButton"
      />
    </div>
    <div class="item_img" @click="checkClick">
      <img :src="product.image" alt="" />
    </div>
    <div class="item_info" @click="infoClick(item)">
      <p class="item_title">{{ product.title }}</p>
      <p class="item_desc">{{ product.disc }}</p>
      <span class="item_price">￥{{ product.price }}</span>
      <span class="item_count">x{{ product.count }}</span>
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
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
  },
  methods: {
    checkClick() {
      console.log(45, this.product.checked);
      // this.product.checked = !this.product.checked
    },
    //信息点击事件
    infoClick(product) {
      this.$router.push("/detail/" + product.iid);
    }
  },
  computed: {},
  components: {
    CheckButton,
  },
  watch: {},
  // 组件创建出来后(生命周期)
  created () {},

  // 组件挂载到dom上后(生命周期)
  mounted () {
  },

  // 界面发生更新后(生命周期)
  updated () {},
  activated () {}
}

</script>
<style scoped>
.cart_list_item {
  width: 100%;
  height: 5.5rem;
  border-bottom: 0.04rem solid rgba(128, 128, 128, 0.4);
  display: flex;
  padding: 0.4rem;
  padding-left: 0rem;
  position: relative;
  left: 0;
  right: 0;
}

.item_img {
  width: 3.5rem;
  height: 100%;
  flex: 1;
}
.item_img img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
  margin-left: 0.2rem;
}

.item_info {
  position: relative;
  width: calc(100% - 3.5rem - 1.2rem - 0.4rem);
  margin-left: 0.6rem;
}
.item_info p {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_title {
  font-size: 0.75rem;
  padding-bottom: 0.5rem;
  margin: 0px;
}
.item_desc {
  font-size: 0.6rem;
  color: gray;
  margin: 0px;
}
.item_price {
  position: absolute;
  left: 0;
  bottom: 0.4rem;
  font-size: 0.75rem;
  color: orangered;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item_count {
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
  font-size: 0.75rem;
}
</style>

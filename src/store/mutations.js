import { ADD_CARTCOUNT, ADD_CARTLIST, CHANGE_UID } from "./mutations_type";

export default {
  slideCountChange(state, num) {
    console.log(5, state, num)
    state.slideCount += num;
  },
  [ADD_CARTCOUNT](state, payload) {
    console.log(9, state, payload)
    payload.count += 1;
  },
  [ADD_CARTLIST](state, payload) {
    console.log(13, state, payload)
    state.cartList.push(payload);
  },
  [CHANGE_UID](state, payload) {
    console.log(17, state, payload)
    state.uid = payload;
  },
  // 获取scroll对象
  scroll(state, scroll) {
    state.scroll = scroll;
  },
   // 添加商品信息
   addCounter(state, payload) {
     payload.count++;
   },
   addToCart(state, payload) {
     state.cartList.push(payload)
   }
};

import { createStore } from 'vuex'
import actions from "./actions";
import mutations from "./mutations.js";
import getters from "./getters.js"

const state = {
  slideCount: 0,
  cartList: [],
  uid: "",
  scroll: ''
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})

import { ADD_CARTCOUNT, ADD_CARTLIST } from "./mutations_type";

export default {
  ChangeCart(context, payload) {
    return new Promise((reslove, reject) => {
      let oldCart = null;
      for (const i of context.state.cartList) {
        if (i.iid == payload.iid) {
          oldCart = i;
          break;
        }
      }
      if (oldCart) {
        context.commit(ADD_CARTCOUNT, oldCart);
        reject();
      } else {
        payload.checked = true;
        payload.count = 1;
        context.commit(ADD_CARTLIST, payload);
        reslove();
      }
    });
  },
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      const oldproduct = context.state.cartList.find(item => item.iid == payload.iid);
      if (oldproduct) {
        // oldproduct.count += 1;
        context.commit('addCounter', oldproduct)
        resolve('商品加1')
      } else {
        payload.count = 1;
        payload.checked = true; // 是否选中商品
        context.commit('addToCart', payload)
        resolve('商品添加成功')
      }
    })
  }
};

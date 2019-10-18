import { createReducer } from "../../common/util/reducerUtil";
import { ADD_TO_CART, UPDATE_TO_CART_ITEM } from "./cartConstants";

const initialState = [];

export const addToCart = (state, payload) => {
  return [...state, Object.assign({}, payload)];
};

export const updateToCartItem = (state, payload) => {

 //find index here based on matching SKU
 //replace

  let targetIndex = state.findIndex( item =>item.item.product_sku === payload.item.product_sku)

  state[targetIndex].item["order_quantity"] = payload.item.order_quantity;

  return [...state];

  
};

export default createReducer(initialState, {
  [ADD_TO_CART]: addToCart,
  [UPDATE_TO_CART_ITEM]: updateToCartItem
});

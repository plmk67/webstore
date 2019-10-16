import { ADD_TO_CART } from "./cartConstants";
import { UPDATE_TO_CART_ITEM } from "./cartConstants";

export const addToCart = cartItem => {
  return {
    type: ADD_TO_CART,
    payload: cartItem
  };
};

export const updateToCartItem = cartItem => {
  return {
    type: UPDATE_TO_CART_ITEM,
    payload: cartItem
  };
};

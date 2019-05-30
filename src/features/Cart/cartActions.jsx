import {ADD_TO_CART} from './cartConstants'

export const addToCart = (cartItem) => {
    return {
        type: ADD_TO_CART,
        payload: cartItem
    }
}
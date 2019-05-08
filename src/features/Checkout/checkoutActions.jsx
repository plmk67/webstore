import {ADD_TO_CART} from './checkoutConstants'

export const addToCart = (orderItem) => {
    return {
        type: ADD_TO_CART,
        payload: orderItem
    }
}
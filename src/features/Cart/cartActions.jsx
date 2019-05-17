import {ADD_TO_CART} from './cartConstants'

export const addToCart = (orderItem) => {
    return {
        type: ADD_TO_CART,
        payload: orderItem
    }
}
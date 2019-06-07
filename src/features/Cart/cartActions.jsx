import {ADD_TO_CART} from './cartConstants'
import {UPDATE_CART} from './cartConstants'

export const addToCart = (cartItem) => {
    return {
        type: ADD_TO_CART,
        payload: cartItem
    }
}

export const updateCart = (cartItem) => {
    return {
        type: UPDATE_CART,
        payload: cartItem
    }
}
import {ADD_TO_CHECKOUT} from './checkoutConstants'

export const addToCheckout = (order) => {
    return {
        type: ADD_TO_CHECKOUT,
        payload: order
    }
}
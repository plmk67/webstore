import {ADD_TO_CHECKOUT} from './checkoutConstants'

export const addToCheckout = (checkoutItem) => {
    return {
        type: ADD_TO_CHECKOUT,
        payload: checkoutItem
    }
}
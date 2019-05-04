import {ADD_TO_CART} from './productsConstants'

export const addToCart = (event) => {
    return  {
        type: ADD_TO_CART,
        payload: event
    }              
}
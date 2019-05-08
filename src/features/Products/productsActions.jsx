import {ADD_TO_CART2} from './productsConstants'

export const addToCart2 = (event) => {
    return  {
        type: ADD_TO_CART2,
        payload: event
    }              
}
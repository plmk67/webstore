import { createReducer } from '../../common/util/reducerUtil'
import { ADD_TO_CHECKOUT } from './checkoutConstants'

const initialState = [];

export const addToCheckout = (state, payload) => {
    return [...state, Object.assign({}, payload)]
}

export default createReducer(initialState, {
    [ADD_TO_CHECKOUT]: addToCheckout
})
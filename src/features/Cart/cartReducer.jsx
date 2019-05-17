import {createReducer} from '../../common/util/reducerUtil'
import { ADD_TO_CART } from './cartConstants'

const initialState = [];

export const addToCart = (state, payload) => {
    return [...state, Object.assign({}, payload)]
}

export default createReducer(initialState, {
    [ADD_TO_CART]: addToCart
})
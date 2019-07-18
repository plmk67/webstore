import { createReducer } from '../../common/util/reducerUtil'
import { ADD_TO_CART, UPDATE_TO_CART_ITEM  } from './cartConstants'

const initialState = [];

export const addToCart = (state, payload) => {
    return [...state, Object.assign({}, payload)]
}

export const updateToCartItem = (state, payload)=> {
    
    let prevState = state.filter(item => item.item.product_sku !== payload.item.product_sku)

    let cartItem= state.filter(item => item.item.product_sku === payload.item.product_sku)

    cartItem[0].item['order_quantity'] = payload.item.order_quantity


    return [...prevState, ...cartItem]
}

export default createReducer(initialState, {
    [ADD_TO_CART]: addToCart,
    [UPDATE_TO_CART_ITEM]: updateToCartItem
})
import { combineReducers } from 'redux'
import productsReducer from '../../features/Products/productsReducer'
import cartReducer from '../../features/Cart/cartReducer'
import checkoutReducer from '../../features/Checkout/checkoutReducer'

const rootReducer = combineReducers({
    //Product Info
    //can clean up and retrieve from Firebase directly
    product: productsReducer,

    //Combine cart items
    cart: cartReducer,
    checkout: checkoutReducer
})

export default rootReducer
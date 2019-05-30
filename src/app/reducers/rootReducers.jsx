import { combineReducers } from 'redux'
import productsReducer from '../../features/Products/productsReducer'
import cartReducer from '../../features/Cart/cartReducer'
import checkoutReducer from '../../features/Checkout/checkoutReducer'

const rootReducer = combineReducers({
    product: productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer
})

export default rootReducer
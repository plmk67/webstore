import { combineReducers } from 'redux'
import productsReducer from '../../features/Products/productsReducer'
import checkoutReducer from '../../features/Checkout/checkoutReducer'

const rootReducer = combineReducers({
    product: productsReducer,
    order: checkoutReducer
})

export default rootReducer
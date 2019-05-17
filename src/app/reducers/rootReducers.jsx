import { combineReducers } from 'redux'
import productsReducer from '../../features/Products/productsReducer'
import cartReducer from '../../features/Cart/cartReducer'

const rootReducer = combineReducers({
    product: productsReducer,
    order: cartReducer
})

export default rootReducer
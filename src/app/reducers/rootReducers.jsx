import { combineReducers } from 'redux'
import productsReducer from '../../features/Products/productsReducer'

const rootReducer = combineReducers({
    product: productsReducer
})

export default rootReducer
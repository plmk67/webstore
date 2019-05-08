import {createReducer} from '../../common/util/reducerUtil'
import { ADD_TO_CART } from './checkoutConstants'

const initialState = [
    {
        product_sku: 'SKU 002',
        product_name: 'Oatmeal Melange Socks',
        product_price: '$12.00',
        product_description: 'Featuring a unique slubby texture from cotton and nylon blend, we have found the perfect thickness that is comfortable for all seasons. Our Oatmeal Melange Socks are designed for everyday use and will withstand many cycles of washing and drying.',
        bulletpoint: ['Cotton / Nylon blend', 'Elastic ribbed', 'One size (US 6-10)'
        ],
        product_image: ['https://cdn.shopify.com/s/files/1/0818/5483/products/DSC04747-Edit-2_1024x1024.jpg?v=1496369761', 'https://cdn.shopify.com/s/files/1/0818/5483/products/DSC04753-Edit_grande.jpg?v=1496369774']
      }
];

export const addToCart = (state, payload) => {
    return [...state, Object.assign({}, payload)]
}

export default createReducer(initialState, {
    [ADD_TO_CART]: addToCart
})
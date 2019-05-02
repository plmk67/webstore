import { createReducer } from '../../common/util/reducerUtil'
import { CREATE_EVENT } from './productsConstants'

const initialState = [{
  product_sku: 'SKU 001',
  product_name: 'Deadstock Koh-I-Noor Rapidomatic Pencil - 0.3mm',
  product_price: '$20.00',
  product_description: 'The vintage 90s Koh-I-Noor Rapidomatic mechanical pencils were an industry standard instrument used by design students, drafters, and engineers. Known for its balance and simple aesthetic, these deadstock Rapidomatic pencils feature a diamond-cut grip area, lead degree indicator and a red hexagonal body.',
  bulletpoint: [{
    point1: 'Model Number: 5633',
    point2: 'Lead Diameter: 0.3mm',
    point3: 'Deadstock, Brand new in original package',
  }],
  product_image: 'https://cdn.shopify.com/s/files/1/0818/5483/products/DSC05636_1024x1024.jpg?v=1496378162'
},
{
  product_sku: 'SKU 002',
  product_name: 'Deadstock Koh-I-Noor RDeadstock Swedish Military Leather Belt',
  product_price: '$100.00',
  product_description: 'Deadstock Swedish Miltary Belt made from Post World War II era. Featuring natural tan leather with simple Swedish military stamp logo, this durable military belt will soften and age (patina) beautifully as you wear it with care. An essential belt with history that will serve you for years.',
  bulletpoint: [{
    point1: 'Natural tan leather',
    point2: 'Solid brass hardware',
    point3: '110 fits 28"- 34" inch waist',
    point4: '120 fits 30 - 36" inch waist',
    point5: 'Due to the age of the product, some items may have blemishes and oxidization on surface'
  }],
  product_image: 'https://cdn.shopify.com/s/files/1/0818/5483/products/R0000436-Edit_1024x1024.jpg?v=1496215388'
}]

  export const createEvent = (state, payload) => {
    //review
    return [...state, Object.assign({}, payload.event)]
}

export default createReducer (initialState, {[CREATE_EVENT]: createEvent})
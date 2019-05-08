import { createReducer } from '../../common/util/reducerUtil'


const initialState = [{
  product_sku: 'SKU 001',
  product_name: 'Deadstock Koh-I-Noor Rapidomatic Pencil',
  product_price: '$20.00',
  product_description: 'The vintage 90s Koh-I-Noor Rapidomatic mechanical pencils were an industry standard instrument used by design students, drafters, and engineers. Known for its balance and simple aesthetic, these deadstock Rapidomatic pencils feature a diamond-cut grip area, lead degree indicator and a red hexagonal body.',
  bulletpoint: [ 'Model Number: 5633','Lead Diameter: 0.3mm','Deadstock, Brand new in original package'],
  product_image: ['https://cdn.shopify.com/s/files/1/0818/5483/products/DSC05636_1024x1024.jpg?v=1496378162','https://cdn.shopify.com/s/files/1/0818/5483/products/DSC05640-Edit_grande.jpg?v=1496378162','https://cdn.shopify.com/s/files/1/0818/5483/products/DSC05633-Edit_grande.jpg?v=1496378178']
},
{
  product_sku: 'SKU 002',
  product_name: 'Deadstock Swedish Military Leather Belt',
  product_price: '$100.00',
  product_description: 'Deadstock Swedish Miltary Belt made from Post World War II era. Featuring natural tan leather with simple Swedish military stamp logo, this durable military belt will soften and age (patina) beautifully as you wear it with care. An essential belt with history that will serve you for years.',
  bulletpoint: ['Natural tan leather',
  'Solid brass hardware',
  '110 fits 28"- 34" inch waist',
  '120 fits 30 - 36" inch waist',
  'Due to the age of the product, some items may have blemishes and oxidization on surface'
 ],
  product_image: ['https://cdn.shopify.com/s/files/1/0818/5483/products/R0000436-Edit_1024x1024.jpg?v=1496215388','https://cdn.shopify.com/s/files/1/0818/5483/products/R0000438-Edit_grande.jpg?v=1496215403','https://cdn.shopify.com/s/files/1/0818/5483/products/R0000447-Edit_grande.jpg?v=1496215412']
},
{
  product_sku: 'SKU 003',
  product_name: 'Oatmeal Melange Socks',
  product_price: '$12.00',
  product_description: 'Featuring a unique slubby texture from cotton and nylon blend, we have found the perfect thickness that is comfortable for all seasons. Our Oatmeal Melange Socks are designed for everyday use and will withstand many cycles of washing and drying.',
  bulletpoint: ['Cotton / Nylon blend', 'Elastic ribbed', 'One size (US 6-10)'
  ],
  product_image: ['https://cdn.shopify.com/s/files/1/0818/5483/products/DSC04747-Edit-2_1024x1024.jpg?v=1496369761', 'https://cdn.shopify.com/s/files/1/0818/5483/products/DSC04753-Edit_grande.jpg?v=1496369774']
}]

export default createReducer (initialState, {})
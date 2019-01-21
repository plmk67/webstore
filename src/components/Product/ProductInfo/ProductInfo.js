import React from 'react';
import classes from './ProductInfo.module.css';
import ProductSize from './ProductSize/ProductSize';

const Quantity = {
    fontSize:"14px",
    fontWeight:"500"
}

const ProductInfo = (props) => (
    
    <div className={classes.ProductDesc}>
        <h3>{props.name}</h3>
        <p><strong>${props.price}</strong></p>
        <ProductSize/>
        <p style={Quantity}>Quantity: {props.inventory}</p>
        <button type="submit">Add to Cart</button>
        <p>{props.description}</p>

        
    </div>
   
);

export default ProductInfo;
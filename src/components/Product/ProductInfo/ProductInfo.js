import React, { Component } from 'react';
import classes from './ProductInfo.module.css';
import ProductSize from './ProductSize/ProductSize';
import ProductDesc from './ProductDesc/ProductDesc';

const Quantity = {
    fontSize:"14px",
    fontWeight:"500"
}

const Cart = {
    fontSize:"15px",
    fontWeight:"600"
}

class ProductInfo extends Component {
    render() {
        return (
            <div className={classes.ProductDesc}>
                <h3>Wool Watch Cap - Blue</h3>
                <p><strong>$50.00</strong></p>
                <ProductSize/>
                <p style={Quantity}>Quantity</p>
                <p style={Cart}>Add to Cart</p>
                <ProductDesc />
                
            </div>
        )
    };
};

export default ProductInfo;
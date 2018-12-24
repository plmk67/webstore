import React from 'react';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import classes from './Product.module.css';

const product= (props) => (
    <div className={classes.Product}>
        <ProductGallery />
        <ProductInfo />
    </div>
)

export default product;
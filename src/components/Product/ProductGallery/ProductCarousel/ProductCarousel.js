import React, { Component } from 'react';
import classes from './ProductCarousel.module.css';


class ProductCarousel extends Component {
    render() {
        return(
            <div className={classes.ProductCarousel}>
                <img src="https://cdn.shopify.com/s/files/1/0818/5483/products/R0002076-Edit_1024x1024.jpg?v=1507364750" alt="hat2"/>
                <img src="https://cdn.shopify.com/s/files/1/0818/5483/products/R0003299-Edit_1024x1024.jpg?v=1507364750" alt="hat3"/>
                <img src="https://cdn.shopify.com/s/files/1/0818/5483/products/R0003303-Edit_1024x1024.jpg?v=1507364750" alt="hat3"/>
            </div>
        )
    }
};

export default ProductCarousel;
import React, { Component } from 'react';
import classes from './ProductGallery.module.css'
import ProductCarousel from './ProductCarousel/ProductCarousel';




class productGallery extends Component {
 
  render() {
 
    return (
        <div className={classes.ProductGallery}>
            <img    src='https://cdn.shopify.com/s/files/1/0818/5483/products/R0003303-Edit_1024x1024.jpg?v=1507364750' alt="hat" />   
            <ProductCarousel/>
        </div>
    );
  }
 
}
export default productGallery;
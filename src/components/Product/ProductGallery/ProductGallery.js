import React, { Component } from 'react';
import classes from './ProductGallery.module.css'
import ProductCarousel from './ProductCarousel/ProductCarousel';
import Modal from '../../UI/Modal/Modal';

class productGallery extends Component {
  state = {
    imageModal: false,
    data: []
  }

  updateModal = () => {
    const currentModal = this.state.imageModal;
    if(currentModal === false) {
        this.setState({imageModal: true});
    } else {
        this.setState({imageModal: false});
    }
  }

  
  render() {

    return (
        <div className={classes.ProductGallery}>
            <Modal 
              show={this.state.imageModal}
              click={this.updateModal} 
              image={'https://cdn.shopify.com/s/files/1/0818/5483/products/R0003303-Edit_1024x1024.jpg?v=1507364750'}/>
            <div>
              <img           src='https://cdn.shopify.com/s/files/1/0818/5483/products/R0003303-Edit_1024x1024.jpg?v=1507364750' 
              alt="hat" 
              onClick={this.updateModal}
              />   
            </div>
            <ProductCarousel />
        </div>
    );
  }
 
}
export default productGallery;
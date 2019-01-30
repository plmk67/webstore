import React, { Component } from 'react';
import classes from './ProductGallery.module.css'
import ProductCarousel from './ProductCarousel/ProductCarousel';
import Modal from '../../UI/Modal/Modal';

class productGallery extends Component{
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

  render(images) {

    return (
        <div className={classes.ProductGallery}>
            <Modal 
              show={this.state.imageModal}
              click={this.updateModal} 
              image={this.images}/>
            <div>
              <img           
              src={this.images}
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
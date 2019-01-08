import React, { Component } from 'react';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import classes from './Product.module.css';
import axios from 'axios';


class product extends Component {

    state = {
        data: []
    }

    componentDidMount () {
        axios.get('https://ecommerce-1f552.firebaseio.com/Product.json')
        .then(response => {
          this.setState( { data: response.data } 
          );
        } )
        .catch( error => console.log(error))
      }
     

    render () {

        console.log(this.state.data.price)  

        return (
        <div className={classes.Product}>
            <ProductGallery />
            <ProductInfo 
                description = {this.state.data.description}
                description_hightlight ={this.state.data.description_highlight}
                inventory = {this.state.data.inventory}
                name = {this.state.data.name}
                price = {this.state.data.price}/>
        </div>
        )
    }
}
    

export default product;
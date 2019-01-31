import React, { Component } from 'react';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import classes from './Product.module.css';
import axios from 'axios';


class product extends Component {

    state = {
        data: []
    }

    //fetching info from Firebase and pushing into State
    componentDidMount () {
        axios.get('https://ecommerce-1f552.firebaseio.com/Product/-LXVKBL6G739QGVV07Et.json')
        .then(response => {
          console.log(response)
          this.setState( { data: response.data } 
          );
        } )
        .catch( error => console.log(error))
      }
     
    //from state we draw the data and push it into props for ProductInfo component to receive
    render () {
        return (
        <div className={classes.Product}>
            <ProductGallery 
                images={this.state.data.images}/>
            <ProductInfo 
                description = {this.state.data.description}
                name = {this.state.data.name}
                price = {this.state.data.price}
                />
        </div>
        )
    }
}
    

export default product;
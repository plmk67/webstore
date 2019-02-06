import React, { Component } from 'react';
import classes from './ProductPage.module.css';
import axios from 'axios';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail'
import { Redirect } from 'react-router-dom'

import Aux from '../../hoc/Aux'


class Product extends Component {
    state = {
        products: [],
        redirect: false
    }

    componentDidMount () {
        axios.get('https://ecommerce-1f552.firebaseio.com/Product.json')
        .then(response => {
          
         const fetchedProduct = [];
        
         //TODO figure out how this bypassed the id issue with Firebase
         for (let key in response.data) {
            fetchedProduct.push({
              ...response.data[key],
              id: key
            });
         }

         this.setState({products: fetchedProduct})
         console.log(this.state.products)
        } )
        .catch( error => console.log(error))
      }

    //TODO figure out why ID came back with Apostrophes
    delete(id){
        const idraw = {id};
        const idcode = JSON.stringify(idraw.id).replace(/"/g,'')
        let url = 'https://ecommerce-1f552.firebaseio.com/Product/'+ idcode + '.json';
    
        console.log(url)
        axios.delete(url)
    }     

    handleOnClick = () => {
        this.setState({redirect: true})    
    }


    render () {    
        if(this.state.redirect) {
            return <Redirect to='/product' />;
        }

        return(
            <Aux>
                {this.state.products.map( product => (
                    <Aux>
                    <ProductThumbnail 
                        id={product.id}
                        src={product.images}
                        alt={product.name}
                        price={product.price}
                        name={product.name}
                        clicked={this.handleOnClick}
                        />
                        {/* <button 
                        id={product.id} 
                        key={product.id} 
                        onClick={()=> this.delete(product.id)}>Delete</button> */}
                    </Aux>
                ))}
            </Aux>
        );
    }
}

export default Product;


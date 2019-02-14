import React, { Component } from 'react';
import axios from 'axios';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail'
import Aux from '../../hoc/Aux'


class EditProduct extends Component {
    state = {
        products: [],
    }

    //get request to grab all product data
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

    render () {    

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
                        />
                        
                        <button 
                        id={product.id} 
                        key={product.id} 
                        onClick={()=> this.delete(product.id)}>Delete</button>
                    </Aux>
                ))}
            </Aux>
        );
    }
}

export default EditProduct;


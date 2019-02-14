import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux';

class Inventory extends Component {
    state = {
        products: [],
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

    render(){

        return(
            <Aux>
                <header>Inventory</header>
                 {this.state.products.map( product => (
                    <div>
                        <img key={product.id} alt={product.name} src={product.images} style={{width: '100px'}}></img>
                        <label>{product.name}</label>
                        <input placeholder={product.inventory}/>
                    </div>
                 ))}
            </Aux>
            )}
}
export default Inventory
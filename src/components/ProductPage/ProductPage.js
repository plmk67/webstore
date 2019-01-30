import React, { Component } from 'react';
import classes from './ProductPage.module.css';
import axios from 'axios';


class Product extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        axios.get('https://ecommerce-1f552.firebaseio.com/Product.json')
            .then(res => {
                const fetchedProducts = [];

                for (let key in res.data) {
                    fetchedProducts.push({
                        ...res.data[key],
                        id: key});
                    }
                    console.log(fetchedProducts)
                    this.setState({products: fetchedProducts})
                })
                .catch( err => {
                   console.log(err)
                })
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
            <div className={classes.ProductPage}>
               {this.state.products.map(product => (
                    <div className={classes.ProductItem}>
                        <ul>
                            <li>Product Name: {product.name}</li>
                            <li>Size: {product.size}</li>
                        </ul>
                        <button 
                        id={product.id} 
                        key={product.id} 
                        onClick={()=> this.delete(product.id)}>Delete</button>
                    </div>
                    
               ))}
            </div>
        );
    }
}

export default Product;


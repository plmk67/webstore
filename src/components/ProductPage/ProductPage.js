import React, { Component } from 'react';
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
    //deleting specific Object
    //if i want to use a delete function, how to do I pass an ID into it
                

    delete(id){
        const idraw = {id};
        const idcode = JSON.stringify(idraw.id).replace(/"/g,'')
        let url = 'https://ecommerce-1f552.firebaseio.com/Product/'+ idcode + '.json';
    
        console.log(url)
        axios.delete(url)
    }     

    render () {       
        return(
            <div>
               {this.state.products.map(product => (
                    <button id={product.id} key={product.id} onClick={()=> this.delete(product.id)}>
                    click</button>
               ))}
            </div>
        );
    }
}
                


    

export default Product;


import React, { Component }from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Aux from '../../hoc/Aux';
import StoreTitle from '../StoreTitle/StoreTitle';
import Product from '../Product/Product';
import NewProduct from '../NewProduct/NewProduct';
import ProductPage from '../ProductPage/ProductPage';
import Footer from '../Footer/Footer';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';


class layout extends Component {
    state = {
      products: []
    }

    // fetching info from Firebase and pushing into State
    componentDidMount () {
        axios.get('https://ecommerce-1f552.firebaseio.com/Product.json')
        .then(response => {
          
         const fetchedProduct = [];
        
         //TODO figure out how this bypasses the id
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
            <StoreTitle/>
            <Switch>
                <Route path='/product' exact component={Product}/>
                <Route path='/newproduct' exact component={NewProduct}/>
                <Route path='/productpage' exact component={ProductPage}/>
            </Switch>

            {this.state.products.map( product => (
              <ProductThumbnail 
                id={product.id}
                src={product.images}
                alt={product.name}
                />
            ))}

            <Footer/>
        </Aux>

        )
    }
}
    


export default layout;

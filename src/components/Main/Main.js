import React, { Component }from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Aux from '../../hoc/Aux';
import StoreTitle from '../StoreTitle/StoreTitle';
import Cover from '../Cover/Cover'
import Product from '../Product/Product';
import NewProduct from '../NewProduct/NewProduct';
import ProductPage from '../ProductPage/ProductPage';
import Inventory from '../Inventory/Inventory';
import Admin from '../Admin/Admin';
import Footer from '../Footer/Footer';


class layout extends Component {
    state = {
      products: []
    }

    // fetching info from Firebase and pushing into State
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

    linkHandler () {
        return <Redirect to='/product'/>
    }  
    
    render(){

        return(
       
            <Aux>
                <StoreTitle/>
                    <Switch>
                        <Route path='/' exact component={Cover}/>
                        <Route path='/product/' render={(props) =><Product {...props}/>}/>
                        <Route path='/productpage' exact component={ProductPage}/>
                        
                        {/* Admin Routes  */}
                        <Route path='/admin/' exact component={Admin}/> 
                        <Route path='/admin/inventory' exact component={Inventory}/> 
                        <Route path='/admin/newproduct' exact component={NewProduct}/>
                        {/* <Route path='/admin/edit' exact component={}/>  */}
                    </Switch>
                <Footer/>
            </Aux>
    
        )
    }
}
    


export default layout;

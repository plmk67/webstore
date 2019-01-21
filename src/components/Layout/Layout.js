import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Aux from '../../hoc/Aux';
import StoreTitle from '../StoreTitle/StoreTitle';
import Product from '../Product/Product';
import NewProduct from '../NewProduct/NewProduct';
import ProductPage from '../ProductPage/ProductPage';


const layout = (props) => (
    <Aux>
        <StoreTitle/>
            <Switch>
                <Route path='/product' exact component={Product}/>
                <Route path='/newproduct' exact component={NewProduct}/>
                <Route path='/productpage' exact component={ProductPage}/>
            </Switch>
        <p>footer</p>
    </Aux>
)

export default layout;

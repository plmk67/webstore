import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Aux from '../../hoc/Aux';
import StoreTitle from '../StoreTitle/StoreTitle';
import Product from '../Product/Product';
import NewProduct from '../NewProduct/NewProduct';


const layout = (props) => (
    <Aux>
        <StoreTitle/>
            <Switch>
                <Route path='/product' component={Product}/>
                <Route path='/newproduct' component={NewProduct}/>
            </Switch>
        <p>footer</p>
    </Aux>
)

export default layout;

import React from 'react';
import Aux from '../../hoc/Aux';
import StoreTitle from '../StoreTitle/StoreTitle';
import Product from '../Product/Product';

const layout = (props) => (
    <Aux>
        <StoreTitle/>
        <Product/>
        <p>footer</p>
    </Aux>
)

export default layout;

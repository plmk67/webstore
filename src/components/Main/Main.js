import React, { Component }from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Aux from '../../hoc/Aux';
import StoreTitle from '../StoreTitle/StoreTitle';
import Cover from '../Cover/Cover'
import Product from '../Product/Product';
import NewProduct from '../NewProduct/NewProduct';
import ProductPage from '../ProductPage/ProductPage';
import Inventory from '../Inventory/Inventory';
import Admin from '../Admin/Admin';
import Footer from '../Footer/Footer';
import { itemsFetchData }from '../../actions/items';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';

class layout extends Component {

    componentDidMount() {
        this.props.fetchData('https://ecommerce-1f552.firebaseio.com/Product.json');
        console.log("API called!")
        
    }

    linkHandler () {
        return <Redirect to='/product'/>
    }  
    
    render(){
        
        console.log(this.props.items)

        return(
            <Aux>
                <NavBar/>
                <StoreTitle/>
                    <Switch>
                        <Route path='/' exact component={Cover}/>
                        <Route path='/product' render={(props) =><Product {...props}/>}/>
                        <Route path='/productpage' exact render={(props) => <ProductPage {...props}/>}/>
                        <Route path='/login' component={Login}/>
                        
                        {/* Admin Routes  */}
                        <Route path='/admin' exact component={Admin}/> 
                        <Route path='/admin/inventory' exact component={Inventory}/> 
                        <Route path='/admin/newproduct' exact component={NewProduct}/>
                        {/* <Route path='/admin/edit' exact component={}/>  */}
                    </Switch>
                <Footer/>
            </Aux>
        )
    }
}
    
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

// 1. Send API address to Action.js
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(layout);




import React, { Component } from 'react';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import classes from './Product.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import axios from 'axios';
import { itemsFetchData }from '../../actions/items';

class product extends Component {

    state = {
        data: []
    }

    productId = this.props.location.pathname.substr(this.props.location.pathname.length - 20);

    //fetching info from Firebase and pushing into State
    componentDidMount () {
        axios.get('https://ecommerce-1f552.firebaseio.com/Product/' + this.productId + '.json')
        .then(response => {
          console.log(response)
          this.setState( { data: response.data } 
          );
        } )
        .catch( error => console.log(error))
    }
    
    //need to use Redux version of grabbing ID and display images
     
    //from state we draw the data and push it into props for ProductInfo component to receive
    render () {
        console.log(this.props.items)

        return (
        <Aux>
            <div className={classes.Product}>
                <ProductGallery 
                    images={this.state.data.images}/>
                <ProductInfo 
                    description = {this.state.data.description}
                    name = {this.state.data.name}
                    price = {this.state.data.price}
                    inventory ={this.state.data.inventory}
                /> 
                   
                {/* <p>{this.props.inventory}</p>
                <button onClick={this.props.onAddToCart}>click here to deduct 1 from inventory</button> */}
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>   
                <NavLink to='/productpage'>Back to Main Page</NavLink>    
            </div>
        </Aux>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        items: ownProps.items,
        hasErrored: ownProps.itemsHasErrored,
        isLoading: ownProps.itemsIsLoading
    };
};

// 1. Send API address to Action.js
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(product);

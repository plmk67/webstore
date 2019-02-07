import React, { Component } from 'react';
import ProductGallery from './ProductGallery/ProductGallery';
import ProductInfo from './ProductInfo/ProductInfo';
import classes from './Product.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action'
import axios from 'axios';


class product extends Component {

    state = {
        data: []
    }

    //fetching info from Firebase and pushing into State
    componentDidMount () {
        axios.get('https://ecommerce-1f552.firebaseio.com/Product/-LXVKBL6G739QGVV07Et.json')
        .then(response => {
          console.log(response)
          this.setState( { data: response.data } 
          );
        } )
        .catch( error => console.log(error))
    }

     
    //from state we draw the data and push it into props for ProductInfo component to receive
    render () {
        console.log(this.props.match)

        return (
        
        <div className={classes.Product}>
            <ProductGallery 
                images={this.state.data.images}/>
            <ProductInfo 
                description = {this.state.data.description}
                name = {this.state.data.name}
                price = {this.state.data.price}
                /> 
                <NavLink to='/productpage'>Back to Main Page</NavLink>    
            <p>{this.props.inventory}</p>
            <button onClick={this.props.onAddToCart}>click here to deduct 1 from inventory</button>
        </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        pdt: state.products,
        inventory: state.inventory
    };
};

const mapDispatchToProps = dispatch => { 
    return {
        onTest: () => dispatch({type: actionTypes.TEST}),
        onAddToCart: () => dispatch({type: actionTypes.TEST2})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(product);
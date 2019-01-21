import React, { Component } from 'react';
import axios from 'axios';
// import classes from './NewProduct.css';

class NewProduct extends Component {

    handleSubmit(event) {
        const order = {
            name: 'Hat',
            quantity: 10,
            size: 'one-size'
        }

        //to prevent from infinity loop
        event.preventDefault();

        axios.post('https://ecommerce-1f552.firebaseio.com/Product.json', order)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New Product Name</label>
                <input id="newproduct" name="newproduct" type="text" />
                <button onClick={this.handleSubmit}>Send stuff</button>
            </form>
        )
    }
}

export default NewProduct
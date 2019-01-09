import React, { Component } from 'react';
// import classes from './NewProduct.css';

class NewProduct extends Component {

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
    
        fetch('https://ecommerce-1f552.firebaseio.com/NewProduct', {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>New Product Name</label>
                <input id="newproduct" name="newproduct" type="text" />
            </form>
        )
    }
}

export default NewProduct
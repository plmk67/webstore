import React, { Component } from 'react';
import axios from 'axios';
import classes from './NewProduct.module.css';
import Aux from '../../hoc/Aux';
import Form from '../Form/Form';

class NewProduct extends Component {
    state = {
        name: '',
        price: '',
        size: '',
        description: '',
        images: ''
    }

    formFields = [
        {
            //temporary ID 
            id: Math.random().toString(36),
            name: "Product Name",
            placeholder: "product name",
            type:"text" 
        },

        {
            id: Math.random().toString(36),
            name: "SKU",
            placeholder: "SKU",
            type:"text" 
        },


        {
            id: Math.random().toString(36),
            name: "Price",
            placeholder: "Price",
            type:"text" 
        },

        {
            id: Math.random().toString(36),
            name: "Size",
            placeholder: "Size",
            type:"text" 
        },
        
    ]

    handleSubmit(event) {
        const order = {
            name: this.state.name,
            price: this.state.price,
            size: this.state.size,
            description: this.state.description,
            images: this.state.images
        }

        axios.post('https://ecommerce-1f552.firebaseio.com/Product.json', order)
    }

    inputChangedHandler = ( event, inputIdentifier) => {
        //copy previous state
        const prevState = {...this.state}

        //update into prevState
        prevState[inputIdentifier] = event.target.value;

        console.log(prevState[inputIdentifier])
        

        
    }

    //map out each element for the form

    render() {
        return (
            <Aux>
                <div className={classes.NewProduct}>
                    {this.formFields.map( element => (
                         <Form
                            key={element.id}
                            name={element.name}
                            placeholder={element.placeholder}
                            type={element.type}
                            input={(event)=> this.inputChangedHandler(event,element.name)}
                     />
                    ))}
                    <button onClick={() => this.handleSubmit()}>Create New Product</button>
                </div>
            
           </Aux>
        )
    }
}

export default NewProduct;
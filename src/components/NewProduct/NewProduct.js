import React, { Component } from 'react';
import axios from 'axios';
import classes from './NewProduct.module.css';
import Aux from '../../hoc/Aux';
import Form from '../Form/Form';

class NewProduct extends Component {
    state = {
        name: '',
        sku: '',
        price: '',
        size: '',
        description: '',
        inventory: '',
        image_url: '',
    }

    formFields = [
        {
            //temporary ID 
            id: Math.random().toString(36),
            name: "name",
            placeholder: "product name",
            type:"text" 
        },

        {
            id: Math.random().toString(36),
            name: "sku",
            placeholder: "SKU",
            type:"text" 
        },

        {
            id: Math.random().toString(36),
            name: "price",
            placeholder: "Price",
            type:"text" 
        },

        {
            id: Math.random().toString(36),
            name: "size",
            placeholder: "Size",
            type:"text" 
        },

        {
            //temporary ID 
            id: Math.random().toString(36),
            name: "description",
            placeholder: "product description",
            type:"text" 
        },

        {
            //temporary ID 
            id: Math.random().toString(36),
            name: "inventory",
            placeholder: "quantity",
            type:"number" 
        },

        {
            //temporary ID 
            id: Math.random().toString(36),
            name: "image_url",
            placeholder: "url",
            type:"text" 
        },
        
    ]

    handleSubmit() {
        const order = {
            name: this.state.name,
            sku: this.state.sku,
            price: this.state.price,
            size: this.state.size,
            description: this.state.description,
            inventory: this.state.inventory,
            images: this.state.image_url
        }

        axios.post('https://ecommerce-1f552.firebaseio.com/Product.json', order)
    }

    inputChangedHandler = ( event, inputIdentifier) => {
        //copy previous state
        //update into prevState
    
        this.setState({[inputIdentifier]: event.target.value}) 
        console.log(inputIdentifier)
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

                    <button style={{display: 'flex', alignSelf: 'center'}} onClick={() => this.handleSubmit()}>Create New Product</button>
                </div>
               
           </Aux>
        )
    }
}

export default NewProduct;
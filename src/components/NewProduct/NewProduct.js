import React, { Component } from 'react';
import axios from 'axios';
import classes from './NewProduct.module.css';
import Aux from '../../hoc/Aux';
// import Form from '../Form/Form';
// import Label from '../Label/Label';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


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
        this.setState({[inputIdentifier]: event.target.value}) 
        console.log(inputIdentifier)
    }

    render() {
        return (
            <Aux>
                <Container>
                    <Form>
                        {this.formFields.map( element => (
                            <FormGroup row>
                                <Label for={element.name} sm={2}> {element.name}</Label>
                                <Col sm={10}>
                                    <Input 
                                        type={element.type} 
                                        name={element.name} 
                                        id={element.id} 
                                        placeholder={element.placeholder}
                                        onChange={(event) => this.inputChangedHandler(event, element.name)}
                                        />
                                </Col>
                            </FormGroup>
                        ))}
                        <FormGroup className = 'text-center' > 
                            <Button onClick={() => this.handleSubmit()}>Create New Product</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </Aux>
        )
    }
}

export default NewProduct;
import React, { Component } from 'react';
import axios from 'axios';
import classes from './NewProduct.module.css';
import { Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';


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
           
                <div className={classes.NewProduct}>
                    <Container>
                        <Form>
                            <FormGroup>
                                <Label>Product Name</Label>
                                <Input 
                                    type="text" 
                                    name="product" 
                                    onChange={(event) => this.inputChangedHandler(event, 'name')}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Description</Label>
                                <Input 
                                    type="textarea" 
                                    name="description" 
                                    onChange={(event) => this.inputChangedHandler(event, 'description')}
                                    ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Price</Label>
                                <Input 
                                    type="number" 
                                    name="price"
                                    onChange={(event) => this.inputChangedHandler(event, 'price')}
                                    ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Image URL</Label>
                                <Input 
                                    type="text" 
                                    name="image"
                                    onChange={(event) => this.inputChangedHandler(event, 'image_url')}
                                ></Input>
                            </FormGroup>

                            <FormGroup className = 'text-center' > 
                                <Button onClick={() => this.handleSubmit()}>Create New Product</Button>
                            </FormGroup>
                        </Form>
                    </Container>
                </div>
            
    
        )
    }
}

export default NewProduct;

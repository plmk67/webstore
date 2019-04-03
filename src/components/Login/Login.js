import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import classes from './Login.module.css';
import axios from 'axios';

class Login extends Component {
    state = {
        email:'',
        first_name: '',
        last_name: '',
        address1: '',
        address2: '',
        city: '',
    }

    handleSubmit(){
        const contact_info = {
            email: this.state.email,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
        }

        axios.post('https://ecommerce-1f552.firebaseio.com/Contact.json', contact_info)
    }

    inputChangedHandler = ( event, inputIdentifier) => {    
        this.setState({[inputIdentifier]: event.target.value}) 
        console.log(inputIdentifier)
    }


    render() {
        return(
            <div className={classes.Main}>
                <Form className={classes.Form}>
                    <FormGroup className={classes.FormTitle}>
                        <Label>Contact Information</Label>
                    </FormGroup>
                    <FormGroup className={classes.FormGroup}>
                        <Col>
                            <Input 
                            type="email" 
                            name="email" 
                            id="exampleEmail" 
                            placeholder="Email" 
                            onChange={(event) => this.inputChangedHandler(event, 'email')}/>
                        </Col>
                    </FormGroup>
                    <FormGroup className={classes.FormTitle}>
                        <Label>Shipping Address</Label>
                    </FormGroup>
                    <FormGroup className={classes.FormGroup}>
                        <Col>
                            <Input 
                            type="text" 
                            name="first_name" 
                            id="first_name" 
                            placeholder="First Name"
                            onChange={(event) => this.inputChangedHandler(event, 'first_name')}/> 
                        </Col>
                        <Col>
                            <Input 
                            type="text" 
                            name="last_name" 
                            id="last_name" 
                            placeholder="Last Name"
                            onChange={(event) => this.inputChangedHandler(event, 'last_name')} />
                        </Col>
                    </FormGroup>
                    <FormGroup className={classes.FormGroup}>
                        <Col>
                            <Input 
                            type="text" 
                            name="address" 
                            id="address1" 
                            placeholder="Address"
                            onChange={(event) => this.inputChangedHandler(event, 'address1')} />
                        </Col>
                    </FormGroup>
                    <FormGroup className={classes.FormGroup}>
                        <Col>
                            <Input
                            type="text" 
                            name="address1" 
                            id="address2" 
                            placeholder="Address, Suite, etc. (optional)"
                            onChange={(event) => this.inputChangedHandler(event, 'address2')} />
                        </Col>
                    </FormGroup>
                    <FormGroup className={classes.FormGroup}>
                        <Col>
                            <Input 
                            type="text" 
                            name="city" 
                            id="city" 
                            placeholder="City"
                            onChange={(event) => this.inputChangedHandler(event, 'city')} />
                        </Col>
                    </FormGroup>
                    <FormGroup className={classes.FormGroup}>
                        <Col>
                            <Input 
                            type="text" 
                            name="country_region" 
                            id="country_region" 
                            placeholder="Country/Region"
                            onChange={(event) => this.inputChangedHandler(event, 'country_region')} />
                        </Col>
                        <Col>
                            <Input 
                            type="text" 
                            name="province" 
                            id="province" 
                            placeholder="Province"
                            onChange={(event) => this.inputChangedHandler(event, 'province')} />
                        </Col>
                        <Col>
                            <Input 
                            type="text" 
                            name="postal_code" 
                            id="postal_code" 
                            placeholder="Postal Code"
                            onChange={(event) => this.inputChangedHandler(event, 'address1')} />
                        </Col>
                    </FormGroup>
                    <FormGroup className={classes.FormGroup}>
                        <Col>
                            <Input 
                            type="text" 
                            name="phone_number" 
                            id="phone_number" 
                            placeholder="Phone Number"
                            onChange={(event) => this.inputChangedHandler(event, 'phone_number')} />
                        </Col>
                    </FormGroup>
                    <FormGroup className={classes.FormButton}>
                        <Button onClick={() => this.handleSubmit()}>Continue to Shipping Method</Button>
                    </FormGroup>


                </Form>
            </div>
        )
    }
}

export default Login
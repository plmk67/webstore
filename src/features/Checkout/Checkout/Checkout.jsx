import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Form, Button, Control} from 'react-bootstrap'
import {addToCheckout} from '../checkoutActions'
import { Link } from 'react-router-dom'
import cuid from 'cuid'
import classes from './Checkout.module.css'
import StripeCheckout from '../../Stripe/StripeCheckout'
import  { composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';

const validate = combineValidators({
    email: isRequired({message: 'Email is required'})
});


class Checkout extends Component {
    
    state = {
        order_date: new Date(),
        order_items: this.props.order_items,
        order_id: false,
        errorMessage:'',
        shipping_cost: 0,
        shipping_selected: false,
        shipping_type: ''
    }

    

    handleFormInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (payload, order_id) => {
        this.props.addToCheckout(payload)
        this.setState({
            order_id: order_id
        })
    }

    handleSelect = (event) => {
        this.setState({
            shipping_cost: JSON.parse(event.target.value)[0].toFixed(2),
            shipping_selected: true,
            shipping_type: JSON.parse(event.target.value)[1]
        })
    }



    render() {
        let form
        const {order_items} = this.props;
        const order_id = cuid()
        const order = {
            [order_id]: this.state
        } 

        let shipping = ''

        if(this.state.shipping_selected === false){
            shipping = <p>Calculate at Checkout</p>
        } else {
            shipping = <p>${this.state.shipping_cost}</p>}

        console.log(this.state)

        return(
            <Container className={classes.Checkout}>
                 <Row className={classes.Checkout__ContactInfo} >
                    <Row className={classes.Checkout__Header}>
                            <img 
                            src='https://cdn.shopify.com/s/files/1/0818/5483/t/10/assets/logo.png?713'
                            alt='corduroi club logo'/>
                    </Row>
                    <Form className={classes.Checkout__ContactInfo_Form}>
                        <Form.Group>
                            <Form.Label>Contact Information</Form.Label>
                            
                            <Form.Control 
                                name="email"
                                onChange={this.handleFormInput} 
                                type="email" 
                                placeholder="Email" />
                        </Form.Group>
                        <Form.Label>Shipping Address</Form.Label>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                    name='shipping_first_name'
                                    onChange={this.handleFormInput} type="text" placeholder="First Name" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                    name='shipping_last_name'
                                    onChange={this.handleFormInput} type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Control 
                                name='shipping_address1'
                                onChange={this.handleFormInput} 
                                type="text" placeholder="Address" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                name='shipping_address2'
                                onChange={this.handleFormInput} 
                                type="text" placeholder="Apartment, Suite, etc. (optional)" />
                            </Form.Group>               
                            <Form.Group>
                                <Form.Control
                                name='shipping_city'
                                onChange={this.handleFormInput} 
                                type="text" placeholder="City" />
                            </Form.Group>
                
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                    name='shipping_country'
                                    onChange={this.handleFormInput} 
                                    type="text" placeholder="Country" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control
                                    name='shipping_province'
                                    onChange={this.handleFormInput} 
                                    type="text" placeholder="Province" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                    name='shipping_postal_code'
                                    onChange={this.handleFormInput} 
                                    type="text" placeholder="Postal Code" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Control 
                                name='phone_number'
                                onChange={this.handleFormInput} 
                                type="text" 
                                placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Shipping Method</Form.Label>
                                <Form.Control 
                                    as="select"
                                    onChange={this.handleSelect.bind(this)}>
                                        <option type="number" value={JSON.stringify([new Number(12), new String('Standard')])}>Standard</option>
                                        <option type="number" value={JSON.stringify([new Number(30), new String('Express')])}>Express</option>
                                </Form.Control>    
                            </Form.Group>
                        </Form>
                        <Row 
                            as={Link}
                            to={{pathname:`/payment/${order_id}`}}
                            className={classes.Checkout__Shipping_Method}>
                            <Button 
                            onClick={ () => this.handleFormSubmit({order}, this.order_id)}
                            variant="secondary"> Continue to Payment Method</Button>       
                        </Row>
                 
                    
                        
                </Row>
                <Col className={classes.Checkout_OrderSummary}>
                    <Col className={classes.Checkout_OrderSummary__Box}>
                        <Col>
                            {order_items && order_items.map( (items) => (
                                <Row className={classes.Checkout__Items}>
                                    <div className={classes.Checkout__Order_Info}>
                                        <div className={classes.Checkout__Thumbnail_ProductName}>
                                            <div className={classes.Checkout__Thumbnail_Image}>
                                                <img src={items.item.product_image}
                                                alt={items.item.product_sku}/>
                                                <span className={classes.Checkout__Order_Quantity}>{items.item.order_quantity}</span>
                                            </div>
                                            <div className={classes.Checkout__Thumbnail_Product_Name}>
                                                <p>{items.item.product_name}</p>
                                            </div>
                                        </div>
                                        <div className={classes.Checkout__Price}>
                                             <p>${(items.item.order_quantity*items.item.product_price).toFixed(2)}</p>
                                        </div>
                                    </div>
                                </Row>
                            ))}
                        </Col>
                        <Row>
                            <div className={classes.Checkout__Discount}>
                                <div className={classes.Checkout__Discount_Code}>
                                    <Form.Control type="text" placeholder="Discount Code" />
                                </div>
                                <div className={classes.Checkout__Discount_Button}>
                                    <Button variant="secondary">Apply</Button>
                                </div>
                            </div> 
                        </Row>
                        <Row>
                            <div className={classes.Checkout__Subtotal}>
                                <div>
                                    <p>Subtotal</p>
                                </div>
                                <div>
                                    <p>${order_items && order_items.reduce( (acc, items) => acc + items.item.order_cost, 0).toFixed(2)}</p>
                                </div>
                            </div>
                            <div className={classes.Checkout__Shipping}>
                                <div>
                                    <p>Shipping</p>
                                </div>
                                <div>
                                    <p>{shipping}</p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className={classes.Checkout__Grand_Total}>
                                <div>
                                    <h5>Total</h5>
                                </div>
                                <div>
                                    <h4>${order_items && 
                                    ( Number(order_items.reduce( (acc, items) => acc + items.item.order_cost, 0).toFixed(2)) + Number(this.state.shipping_cost)).toFixed(2) }</h4>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <StripeCheckout
                                description='Corduroi Club'
                                amount= {order_items && 
                                    ( Number(order_items.reduce( (acc, items) => acc + items.item.order_cost, 0).toFixed(2)) + Number(this.state.shipping_cost)) }
                                billingAddress
                                zipCode
                                image="https://cdn.shopify.com/s/files/1/0818/5483/t/10/assets/logo.png?713"
                                locale="auto"
                                name="www.corduroiclub.com"
                                stripeKey= 'pk_test_K8hH1MLjoGyYmB6mTVgLIEf900Aop4KNCd'
                                token={this.onToken}
                            />
                        </Row>
                        
                    </Col>
                </Col>
            </Container>
        )
    }
}

const mapToState = (state, ownProps) => {
    let order_items = state.cart

    return{
        order_items
    }
}

const mapDispatchToProps = {
    addToCheckout
}

export default connect(mapToState, mapDispatchToProps)(Checkout)
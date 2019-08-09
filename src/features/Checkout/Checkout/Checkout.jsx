import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Form, Button, Control} from 'react-bootstrap'
import {addToCheckout} from '../checkoutActions'
import { Link } from 'react-router-dom'
import cuid from 'cuid'
import classes from './Checkout.module.css'
import StripeCheckout from '../../Stripe/StripeCheckout'


class Checkout extends Component {
    
    state = {
        order_date: new Date(),
        order_items: this.props.order_items,
        errorMessage:'',
        shipping_cost: 0,
        shipping_selected: false,
        shipping_type: '',
    }

    handleFormInput = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = {}
        for (let element of form.elements) {
            if (element.tagName === 'BUTTON') { continue; }
            data[element.name] = element.value;
        }
        data['date'] = new Date();
        data['order_id'] = JSON.stringify(cuid())
        data['order_items'] = this.order_items

      if (!event.target.checkValidity()) {
        this.setState({ displayErrors: true })
        console.log('not valid');
      } else {
        this.props.addToCheckout(data)
        this.setState({ displayErrors: false })

        let path = '/payment/' + cuid();

        this.props.history.push(path)
        
      }
    }

    render() {
        const { displayErrors } = this.state;
        const { validated } = this.state;
        let form
        const {order_items} = this.props;
        let order_id = cuid()
        const order = {
            [order_id]: this.state
        } 

        let shipping = ''

        if(this.state.shipping_selected === false){
            shipping = <p>Calculate at Checkout</p>
        } else {
            shipping = <p>${this.state.shipping_cost}</p>}

        
        return(
            <Container className={classes.Checkout}>
                 <Row className={classes.Checkout__ContactInfo} >
                    <Row className={classes.Checkout__Header}>
                            <img 
                            src='https://cdn.shopify.com/s/files/1/0818/5483/t/10/assets/logo.png?713'
                            alt='corduroi club logo'/>
                    </Row>
                    <Form 
                        className={classes.Checkout__ContactInfo_Form}
                        validated={validated}
                        onSubmit={this.handleFormSubmit}
                        noValidate
                        >
                    <Form.Group>
                            <Form.Label>Contact Information</Form.Label>
                            <Form.Control 
                                name="email"                           
                                type="email" 
                                placeholder="Email"
                                required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide an email
                                </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Label>Shipping Address</Form.Label>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                    name='shipping_first_name'
                                    type="text" 
                                    placeholder="First Name" 
                                    required/>
                                      <Form.Control.Feedback type="invalid">
                                        Please provide a first name
                                    </Form.Control.Feedback>
                                </Form.Group>
                              
                                <Form.Group as={Col}>
                                    <Form.Control 
                                    name='shipping_last_name'
                                    type="text" 
                                    placeholder="Last Name"
                                    required  />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a last name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                
                            </Form.Row>
                            <Form.Group>
                                <Form.Control 
                                name='shipping_address1'
                                type="text" 
                                placeholder="Address"
                                required 
                                 />
                                  <Form.Control.Feedback type="invalid">
                                Please enter address information.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                name='shipping_address2'
                                type="text" 
                                placeholder="Apartment, Suite, etc. (optional)"
                                />
                            </Form.Group>               
                            <Form.Group>
                                <Form.Control
                                name='shipping_city'
                                type="text" 
                                placeholder="City"
                                required  />
                                <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                    name='shipping_country'
                                    type="text" placeholder="Country"
                                    required  />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control
                                    name='shipping_province'
                                    type="text" placeholder="Province"
                                    required  />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control 
                                    name='shipping_postal_code'
                                    type="text" placeholder="Postal Code"
                                    required  />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Control 
                                name='phone_number'
                                type="text" 
                                placeholder="Phone Number"
                                required />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Shipping Method</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="shipping_method"
                                    required >
                                        <option 
                                            placeholder="Select Shipping Method"></option>
                                        <option 
                                            value={JSON.stringify([new Number(12).toFixed(2), new String('Standard')])}
                                            required 
                                            >Standard</option>
                                        <option 
                                            value={JSON.stringify([new Number(30).toFixed(2), new String('Express')])}
                                            required
                                            >Express</option>
                                </Form.Control>    
                            </Form.Group>
                            <Row 
                            className={classes.Checkout__Shipping_Method}>
                                <Button
                                type="submit"
                                variant="secondary"> Continue to Payment Method</Button>       
                            </Row>
                        </Form>
                        
                </Row>
                <Col className={classes.Checkout_OrderSummary}>
                    <Col className={classes.Checkout_OrderSummary__Box}>
                        <Col>
                            {order_items && order_items.map( (items) => (
                                <Row key={items.item.product_sku} className={classes.Checkout__Items}>
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
                                    ( Number(order_items.reduce( (acc, items) => acc + items.item.product_price*items.item.order_quantity, 0).toFixed(2)) + Number(this.state.shipping_cost)).toFixed(2) }</h4>
                                </div>
                            </div>
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
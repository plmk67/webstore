import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Form, FormControl, Button} from 'react-bootstrap'
import classes from './Checkout.module.css'
import {addToCheckout} from '../checkoutActions'
import cuid from 'cuid'

 
class Checkout extends Component {
    
    state = {
        order_date: new Date(),
        order_items: this.props.order_items
    }

    handleFormInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (payload) => {
        this.props.addToCheckout(payload)
    }

    render() {
        const {order_items} = this.props;

        const order_id = cuid()
        const order = {
            [order_id]: this.state,
        } 

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
                                name='first_name'
                                onChange={this.handleFormInput} type="text" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control 
                                name='last_name'
                                onChange={this.handleFormInput} type="text" placeholder="Last Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Control 
                             name='address1'
                             onChange={this.handleFormInput} 
                            type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                             name='address2'
                             onChange={this.handleFormInput} 
                             type="text" placeholder="Apartment, Suite, etc. (optional)" />
                        </Form.Group>               
                        <Form.Group>
                            <Form.Control
                             name='city'
                             onChange={this.handleFormInput} 
                             type="text" placeholder="City" />
                        </Form.Group>
            
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control 
                                 name='country'
                                 onChange={this.handleFormInput} 
                                type="text" placeholder="Country" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                 name='province'
                                 onChange={this.handleFormInput} 
                                type="text" placeholder="Province" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control 
                                 name='postal_code'
                                 onChange={this.handleFormInput} 
                                type="text" placeholder="Postal Code" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Control 
                             name='phone_number'
                             onChange={this.handleFormInput} 
                            type="text" placeholder="Phone Number" />
                        </Form.Group>
                    </Form>
                    <Row className={classes.Checkout__Shipping_Method}>
                        <Button 
                        onClick={() => this.handleFormSubmit({order}) }
                        variant="secondary"> Continue to Shipping Method</Button>         
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
                                    <p>$25.00</p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className={classes.Checkout__Grand_Total}>
                                <div>
                                    <h5>Total</h5>
                                </div>
                                <div>
                                    <h4>${order_items && order_items.reduce( (acc, items) => acc + items.item.order_cost, 25).toFixed(2)}</h4>
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
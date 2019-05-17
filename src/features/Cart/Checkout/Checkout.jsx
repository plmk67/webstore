import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import classes from './Checkout.module.css'

 
class Checkout extends Component {

    
    render() {
        const {order_items} = this.props;
        console.log(order_items)

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
                            
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                       
                       <Form.Label>Shipping Address</Form.Label>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Apartment, Suite, etc. (optional)" />
                        </Form.Group>               
                        <Form.Group>
                            <Form.Control type="text" placeholder="City" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Country" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Province" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Postal Code" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Phone Number" />
                        </Form.Group>
                    </Form>
                    <Row className={classes.Checkout__Shipping_Method}>
                        <Button variant="secondary"> Continue to Shipping Method</Button>         
                    </Row>
                </Row>
                <Col className={classes.Checkout_OrderSummary}>
                    <Col className={classes.Checkout_OrderSummary__Box}>
                        <Col>
                            {order_items && order_items.map( (order_item) => (
                                <Row className={classes.Checkout__Items}>
                                    <div className={classes.Checkout__Order_Info}>
                                        <div className={classes.Checkout__Thumbnail_ProductName}>
                                            <div className={classes.Checkout__Thumbnail_Image}>
                                                <img src={order_item.product_image}
                                                alt={order_item.product_sku}/>
                                                <span className={classes.Checkout__Order_Quantity}>1</span>
                                            </div>
                                            <div className={classes.Checkout__Thumbnail_Product_Name}>
                                                <p>{order_item.product_name}</p>
                                            </div>
                                        </div>
                                        <div className={classes.Checkout__Price}>
                                             <p>${order_item.product_price.toFixed(2)}</p>
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
                                    <p>$132.00</p>
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
                                    <h4>$157.00</h4>
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

    let order_items = state.product

    return{
        order_items
    }
  
  }

export default connect(mapToState)(Checkout)
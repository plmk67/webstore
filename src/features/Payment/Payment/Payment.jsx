import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import classes from './Payment.module.css'
import StripeCheckout from '../../Stripe/StripeCheckout'


// const createOptions = () => {
//     return {
//         style: {
//         base: {
//             fontSize: '16px',
//             color: '#424770',
//             letterSpacing: '0.025em',
//             '::placeholder': {
//             color: '#aab7c4',
//             },
//         },
//         invalid: {
//             color: '#c23d4b',
//         },
//         },
//     };
// };  

class Payment extends Component {
    
    state = {
        order_date: new Date(),
        order_items: this.props.order_items,
        order_id: false,
        errorMessage:'',
    }

    routeToHome = () => {
        this.props.history.push('')
    }

    render() {
        // let form
        const {order_items} = this.props;
        // const order_id = cuid()
        
        // let id = window.location.href.substr(-25,25)

        let order = ''

        if(this.props.order_info){
            order = this.props.order_info
        }
         
        let ship = ''

        if(order) { 
           ship = JSON.parse(order.shipping_method)
        } else {
           ship = ''
        }
        let shipping_cost = ship[0]

        // let cart_total = (Number(order_items.reduce( (acc, items) => acc + items.item.order_cost, 0)) + Number(shipping_cost)).toFixed(2)

        return(
            <Container className={classes.Checkout}>
                <Row className={classes.Checkout__ContactInfo} >
                    <Row onClick={this.routeToHome} className={classes.Checkout__Header}>
                            <img 
                            src='https://cdn.shopify.com/s/files/1/0818/5483/t/10/assets/logo.png?713'
                            alt='corduroi club logo'/>
                    </Row>
                    <Row className={classes.Checkout__ContactInfo_Form}>
                        
                    </Row>
                    <Row>
                        <Card style={{ width: '500px' }}>
                            <Card.Body>
                                <Row>
                                    <Col md={2}>
                                        <Card.Text>Contact</Card.Text>
                                    </Col>
                                    <Col md={8}>
                                        <Card.Text>{order && order.email }</Card.Text>
                                    </Col>
                                    <Col md={2}>
                                        <Card.Text>Change</Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={2}>
                                        <Card.Text>Ship to</Card.Text>
                                    </Col>
                                    <Col md={8}>
                                        <Card.Text>
                                        {order && 
                                            order.shipping_address1 + ' ' + order.shipping_address2 + ' ' + order.shipping_city + ' ' + order.shipping_province + ' ' + order.shipping_country + ' ' + order.shipping_postal_code}</Card.Text>
                                    </Col>
                                    <Col md={2}>
                                        <Card.Text>Change</Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={2}>
                                        <Card.Text>Method</Card.Text>
                                    </Col>
                                    <Col md={8}>
                                        <Card.Text>{order && 
                                            order.shipping_address1}</Card.Text>
                                    </Col>
                                    <Col md={2}>
                                        <Card.Text>Change</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <StripeCheckout
                                description='Corduroi Club'
                                amount= {order_items && 
                                    ( Number(order_items.reduce( (acc, items) => acc + items.item.product_price*items.item.order_quantity, 0).toFixed(2)) + Number(shipping_cost)) }
                                billingAddress
                                zipCode
                                image="https://cdn.shopify.com/s/files/1/0818/5483/t/10/assets/logo.png?713"
                                locale="auto"
                                name="www.corduroiclub.com"
                                stripeKey= 'pk_test_K8hH1MLjoGyYmB6mTVgLIEf900Aop4KNCd'
                                token={this.onToken}
                            />  
                        </Col>
                        
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
                                <p>${order_items && order_items.reduce( (acc, items) => acc + items.item.product_price*items.item.order_quantity, 0).toFixed(2)}</p>
                                </div>
                            </div>
                            <div className={classes.Checkout__Shipping}>
                                <div>
                                    <p>Shipping</p>
                                </div>
                                <div>
                                    <p>${shipping_cost}</p>
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
                                    ( Number(order_items.reduce( (acc, items) => acc + items.item.product_price*items.item.order_quantity, 0).toFixed(2)) + Number(ship[0])).toFixed(2) }</h4>
                                </div>
                            </div>
                        </Row>
                        <Row>
                        
                        </Row>
                        
                    </Col>
                </Col>
            </Container>
        )
    }
}

const mapToState = (state, ownProps) => {
    let order_items = state.cart;
    let order_info = state.checkout[state.checkout.length-1];

    return{
        order_items,
        order_info
    }
}



export default connect(mapToState)(Payment)
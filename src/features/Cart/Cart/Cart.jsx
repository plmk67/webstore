import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col, FormControl, Button} from 'react-bootstrap'
import classes from './Cart.module.css'
import { addToCheckout } from '../../Checkout/checkoutActions'
 

class Cart extends Component {

    state = {
        cart_items: this.props.cart_items,
        order_items: null
    }

    handleAddToCheckout = (payload) => {
        this.setState({
            order_items: payload
        })
        this.props.addToCheckout(payload)
    }

    handleUpdateQuantity= (event) => {
        console.log(event.target.id)
        // let item = this.state.cart_items[0].filter(item.sku => item.sku === event.target.id)
    }

    render() {

        const {cart_items} = this.props;
        let checkout;

        console.log(this.state.cart_items)

        if (!Object.keys(cart_items).length) {
            checkout = 
            <Row className={classes.Cart__EmptyCart}>
                <h2>Your Cart</h2>
                <br/>
                <p>No Items in Cart</p>
                <p>Continue browsing <a href="http://localhost:3000/collection" alt="homepage">here</a></p>
            </Row>
           
        } else {
            checkout = 
                <Row className={classes.Cart}>
                <Row className={classes.Cart_ItemList}>
                        <Row className={classes.Cart__Quantity_Price_Header}>
                            <Col md={6}>
                            </Col>
                            <Col >
                                <p>Price</p>
                            </Col >
                            <Col>
                                <p>Quantity</p>
                            </Col>
                            <Col>
                                <p>Total</p>
                            </Col>
                        </Row>
                    </Row>
                        
                   
                    <Row className={classes.Cart__Line}>
                        <hr />
                    </Row>
                

                    {cart_items && cart_items.map( (order_item) => (
                        <Row className={classes.Cart__Items}>
                            <Row className={classes.Cart__Thumbnail_Info}>
                                <Col>
                                    <img src={order_item.item.product_image}
                                        alt={order_item.item.product_sku}/>
                                </Col>
                                <Col>
                                    {order_item.item.product_name}
                                </Col>
                            </Row>
                            <Row className={classes.Cart__Quantity_Price}>
                                <Col className={classes.Cart__Price}>
                                    ${order_item.item.product_price.toFixed(2)}
                                </Col>
                                <Col className={classes.Cart__Quantity}>
                                    <FormControl 
                                    type="number"
                                    id={order_item.item.product_sku} 
                                    min={0}
                                    placeholder={order_item.item.order_quantity}
                                    onChange={(e) => this.handleUpdateQuantity(e)}></FormControl>
                                </Col>
                                <Col className={classes.Cart__Total}>
                                    ${(order_item.item.order_quantity*order_item.item.product_price).toFixed(2)}
                                </Col>
                            </Row>
                            
                        </Row>
                    ))}

                    
                    <Row className={classes.Cart__Line}>
                        <hr />
                    </Row>
                    <Row className={classes.Cart__Subtotal}>
                        <p> Subtotal:
                        ${cart_items && cart_items.reduce((acc, order_item) => acc + order_item.item.product_price * order_item.item.order_quantity, 0).toFixed(2)}</p>
                        <p><i>Shipping and taxes calculated at checkout</i></p>
                    </Row>
                    <Row className={classes.Cart__Update_Checkout}>
                        <Button 
                            variant="secondary"
                            >Update Cart</Button>
                        <Button 
                            variant="dark"
                            onClick={()=> this.handleAddToCheckout({cart_items})}>Checkout</Button>
                    </Row>

                </Row>
            }

        return (
            <Container>
                <Row className={classes.Cart}>
                    <Row className={classes.Cart__Header}>
                        <Row className={classes.Header}>
                            <img
                            src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713"
                            alt='Store Logo'></img>
                        </Row>
                    </Row>    
                </Row>

                <Row>
                    {checkout}
                </Row>
            </Container>
        )
    }
}

const mapToState = (state, ownProps) => {
    let cart_items = state.cart

    return{
        cart_items
    }
}

const mapDispatchToProps = {
    addToCheckout
}

export default connect(mapToState, mapDispatchToProps)(Cart)

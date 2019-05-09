import React, { Component} from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, FormControl, Button} from 'react-bootstrap'
import classes from './CheckoutPage.module.css'
 

class CheckoutPage extends Component {
    render() {
        const {order_items} = this.props;

        return (
            <Container>
                <Row className={classes.CheckoutPage}>
                    <Row className={classes.CheckoutPage__Header}>
                        <Row className={classes.Header}>
                            <img
                            src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713"
                            alt='Store Logo'></img>
                        </Row>
                    </Row>    
                    <Row className={classes.CheckoutPage_ItemList}>
                        <Row className={classes.CheckoutPage__Quantity_Price_Header}>
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
                        
                   
                    <Row className={classes.CheckoutPage__Line}>
                        <hr />
                    </Row>
                    

                    {order_items && order_items.map( (order_item) => (
                        <Row className={classes.CheckoutPage__Items}>
                            <Row className={classes.CheckoutPage__Thumbnail_Info}>
                                <Col>
                                    <img src={order_item.item.product_image}
                                        alt={order_item.item.product_sku}/>
                                </Col>
                                <Col>
                                    {order_item.item.product_name}
                                </Col>
                            </Row>
                            <Row className={classes.CheckoutPage__Quantity_Price}>
                                <Col className={classes.CheckoutPage__Price}>
                                    ${order_item.item.product_price.toFixed(2)}
                                </Col>
                                <Col className={classes.CheckoutPage__Quantity}>
                                    
                                    <FormControl 
                                    type="number" 
                                    min={0}
                                    placeholder={order_item.item.order_quantity}></FormControl>
                                </Col>
                                <Col className={classes.CheckoutPage__Total}>
                                    ${(order_item.item.order_quantity*order_item.item.product_price).toFixed(2)}
                                </Col>
                            </Row>
                            
                        </Row>
                    ))}

                    
                    <Row className={classes.CheckoutPage__Line}>
                        <hr />
                    </Row>
                    <Row className={classes.CheckoutPage__Subtotal}>
                        <p> Subtotal:
                        {order_items && order_items.reduce((acc, order_item) => acc + order_item.item.product_price * order_item.item.order_quantity, 0).toFixed(2)}</p>
                    </Row>
                    <Row className={classes.CheckoutPage__Update_Checkout}>
                        <Button variant="secondary">Update Cart</Button>
                        <Button variant="dark">Checkout</Button>
                    </Row>
                </Row>
            </Container>
        )
    }
}

const mapToState = (state, ownProps) => {
    let order_items = state.order

    return{
        order_items
    }
}

const mapDispatchToProps = {

}

export default connect(mapToState, mapDispatchToProps)(CheckoutPage)

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormControl,
  Button,
  Form
} from "react-bootstrap";
import classes from "./Cart.module.css";
import { updateToCartItem } from "../../Cart/cartActions";
import { addToCheckout } from "../../Checkout/checkoutActions";

class Cart extends Component {
  state = {
    //this is grouped from props
    // cart_items: this.props.cart_items,
    cart_modal: false
  };

  routeToCheckout = () => {
    this.props.history.push("/checkout");
  };

  handleUpdateQuantity = event => {
    event.preventDefault();

    if (this.props.cart_items.length > 0) {
      let target_item = this.props.cart_items.filter(
        item => item.item.product_sku === event.target.id
      );
      target_item[0].item.order_quantity = parseInt(event.target.value);

      this.props.updateToCartItem(target_item[0]);
    }
  };

  render() {
    const { cart_items } = this.props;
    let checkout;

    if (!Object.keys(cart_items).length) {
      checkout = (
        <Row className={classes.Cart__EmptyCart}>
          <h2>Your Cart</h2>
          <br />
          <p>No Items in Cart</p>
          <p>
            Continue browsing{" "}
            <a href="http://localhost:3000/collection" alt="homepage">
              here
            </a>
          </p>
        </Row>
      );
    } else {
      checkout = (
        <Row className={classes.Cart}>
          <Row className={classes.Cart_ItemList}>
            <Row className={classes.Cart__Quantity_Price_Header}>
              <Col md={6}></Col>
              <Col>
                <p>Price</p>
              </Col>
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

          <Form>
            {cart_items &&
              cart_items.map((order_item, index) => (
                <Row
                  key={order_item.item.product_sku}
                  className={classes.Cart__Items}
                >
                  <Row className={classes.Cart__Thumbnail_Info}>
                    <Col>
                      <img
                        src={order_item.item.product_image}
                        alt={order_item.item.product_sku}
                      />
                    </Col>
                    <Col>{order_item.item.product_name}</Col>
                  </Row>
                  <Row className={classes.Cart__Quantity_Price}>
                    <Col className={classes.Cart__Price}>
                      ${order_item.item.product_price.toFixed(2)}
                    </Col>
                    <Col className={classes.Cart__Quantity}>
                      <FormControl
                        type="number"
                        id={order_item.item.product_sku}
                        min={1}
                        placeholder={order_item.item.order_quantity}
                        onChange={this.handleUpdateQuantity}
                      ></FormControl>
                    </Col>
                    <Col className={classes.Cart__Total}>
                      $
                      {(
                        order_item.item.order_quantity *
                        order_item.item.product_price
                      ).toFixed(2)}
                    </Col>
                  </Row>
                </Row>
              ))}
          </Form>

          <Row className={classes.Cart__Line}>
            <hr />
          </Row>

          <Row className={classes.Cart__Subtotal}>
            <p>
              {" "}
              Subtotal: $
              {cart_items &&
                cart_items
                  .reduce(
                    (acc, order_item) =>
                      acc +
                      order_item.item.product_price *
                        order_item.item.order_quantity,
                    0
                  )
                  .toFixed(2)}
            </p>
            <p>
              <i>Shipping and taxes calculated at checkout</i>
            </p>
          </Row>

          <Row className={classes.Cart__Update_Checkout}>
            {/* <Button 
                            variant="secondary"
                            type="submit"
                            onClick={this.handleUpdateQuantity}
                            >Update Cart</Button> */}
            <Button variant="dark">
              <Row
                className={classes.Cart__CheckoutButton}
                onClick={this.routeToCheckout}
              >
                Checkout
              </Row>
            </Button>
          </Row>
        </Row>
      );
    }

    return (
      <Container>
        <Row className={classes.Cart}>
          <Row className={classes.Cart__Header}>
            <Row className={classes.Header}>
              <img
                src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713"
                alt="Store Logo"
              ></img>
            </Row>
          </Row>
        </Row>

        <Row>{checkout}</Row>

        <Row className={classes.Cart__PreviousPage}>
          <Col as={Link} to={`/collection`}>
            Back to Collections
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapToState = (state, ownProps) => {
  let cart_items = state.cart;

  return {
    cart_items
  };
};

const mapDispatchToProps = {
  updateToCartItem,
  addToCheckout
};

export default connect(mapToState, mapDispatchToProps)(Cart);

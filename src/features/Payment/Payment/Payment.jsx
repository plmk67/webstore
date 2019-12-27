import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import classes from "./Payment.module.css";
import StripeCheckout from "../../Stripe/StripeCheckout";


class Payment extends Component {
  state = {
    order_date: new Date(),
    order_items: this.props.order_items,
    order_id: false,
    errorMessage: ""
  };

  routeToHome = () => {
    this.props.history.push("");
  };

  render() {
    // let form
    const { order_items } = this.props;

    let order = "";

    if (this.props.order_info) {
      order = this.props.order_info;
    }

    return (
      <Container className={classes.Checkout}>
        <Row className={classes.Checkout__ContactInfo}>
          <Row onClick={this.routeToHome} className={classes.Checkout__Header}>
            <img
              src="https://cdn.shopify.com/s/files/1/0818/5483/t/10/assets/logo.png?713"
              alt="corduroi club logo"
            />
          </Row>
          <Row className={classes.Checkout__ContactInfo_Form}></Row>
          <Row>
            <Card style={{ width: "500px" }}>
              <Card.Body>
                <Row>
                  <Col md={2}>
                    <Card.Text>Contact</Card.Text>
                  </Col>
                  <Col md={8}>
                    <Card.Text>{order && order.email}</Card.Text>
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
                        order.shipping_address1 +
                          " " +
                          order.shipping_address2 +
                          " " +
                          order.shipping_city +
                          " " +
                          order.shipping_province +
                          " " +
                          order.shipping_country +
                          " " +
                          order.shipping_postal_code}
                    </Card.Text>
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
                    <Card.Text>
                      {order &&
                        (order.shipping_cost === "15.00"
                          ? "Standard Shipping"
                          : "Express Shipping")}
                    </Card.Text>
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
                description="Corduroi Club"
                amount={(
                  Number(
                    order_items
                      .reduce(
                        (acc, items) =>
                          acc +
                          items.item.product_price * items.item.order_quantity,
                        0
                      )
                      .toFixed(2)
                  ) + Number(order.shipping_cost)
                ).toFixed(2)}
                billingAddress
                zipCode
                image="https://cdn.shopify.com/s/files/1/0818/5483/t/10/assets/logo.png?713"
                locale="auto"
                name="www.corduroiclub.com"
                token={this.onToken}
              />
            </Col>
          </Row>
        </Row>
        <Col className={classes.Checkout_OrderSummary}>
          <Col className={classes.Checkout_OrderSummary__Box}>
            <Col>
              {order_items &&
                order_items.map(items => (
                  <Row className={classes.Checkout__Items}>
                    <div className={classes.Checkout__Order_Info}>
                      <div className={classes.Checkout__Thumbnail_ProductName}>
                        <div className={classes.Checkout__Thumbnail_Image}>
                          <img
                            src={items.item.product_image}
                            alt={items.item.product_sku}
                          />
                          <span className={classes.Checkout__Order_Quantity}>
                            {items.item.order_quantity}
                          </span>
                        </div>
                        <div
                          className={classes.Checkout__Thumbnail_Product_Name}
                        >
                          <p>{items.item.product_name}</p>
                        </div>
                      </div>
                      <div className={classes.Checkout__Price}>
                        <p>
                          $
                          {(
                            items.item.order_quantity * items.item.product_price
                          ).toFixed(2)}
                        </p>
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
                  <p>
                    $
                    {order_items &&
                      order_items
                        .reduce(
                          (acc, items) =>
                            acc +
                            items.item.product_price *
                              items.item.order_quantity,
                          0
                        )
                        .toFixed(2)}
                  </p>
                </div>
              </div>
              <div className={classes.Checkout__Shipping}>
                <div>
                  <p>Shipping</p>
                </div>
                <div>
                  <p>${order && order.shipping_cost}</p>
                </div>
              </div>
            </Row>
            <Row>
              <div className={classes.Checkout__Grand_Total}>
                <div>
                  <h5>Total</h5>
                </div>
                <div>
                  <h4>
                    $
                    {order_items &&
                      (
                        Number(
                          order_items
                            .reduce(
                              (acc, items) =>
                                acc +
                                items.item.product_price *
                                  items.item.order_quantity,
                              0
                            )
                            .toFixed(2)
                        ) + Number(order.shipping_cost)
                      ).toFixed(2)}
                  </h4>
                </div>
              </div>
            </Row>
            <Row></Row>
          </Col>
        </Col>
      </Container>
    );
  }
}

const mapToState = (state, ownProps) => {
  let order_items = state.cart;
  let order_info = state.checkout;

  return {
    order_items,
    order_info
  };
};

export default connect(mapToState)(Payment);

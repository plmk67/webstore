import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { addToCheckout } from "../checkoutActions";
import cuid from "cuid";
import classes from "./Checkout.module.css";
import { db } from "../../../db/firestore";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order_items: this.props.order_items,
      errorMessage: "",
      shipping_selected: false,
      discount_code: false,
      shipping_first_name: '',
      shipping_last_name: '',
      shipping_address1: '',
      shipping_address2: '',
      shipping_city: '',
      shipping_country: '',
      shipping_province: '',
      shipping_postal_code: '',
      shipping_method: '',
      shipping_cost: '',
      phone_number: '',
    };
  }

  routeToHome = () => {
    this.props.history.push("");
  };

  handleFormInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });

    if ([event.target.name] === 'shipping_method' && this.state.shipping_method === "Standard") {
        this.setState({ shipping_cost: Number(15.0).toFixed(2) });
    } else if ([event.target.name] === 'shipping_method' && this.state.shipping_method === "Express") {
        this.setState({ shipping_cost: Number(25.0).toFixed(2) });
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();

    let order = {
      order_date: new Date(),
      email: this.state.email,
      shipping_first_name: this.state.shipping_first_name,
      shipping_last_name: this.state.shipping_last_name,
      shipping_address1: this.state.shipping_address1,
      shipping_address2: this.state.shipping_address2,
      shipping_city: this.state.shipping_city,
      shipping_country: this.state.shipping_country,
      shipping_province: this.state.shipping_province,
      shipping_postal_code: this.state.shipping_postal_code,
      shipping_method: this.state.shipping_method,
      shipping_cost: this.state.shipping_cost,
      phone_number: this.state.phone_number,
      order_items: this.state.order_items,
      shipment_status: "unfulfilled",
      customer_type: "guest"
    };

    db.collection("order")
      .doc()
      .set({ order })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });

    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true });
      console.log("not valid");
    } else {
      this.setState({ displayErrors: false });

      let path = "/payment/" + cuid();
      this.props.addToCheckout(order);
      this.props.history.push(path);
    }
  };

  render() {
    const { validated } = this.state;
    const { order_items } = this.props;
    let shipping = "";

    if (this.state.shipping_selected === false) {
      shipping = <p>Calculate at Checkout</p>;
    } else {
      shipping = <p>${this.state.shipping_cost}</p>;
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
          <Form
            className={classes.Checkout__ContactInfo_Form}
            validated={validated}
            onSubmit={this.handleFormSubmit}
            onChange={this.handleFormInput}
            noValidate
          >
            <Form.Group>
              <Form.Label>Contact Information</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide an email
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Label>Shipping Address</Form.Label>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  name="shipping_first_name"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a first name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Control
                  name="shipping_last_name"
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a last name.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Control
                name="shipping_address1"
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
                name="shipping_address2"
                type="text"
                placeholder="Apartment, Suite, etc. (optional)"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="shipping_city"
                type="text"
                placeholder="City"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  name="shipping_country"
                  type="text"
                  placeholder="Country"
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  name="shipping_province"
                  type="text"
                  placeholder="Province"
                  required
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  name="shipping_postal_code"
                  type="text"
                  placeholder="Postal Code"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Control
                name="phone_number"
                type="text"
                placeholder="Phone Number"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Shipping Method</Form.Label>
              <Form.Control as="select" name="shipping_cost" required>
                <option placeholder="Select Shipping Method"></option>
                <option value={Number(15).toFixed(2)} required>
                  Standard (5-7 business days) - $15.00
                </option>
                <option value={Number(25).toFixed(2)} required>
                  Express (2-3 business days) - $25.00
                </option>
              </Form.Control>
            </Form.Group>
            <Row className={classes.Checkout__Shipping_Method}>
              <Button type="submit" variant="secondary">
                {" "}
                Continue to Payment Method
              </Button>
            </Row>
          </Form>
        </Row>
        <Col className={classes.Checkout_OrderSummary}>
          <Col className={classes.Checkout_OrderSummary__Box}>
            <Col>
              {order_items &&
                order_items.map(items => (
                  <Row
                    key={items.item.product_sku}
                    className={classes.Checkout__Items}
                  >
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
                  <h4>
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
                  </h4>
                </div>
              </div>
            </Row>
          </Col>
        </Col>
      </Container>
    );
  }
}

const mapToState = (state, ownProps) => {
  let order_items = state.cart;

  return {
    order_items
  };
};

const mapDispatchToProps = {
  addToCheckout
};

export default connect(
  mapToState,
  mapDispatchToProps
)(Checkout);

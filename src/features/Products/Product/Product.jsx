import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  FormControl,
  Button,
  Modal
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCart, updateToCartItem } from "../../Cart/cartActions";
import classes from "./Product.module.css";
import { db } from "../../../db/firestore";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero_image: 0,
      shopping_cart_input: 1,
      update_order: false,
      order: {},
      // added_to_cart:
      //   this.props.cart.filter(
      //     item => item.item.product_sku === this.props.product.product_sku
      //   ).length > 0,
      cart_modal: false,
      product_price: 0,
      product_sku:'',
      product_description:'',
      product_image:[''],
      bulletpoint:[''],
    };
  }

  //mounting 
  componentDidMount() {
    let productId =this.props.match.params.ProductName
    console.log(productId.ProductName)

    db.collection("products")
      .where("product_name", "==", productId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach( doc => {
          this.setState(doc.data())
        });
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });

    
  }

  routeToCart = () => {
    this.setState({ cart_modal: false });
    let path = "/cart";
    this.props.history.push(path);
  };

  routeToCollections = () => {
    this.setState({ cart_modal: false });
    let path = "/collection";
    this.props.history.push(path);
  };

  handleImageChange = payload => {
    this.setState({
      hero_image: payload.index
    });
  };

  //for the Quantity input form
  handleQuantityInput = event => {
    this.setState({
      shopping_cart_input: parseInt(event.target.value)
    });
  };

  handleClose = () => {
    this.setState({
      cart_modal: false
    });
  };

  handleAddToCart = payload => {
    if (this.state.added_to_cart === false) {
      this.setState({
        order: payload,
        added_to_cart: true,
        cart_modal: true
      });
      this.props.addToCart(payload);
    } else if (this.state.added_to_cart === true) {
      this.setState({ cart_modal: true });
      this.props.updateToCartItem(payload);
    } else {
      console.log("quantity is the same");
    }
  };

  render() {

    console.log(this.props.productId)

    return (
      <Container className={classes.Product}>
        <Row className={classes.Header} as={Link} to={`/collection`}>
          <img
            src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713"
            alt="Store Logo"
          ></img>
        </Row>

        <Row>
          <Container className={classes.Product_Info}>
            <Row className={classes.Product_Info__Gallery}>
              <Col>
                <Row>
                  <img
                    src={this.state.product_image[this.state.hero_image]}
                    alt={this.state.product_image[this.state.hero_image]}
                  ></img>
                </Row>
                <Row className={classes.Product_Info_Alt_Image}>
                  {this.state.product_image &&
                    this.state.product_image.map((image, index) => (
                      <img
                        key={index}
                        onClick={() => this.handleImageChange({index})}
                        src={image}
                      ></img>
                    ))}
                </Row>
              </Col>
            </Row>
            <Row className={classes.Product_Info__Detail}>
              <Col>
                <Row>
                  <h5>{this.state.product_name}</h5>
                </Row>
                <Row className={classes.Price}>
                  <span>${this.state.product_price.toFixed(2)}</span>
                </Row>
                <Row className={classes.Quantity}>
                  <Row>
                    <span>Quantity</span>
                  </Row>
                  <Row className={classes.Quantity_InputField}>
                    <FormControl
                      onChange={this.handleQuantityInput}
                      type="number"
                      min={1}
                      max={20}
                      placeholder={1}
                      defaultValue={this.state.shopping_cart_input}
                    ></FormControl>
                  </Row>
                </Row>
                <Row className={classes.Add_To_Cart}>
                  {/* <Button
                    onClick={() => this.handleAddToCart({ item })}
                    variant="dark"
                  >
                    Add to Cart
                  </Button> */}
                </Row>
                <Row>
                  <p>{this.state.product_description}</p>
                </Row>
                <Row>
                  <ul>
                    {this.state.bulletpoint.map(bulletpoint => (
                      <li>{bulletpoint}</li>
                    ))}
                  </ul>
                </Row>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className={classes.Product__PreviousPage}>
          <Col as={Link} to={`/collection`}>
            Back to Collections
          </Col>
        </Row>

        <Modal show={this.state.cart_modal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {this.state.shopping_cart_input} item(s) added to Cart
            </Modal.Title>
          </Modal.Header>
          <Row>
            <Col md={8}>
              {/* <Modal.Body>
                {" "}
                <strong>Subtotal || </strong>{" "}
                {cart.reduce((acc, item) => acc + item.item.order_quantity, 0)}{" "}
                item(s){" "}
              </Modal.Body> */}
            </Col>
            <Col md={4}>
              <Modal.Body>
                {" "}
                {/* <strong>
                  CAD $
                  {cart
                    .reduce((acc, item) => acc + item.item.order_cost, 0)
                    .toFixed(2)}
                </strong> */}
              </Modal.Body>
            </Col>
          </Row>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.routeToCart}>
              Go to Cart
            </Button>
            <Button variant="primary" onClick={this.routeToCollections}>
              Continue Shopping
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

const mapToState = (state, ownProps) => {
  const productId = ownProps.match.ProductName;

 return(
   productId
 )
};


const mapDispatchToProps = {
  addToCart,
  updateToCartItem
 
};

export default Product;

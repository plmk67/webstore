import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Collection.module.css";
import { Container, Row, Col, Card, CardImg, CardText } from "react-bootstrap";
import Footer from "../../../app/components/layout/Footer/Footer";
import { Link } from "react-router-dom";

class Collection extends Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <Container className={classes.Collection}>
          <Row className={classes.Header} as={Link} to={`/`}>
            <img
              src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713"
              alt="Store Logo"
            ></img>
          </Row>
          <Row className={classes.ProductList}>
            <Container className={classes.ProductList__Container}>
              {products &&
                products.map(product => (
                  <Col>
                    <Row className={classes.ProductList__Card}>
                      {/* use routes as constants */}
                      <Row
                        as={Link}
                        to={{
                          pathname: `/collection/product/${product.product_name}`
                        }}
                      >
                        <CardImg
                          className={classes.ProductList__Card__Img}
                          src={product.product_image[0]}
                          alt="blue hat"
                        />
                      </Row>
                      <Row className={classes.ProductList__CardDetail}>
                        <Card.Text className={classes.ProductList__ProductName}>
                          {product.product_name}
                        </Card.Text>
                        <Card.Text
                          className={classes.ProductList__ProductPrice}
                        >
                          ${product.product_price.toFixed(2)}
                        </Card.Text>
                      </Row>
                    </Row>
                  </Col>
                ))}
            </Container>
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.product
});

export default connect(mapStateToProps)(Collection);

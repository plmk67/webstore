import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Collection.module.css";
import { Container, Row, Col, Card, CardImg } from "react-bootstrap";
import Footer from "../../../app/components/layout/Footer/Footer";
import { Link } from "react-router-dom";
import { db } from "../../../db/firestore";

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      products: []
    };
  }

  componentDidMount() {
    db.collection("products")
      .get()
      .then(data => {
        data.forEach(doc => {
          this.setState({ products: [...this.state.products, doc.data()] });
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }

  render() {
    return (
      <Container className={classes.Collection}>
        <Row className={classes.Header} as={Link} to={`/`}>
          <img
            src="//cdn.shopify.com/s/files/1/0818/5483/t/10/assets/cc-logo.svg?713"
            alt="Store Logo"
          ></img>
        </Row>
        <Row className={classes.ProductList}>
            <Col className={classes.ProductList__Container}>
              {this.state.products &&
                this.state.products.map(product => (
                  <Col className={classes.ProductList__Card}>
                    {/* use routes as constants */}
                    <Col
                      as={Link}
                      to={{
                        pathname: `/collection/product/${product.product_name}`
                      }}
                    >
                      <CardImg
                        className={classes.ProductList__Card__Img}
                        src={product.product_image[0]}
                        alt={product.product_name}
                      />
                    </Col>
                    <Col className={classes.ProductList__CardDetail}>
                      <Card.Text className={classes.ProductList__ProductName}>
                        {product.product_name}
                      </Card.Text>
                      <Card.Text className={classes.ProductList__ProductPrice}>
                        ${product.product_price.toFixed(2)}
                      </Card.Text>
                    </Col>
                  </Col>
                ))}
            </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

//Redux listing all the products
const mapStateToProps = state => ({
  products: state.product
});

export default connect(mapStateToProps)(Collection);

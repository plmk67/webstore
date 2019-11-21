import React, { Component } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import classes from "./createProduct.module.css";
import { db } from "../../../db/firestore";
import { FaBeer, FaPlus } from "react-icons/fa";

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletpoint: [""],
      product_image: [""]
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();

    let product = this.state;

    db.collection("products")
      .doc()
      .set(this.state)
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  handleFormInput = event => {
    if (event.target.name === "bulletpoint" || event.target.name === "product_image" ) {
      let obj = Array.from(this.state[event.target.name]);
      obj[event.target.alt] = event.target.value;

      this.setState({
        [event.target.name]: obj
      });
    } else if(event.target.name === "product_price"){
      this.setState({
        [event.target.name]: Number(event.target.value)
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  addBulletPoint = () => {
    this.setState({
      bulletpoint: this.state.bulletpoint.concat([""])
    });
  };

  addImageUrl = () => {
    this.setState({
      product_image: this.state.product_image.concat([""])
    });
  };

  render() {
    
    return (
      <Container className={classes.main}>
        <Col className={classes.container}>
          <Row className={classes.Form}>
            <Form
              onSubmit={this.handleFormSubmit}
              onChange={this.handleFormInput}
            >
              <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  name="product_name"
                  type="text"
                  placeholder="Product Name"
                />
                <Form.Label>Product Sku</Form.Label>
                <Form.Control
                  name="product_sku"
                  type="text"
                  placeholder="Product SKU"
                />
                <Form.Label>Price</Form.Label>
                <Form.Control
                  name="product_price"
                  type="number"
                  placeholder="Product Price"
                />
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  name="product_description"
                  type="text"
                  placeholder="Product Description"
                />
              </Form.Group>
              <Form.Group className={classes.Bulletpoint}>
                <Form.Label>Bulletpoints</Form.Label>
                {this.state.bulletpoint.map((bulletpoint, index) => (
                  <Form.Control
                    alt={index}
                    name="bulletpoint"
                    type="text"
                    placeholder={`Bullet Point #${index + 1}`}
                  />
                ))}

                <Button
                  className={classes.Button}
                  onClick={this.addBulletPoint}
                  variant="outline-primary"
                  placeholder="Click me"
                >
                  <FaPlus />
                </Button>
              </Form.Group>

              <Form.Group className={classes.Bulletpoint}>
                <Form.Label>Image URL</Form.Label>
                {this.state.product_image.map((product_image, index) => (
                  <Form.Control
                    alt={index}
                    name="product_image"
                    type="text"
                    placeholder={`Image URL #${index + 1}`}
                  />
                ))}
              </Form.Group>
              <Button
                className={classes.Button}
                onClick={this.addImageUrl}
                variant="outline-primary"
                placeholder="Click me"
              >
                <FaPlus />
              </Button>
            </Form>

            <Form.Group>
              <Button
                className={classes.Button}
                onClick={this.handleFormSubmit}
                variant="outline-primary"
                placeholder="Click me"
              >
                Create Product
              </Button>
            </Form.Group>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default CreateProduct;
